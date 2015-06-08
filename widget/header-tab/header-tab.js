/**
 * @author dbxiao
 * @date   2015-04-07
 * @descript lpheader land page market widget: lp-header
 */
var headerTab = function(option){
	this._option = {
		title     : option && option.title || "PP租车",
		referer   : option && option.referer || document.referrer,
		quick_tit : option && option.quick_tit || "",
		quick_url : option && option.quick_url || "javascript:;",
	};
	this.init();
};

headerTab.view = {
	"back" : $("._headerTap_back a"),
	"title": $("._headerTap_title"),
	"quick": $("._headerTap_quick a")
};

headerTab.prototype = {
	init : function(){
		this.setBack();
		this.setQuick();
		this.setTitle();
	},
	setQuick : function(){
		var _this = this;
		headerTab.view.quick.html(_this._option.quick_tit)
							.attr("href", _this._option.quick_url)
							.click(function(e){
								//hark : 单独对注销操作进行统计
								if(_this._option.quick_tit == "注销")
									_this.tongji("click_logout");
							});
	},
	setTitle : function(){
		var _this = this;
		headerTab.view.title.html(_this._option.title);
	},
	setBack : function(){
		var _this = this;
		headerTab.view.back.on('click', function(){
			window.history.go(-1);
		});
	},
	tongji : function(name){
		var platform = $.cookie('platform') ? $.cookie('platform').toUpperCase() : '';
		_gaq.push(['_trackEvent', 
				   'signup', 
				   name+'_New'+platform+'Time20150428', 
				   $.cookie('SID')+'_'+$.cookie('icc_user_id')+'_H5_'+$.cookie('__utmz')+platform+'20150428' 
		]);
	}
};

module.exports = headerTab;
