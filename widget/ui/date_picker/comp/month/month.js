/**
 * 月份设置
 * Data: {year: 2015, month: 3}
 */

var Base = require('common:widget/ui/lib/base.js'),
	UtilDatetime = require('common:widget/ui/lib/datetime.js'),
	Component = require('common:widget/ui/component/component.js');

var Comp = Base.extend(Component, {
	init: function () {
		this.tpl = __inline('./month.tpl');
		this.adjustData();
	},
	registeDomEvents: function () {
		var _this = this;
		_this.onDomEvent('click', '.ui-month', function (evt) {
			var target = $(evt.currentTarget);
			var toMonthIndex = parseInt(target.data('index'), 10);			
			var data = _this.getData();
			var toMonth = data.list[toMonthIndex];
			if (toMonth.month != data.datetime.date.month || toMonth.year != data.datetime.date.year) {
				data.datetime.date.year = toMonth.year;
				data.datetime.date.month = toMonth.month;
				_this.setData(data);				
				_this.fireChangeEvent();
			}			
		});
	},
	fireChangeEvent: function () {
		var evt = $.extend(true, {}, this.getData());
		delete evt.list;
		this.fire('WIDGET:U-MONTHCHANGE', evt);
	},
	adjustData: function () {
		var data = this.getData();
		data.list = this.calMonthList();
	},
	/**
	 * 计划显示月份
	 * @return {[type]} [description]
	 */
	calMonthList: function () {
		var data = this.getData(),
			list = [];
		var d = data.datetime.date;
		list.push(this.calMonth(d, -2));
		list.push(this.calMonth(d, -1));
		list.push(d);
		list.push(this.calMonth(d, 1));
		list.push(this.calMonth(d, 2));
		return list;
	},
	calMonth: function (obj, n) {
		var d = new Date(obj.year, obj.month + n);
		var json = UtilDatetime.parseDatetimeToJSON(d);
		return {
			year: json.date.year,
			month: json.date.month
		};
	}
});

module.exports = Comp;