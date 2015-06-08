/**
 * 单例的独占式蒙版层，用于做阻塞式窗体或组件，如toast，waiting或alert，confirm等对话框
 * append 的元素自动居中
 */
var Base = require('common:widget/ui/lib/base.js'),
	Component = require('common:widget/ui/util/component/component.js');

var Mask = Base.extend(Component, {
	init: function(){
		!this.dom.base.length  && (this.dom.base = $('body'));
		this.render();
		this.bindEvents();
		this.fire('init');

		this.options.style && this.setStyle(this.options.style);
		
	},

	bindEvents: function(){
		var _this = this,
			_container = this.dom.container;
		_container.on('click', '.ui-singleton-wrap', function(e){
			e.stopImmediatePropagation();
			e.stopPropagation();
			return false;
		}).on('click', function(e){
			_this.hide();
		}).on('touchstart,touchmove', function(e){
			e.stopImmediatePropagation();
			e.stopPropagation();
			return false;
		});

		var evt = "onorientationchange" in window ? "orientationchange" : "resize";  

		document.addEventListener && document.addEventListener('touchmove', function(event) {
            //判断条件,条件成立才阻止背景页面滚动,其他情况不会再影响到页面滚动
            if(_this.status.is_show){
                event.preventDefault();
            }
        })

		$(window).on(evt, $.proxy(this._rep, this));
		$('html,body').on('scroll', $.proxy(this._rep, this));
	},
	//重新定位，设置position：fixed
	_rep: function(){
		this.status.is_show && this.dom.container.css({'height': window.innerHeight + 'px','top': window.pageYOffset + 'px'} ); 
	},

	/**
	 * 增加mask样式，用于复写背景透明度等
	 * @param  {[type]} styleClass [class 名]
	 * @return this 链式调用
	 */
	style : function ( styleClass ){
		if(this.status.is_show){
			return this;
		}
		if( this.styleClass ){
			this.dom.container.removeClass( this.styleClass );
		}
		if( styleClass ){
			this.styleClass = styleClass;
			this.dom.container.addClass( styleClass );
		}
		return this;
	},
   

	show: function(){
		this.fire('show');
		this.dom.container.removeClass('hide');
		this.status.is_show = true;
		this._rep();
		document
		return this;
	},
	hide : function(){
		this.dom.container.addClass('hide');
		this.fire('hide');
		this.status.is_show = false;
		return this;
	},

	append : function(){
		if(this.status.is_show){
			return this;
		}
		var args = Array.prototype.slice.call(arguments);
		$.fn.append.apply(this.dom.instance.empty(), args);
		return this;
	},

	render: function(){
		//Base.log('render:','Modal');
		if(this.status.is_show){
			return this;
		}
		var container = this.dom.container = $('<div class="ui-singleton-mask hide"></div>');
		var instance = this.dom.instance = $('<div class="ui-singleton-wrap"></div>');
		
		container.append(instance).appendTo(this.dom.base);
		this.fire('render');

		return this;
	}

});

var instance = null;

module.exports.getInstance = function (option){
	if(!instance){
		instance = new Mask('body', option);
	}

	return instance;
}

