/**
 * 日子设置
 */

var Base = require('common:widget/ui/lib/base.js'),
	UtilDatetime = require('common:widget/ui/lib/datetime.js'),
	Component = require('common:widget/ui/component/component.js');

var Comp = Base.extend(Component, {
	init: function () {
		this.tpl = __inline('./date.tpl');	
		//星期显示
		this.conf.WEEK = ['日', '一', '二', '三', '四', '五', '六'];
		var data = this.getData();
		data.conf = this.conf.WEEK;
		//今天
		//data.now = UtilDatetime.parseDatetimeToJSON(new Date());
		//可选范围
		//data.range = this.calRange();
		//实际值，在用户选择后才会和datetime一致，datetime用于显示
		data.val = $.extend(true, {}, data.datetime);
		this.adjustData();
	},
	registeDomEvents: function () {
		var _this = this;
		_this.onDomEvent('click', '.rent', function (evt) {
			var target = $(evt.currentTarget);
			var instance = _this.getInstance();
			instance.find('.selected').removeClass('selected');
			target.addClass('selected');
			var data = _this.getData();
			var toDate = parseInt(target.data('value'), 10);
			if (toDate != data.datetime.date.date) {
				data.datetime.date.date = toDate;
				var dt = new Date(
					data.datetime.date.year, 
					data.datetime.date.month, 
					data.datetime.date.date
				);
				data.datetime.date.ms = dt.getTime();
				data.val.date.date = toDate;
				data.val.date.ms = dt.getTime();
				_this.fireChangeEvent();	
			}
		});
	},
	adjustData: function () {
		var data = this.getData();	
		data.datetime.date.ms = new Date(
			data.datetime.date.year, 
			data.datetime.date.month, 
			data.datetime.date.date
		).getTime();
		//日历显示列表
		data.list = this.calDateList();	
	},
	fireChangeEvent: function () {
		var evt = $.extend(true, {}, this.getData());
		delete evt.list;
		delete evt.conf;
		delete evt.now;
		this.fire('WIDGET:U-DATECHANGE', evt);
	},
	/**
	 * 计算日历，得到本月的第一天和最后一天
	 * @return {JSON} {dayFirst: new Date(), dayLast: new Date()}
	 */
	calDateList: function () {
		var data = this.getData();
		var dayFirst = new Date(data.datetime.date.year, data.datetime.date.month, 1),
			dayLast = new Date(data.datetime.date.year, (data.datetime.date.month + 1) , 0);
		return {
			dayFirst: dayFirst,
			dayLast: dayLast
		};
	}
});

module.exports = Comp;