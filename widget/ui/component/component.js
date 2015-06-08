/**
 * 组件基类
 * 依赖：base.js
 * 属性:
 * 
 *
 * 方法:
 *    
 *
 * 事件:
 *    INIT
 *    RENDER
 *    SHOW
 *    HIDE
 *    DISPOSE
 *
 * TODO:需与util/component/component.js合并
 */

var Base = require('common:widget/ui/lib/base.js'),
	EC = require('common:widget/ui/lib/event_center.js'),
	Template = require('common:widget/ui/lib/template.js');

/**
 * 组件基类
 * @param {JSON} options 相关设置
 */
function Component(options){
	this._id = Base.guid();
	this.eventCenter = new EC.meditor();
	this.dom = {};
	this.html = '';
	//配置项
	this.conf = {};
	//数据项
	this.data = {};
	if(options){
		$.extend(this.conf, options.conf);
		$.extend(this.data, options.data);
	}
	//组件状态
	this.status = {
		has_rendered: false,//是否已render
		has_shown: false,//是否展示
		enable: true,//是否可用，为false不可用，并有对应的展示
	};
	//子组件
	this.components = {};
	//父组件
	this.parent = {};	
	this.lisenter = [];

	//初始化时的执行序列
	this.init();
	this.initRender();	
	this.registeDomEvents();
	this.registeCompEvents();
	this.registeDefaultEvent();
	this.fire('COMPONENT:INIT');
}
Component.prototype = {
	/**
	 * 初始化
	 * @return {[type]} [description]
	 */
	init: function () {
		//Base.log'init:需子类实现');
	},
	initRender: function () {
		if (this.tpl) {
			//传入tpl的数据
			var data = {},
			//子组件
				comps = this.components; 
			//传入ID
			data.id = this._id;
			//将组件自身的数据通过vars变量传入tpl
			data.vars = this.data; 
			//如果有子组件
			for (var name in comps) {
				var comp = comps[name];
				data['comp' + name] = comp.html;
			}
			//用ID包裹
			var html = [];
			html.push('<div id="'+ this._id + '">');
				html.push(this.template(data));
			html.push('</div>');
			this.html = html.join('');
		}
	},
	/**
	 * 使用当前模板渲染数据
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	template: function (data) {
		var html = '';
		if (data) {
			html = Template(this.tpl, data);
		}
		return html;
	},
	/**
	 * 获取DOM实例
	 * @return {[type]} [description]
	 */
	getInstance: function () {
		if (!this.dom.instance) {
			this.dom.instance = $('#' + this._id);
		}
		return this.dom.instance;
	},
	/**
	 * 注册默认事件
	 * @return {[type]} [description]
	 */
	registeDefaultEvent: function () {
		var _this = this;
		_this.on('COMPONENT:DATACHANGE', function () {
			_this.render();
		})
	},
	/**
	 * 注册DOM事件
	 * @return {[type]} [description]
	 */
	registeDomEvents: function () {
		//Base.log'registeDomEvents:需子类实现');
	},
	/**
	 * 绑定DOM事件，在render完成后绑定到最外层容器
	 * @return {[type]} [description]
	 */
	onDomEvent: function (eventName, selector, fn) {
		var e = {
			eventName: eventName,
			selector: selector,
			fn: fn
		};
		this.lisenter.push(e);
	},
	/**
	 * 监听事件，需子类实现
	 * @return {[type]} [description]
	 */
	listenEvents: function () {
		var instance = this.getInstance();
		if (this.lisenter.length > 0) {
			for (var i = 0, len = this.lisenter.length; i < len; i++) {
				var e = this.lisenter[i];
				instance.on(e.eventName, e.selector, e.fn);
			}
		}
		var comps = this.components; 
		for (var name in comps) {
			var comp = comps[name];
			if (comp) {
				comp.listenEvents();
			}
		}
	},
	/**
	 * 注册组件间事件
	 * @return {[type]} [description]
	 */
	registeCompEvents: function () {
		//Base.log'registeCompEvents:需子类实现');
	},
	/**
	 * [render description]
	 * @return {[type]} [description]
	 */
	render: function () {
		var	data = this.getData(),
			html = this.template({vars: data}),
			instance = this.getInstance();
		instance.html(html);
	},
	/**
	 * 销毁
	 * @return {[type]} [description]
	 */
	dispose: function () {
		if(this.dom.instance){
			this.dom.instance.remove();
			this.dom.instance = null;
			this.fire('COMPONENT:HIDE');
			this.fire('COMPONENT:DISPOSE');
		}
	},
	/**
	 * 设为可用
	 * @return {[type]} [description]
	 */
	disable: function () {
		this.status.enable = false;
	},
	/**
	 * 设为不可用
	 * @return {[type]} [description]
	 */
	enable: function () {
		this.status.enable = true;
	},
	/**
	 * 设置数据
	 * @return {[type]} [description]
	 */
	setData: function (obj) {
		this.adjustData();
		$.extend(true, this.data, obj);
		this.fire('COMPONENT:DATACHANGE');
	},
	getData: function () {
		return this.data;
	},
	adjustData: function () {
		
	},
	/**
	 * 添加子组件
	 * @param  {[String]} name 名称
	 * @param  {[Component]} comp 组件
	 */
	append: function (comps){
		if (comps) {
			var instance = this;
			for (var name in comps) {
				var comp = comps[name];
				instance.components[name] = comp;
				comp.setParent(instance);
			}			
		}
	},
	//获取子组件
	child: function (name) {
		return this.components[name];
	},
	/**
	 * 删除子组件
	 * @param  {[JSON]} {name1: comp1, name2: comp2} [description]
	 * @return {[type]}       [description]
	 */
	remove: function (comps) {
		if (comps) {
			var instance = this;
			for (var name in comps) {
				var comp = comps[name];
				delete instance.components[name];
				comp = null;
			}	
		}
	},
	/**
	 * 设置父组件
	 * @param {[type]} comp [description]
	 */
	setParent: function (comp) {
		if (comp) {
			this.parent = comp;
		} else {
			this.parent = {};
		}
	},
	/**
     * 绑定事件
     * @method on
     * @grammar on( name, callback[, context] ) => self
     * @param  {String}   name     事件名，支持多个事件用空格隔开
     * @param  {Function} callback 事件处理器
     * @param  {Object}   [context]  事件处理器的上下文。
     * @return {self} 返回自身，方便链式
     * @chainable
     * @class Mediator
     */
	on: function(name, callback){
		this.eventCenter.on(name, callback);
	},
	/**
	 * 触发事件
	 * @param  {[type]} name [description]
	 * @return {[type]}      [description]
	 */
	fire: function(name, eventObject){
		this.eventCenter.fire(name, eventObject);
	}
}


module.exports = Component;