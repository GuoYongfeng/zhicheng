/**
 * 日期设置
 * create by gaojinghua, 2015-04-20
 */

var Base = require('common:widget/ui/lib/base.js'),
	UtilDatetime = require('common:widget/ui/lib/datetime.js'),
	Component = require('common:widget/ui/component/component.js'),
	CompYear = require('common:widget/ui/date_picker/comp/year/year.js'),
	CompMonth = require('common:widget/ui/date_picker/comp/month/month.js'),
	CompDate = require('common:widget/ui/date_picker/comp/date/date.js');

var DatePicker = Base.extend(Component, {
	init: function () {
		this.tpl = __inline('./date_picker.tpl');
		var data = this.getData();
		//年份选择
		var compYear = new CompYear({
			data: data
		});
		//月份选择
		var compMonth = new CompMonth({
			data: data
		});
		//日期选择
		var compDate = new CompDate({
			data: data
		});
		
		this.append({
			year: compYear,
			month: compMonth,
			date: compDate
		});
	},
	registeCompEvents: function () {
		var _this = this,
			compYear = this.child('year'),
			compMonth = this.child('month'),
			compDate = this.child('date');
		//监听年份改变事件
		compYear.on('WIDGET:U-YEARCHANGE', function (evt) {
			compMonth.setData(evt);
		});
		//监听月份改变事件
		compMonth.on('WIDGET:U-MONTHCHANGE', function (evt) {
			compDate.setData(evt);
			compYear.setData(evt);
		});
		//监听日期改变事件
		compDate.on('WIDGET:U-DATECHANGE', function (evt) {
			compMonth.setData(evt);
			compYear.setData(evt);
			_this.setData(evt);		
			_this.fireChangeEvent();			
		});
	},
	fireChangeEvent: function () {
		var evt = $.extend(true, {}, this.getData());
		this.fire('WIDGET:U-DATEPICKERCHANGE', evt);
	},
	render: function () {

	}
});

module.exports = DatePicker;