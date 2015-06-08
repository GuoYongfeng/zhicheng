var mask =  require('common:widget/ui/util/singleton-mask/singleton-mask.js').getInstance();

var noop = function(){},
	cfg = {
		title: '温馨提示',
		content: '',
		btns: [{
			text: '确认',
			fn : noop
		}]
	};

module.exports = {
	inited: false,
	bindEvents: function(){
		var me = this;
		// this.dom.btns.on('tap','span', function(){
		// 	me.hide();
		// 	return false;
		// });
	},

	show: function( text, options ){
		if( !text || mask.status.is_show ){
			return ;
		}
		if(!options){
			this.dom.content.html(text);
		}else{
			var options = $.extend({content: text},  options);
			this._render(options);
		}

		mask.style('ui-mask-grey').append(this.dom.wrap).show();
	},

	hide: function(){
		mask.hide();
	},

	_render: function( options ){
		var me = this,
			dom = this.dom;

		options.title && dom.title.text(options.title);
		options.content && dom.content.html(options.content);

		if( options.btns ){
			var btns = options.btns;
			dom.btns.empty();
			for(var i=0,n=btns.length;i<n;i++){
				var btn = $('<span>' + (btns[i].text || '确认') + '</span>');

				(function( j ){
					btn.on('click', function(){
						me.hide();
						(btns[j].fn || noop)();
						return false;
					});	
				})( i );
				

				dom.btns.append(btn);
			}
		}
	},
	init: function  (options) {
		if(this.inited){
			return ;
		}

		this.inited = true;

		this.dom = {};

		this.options = $.extend(cfg, options);

		this.dom.wrap = $(__inline('./dialog.tpl'));
		this.dom.title = this.dom.wrap.find('h1');
		this.dom.content = this.dom.wrap.find('.ui-dialog-content');
		this.dom.btns = this.dom.wrap.find('.ui-dialog-btns');

		this._render( this.options );
		this.bindEvents();
	}
}