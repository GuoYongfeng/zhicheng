/**
 * 组件基类
 * 依赖：base.js
 * 属性
 *
 * 方法
 *
 * 事件:
 *    init
 *    render
 *    show
 *    hide
 *    dispose
 * 
 * TODO:需与ui/component/component.js合并
 */

var Base = require('common:widget/ui/lib/base.js'),
	Meditor = require('common:widget/ui/lib/event_center.js');
/**
 * 组件基类
 * @param {dom} basedom 目标dom
 * @param {JSON} options 相关设置
 */
function Component(basedom, options){
	//dom
	this.dom = {
		base: $(basedom),
		container: null,
		instance: null
	}
	this.id = Base.guid();
	//配置项
	this.options = {};
	//组件数据
	this.data = {};
	//组件状态
	this.status = {
		has_rendered: false,//是否已render
		is_show: false,//是否展示
		enable: true,//是否可用，为false不可用，并有对应的展示
	};
	if(options){
		$.extend(this.options, options);
	}

	this.events = new Meditor.meditor();

	this.init();
}
Component.prototype = {
	/**
	 * 初始化
	 * @return {[type]} [description]
	 */
	init: function(){
		this.bindEvents();
		this.fire('init');
	},
	/**
	 * 绑定事件，需子类实现
	 * @return {[type]} [description]
	 */
	bindEvents: function(){
		Base.log('bindEvents:需子类实现');
	},
	/**
	 * 显示
	 * @return {[type]} [description]
	 */
	show: function(){
		if(this.status.has_rendered){
			//若要增加展示动画，修改此处
			this.dom.instance.show();
			this.status.is_show = true;
		}else{
			this.render();
			this.status.has_rendered = true;
			this.status.is_show = true;
			this.fire('render');
		}
        this.fire('show');
	},
	/**
	 * 隐藏
	 * @return {[type]} [description]
	 */
	hide: function(){
		if(this.status.is_show){
			//若要增加隐藏动画，修改此处
			this.dom.instance.hide();
			this.status.is_show = false;
			this.fire('hide');
		}
	},
	/**
	 * 创建，需子类实现
	 * @return {[type]} [description]
	 */
	render: function(){
		Base.log('render:需子类实现');
	},
	/**
	 * 销毁
	 * @return {[type]} [description]
	 */
	dispose: function(){
		if(this.dom.instance){
			this.dom.instance.remove();
			this.dom.instance = null;
			this.fire('dispose');
		}
	},
	/**
	 * 设为可用
	 * @return {[type]} [description]
	 */
	disable: function(){
		this.status.enable = false;
	},
	/**
	 * 设为不可用
	 * @return {[type]} [description]
	 */
	enable: function(){
		this.status.enable = true;
	},
	/**
	 * 返回当前值
	 * @return {[type]} [description]
	 */
	value: function(){
		return this.data.value;
	},
	/**
	 * [append description]
	 * @param  {[type]} comp [description]
	 * @return {[type]}      [description]
	 */
	append: function(comp){
		if(this.dom.container){
			this.dom.container.append(comp);
		}
	},
	/**
     * 绑定事件。
     *
     * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
     * ```javascript
     * var obj = {};
     *
     * obj.on( 'customEventA', function( arg1, arg2 ) {
     *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
     * });
     *
     * obj.fire( 'customEventA', 'arg1', 'arg2' );
     * ```
     *
     * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
     * 切会影响到`trigger`方法的返回值，为`false`。
     *
     * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
     * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
     * ```javascript
     * obj.on( 'all', function( type, arg1, arg2 ) {
     *     console.log( type, arg1, arg2 ); // => 'customEventA', 'arg1', 'arg2'
     * });
     * ```
     *
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
		this.events.on(name, callback);
	},
	fire: function(name, args){
		this.events.fire(name, args);
	}
}


module.exports = Component;