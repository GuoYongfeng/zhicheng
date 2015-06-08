function Frame(domContent, strClassName, strTitle, needConfirm){
	this.init(domContent, strClassName, strTitle, needConfirm);
}

Frame.prototype = {
	on: function(){
		var args = Array.prototype.slice.call(arguments);
		$.fn.on.apply(this.dom.el, args);
	},
	trigger: function(){
		var args = Array.prototype.slice.call(arguments);
		$.fn.trigger.apply(this.dom.el, args);
	},
	hide: function(){
		this.dom.el.addClass('hidden');
		this.trigger('hide');
	},
	//确定
	confirm: function () {
		this.trigger('confirm');
	},
	//取消
	cancel: function () {
		this.dom.el.addClass('hidden');
		this.trigger('canel');
	},
	show: function(){
		this.dom.el.removeClass('hidden');
		//修正高度和位置
		this.dom.el.height($('html,body').height());
		$('body').get(0).scrollTop = 0;

		this.trigger('show');
	},
	_render: function (htmlContent, strClassName, strTitle, needConfirm) {
		var html = [];
		strClassName = strClassName || '';
		html.push('<section class="ui-frame clearfix hidden ' + strClassName + '">');
		if(strTitle){
			html.push('<header class="ui-frame-head">')
				html.push('<div class="back"><span class="icon icon-back-arrow"></span></div>');
				html.push('<span class="title">' + strTitle + '</span>');
				if (needConfirm) {
					html.push('<div class="right"><span class="confirm">完成</span></div>');
				}
			html.push('</header>');
		}
			
		html.push('<div class="ui-frame-body"></div>');
		html.push('</section>');
		this.dom.el = $(html.join(''));
		this.dom.header = this.dom.el.find('.ui-frame-head');
		this.dom.body = this.dom.el.find('.ui-frame-body');
		this.dom.body.append($(htmlContent));
		this.dom.el.appendTo($('body'));
	},
	/**
	 * [init description]
	 * @param  {string} domContent   [内容html]
	 * @param  {string} strClassName [容器class name]
	 * @param  {string} strTitle     [标题]
	 * @param  {boolean} needConfirm  [是否需要右侧确定按钮]
	 * @return {[type]}              [description]
	 */
	init: function(domContent, strClassName, strTitle, needConfirm){
		this.dom = {};
		this._render(domContent, strClassName, strTitle, needConfirm);
		this.bindEvent();
	},
	bindEvent: function () {
		var _this = this;
		_this.dom.header.on('click', '.back', function () {
			_this.hide();
			return false;
		});
		_this.dom.header.on('click', '.confirm', function () {
			_this.confirm();
			return false;
		});
	}
}

module.exports = Frame;
