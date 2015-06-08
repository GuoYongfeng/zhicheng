/**
 * 时间和日期设置
 * create by gaojinghua, 2015-04-20
 */


var Base = require('common:widget/ui/lib/base.js'),
	UtilDatetime = require('common:widget/ui/lib/datetime.js'),
	Component = require('common:widget/ui/component/component.js'),
	CompDatePicker = require('common:widget/ui/date_picker/date_picker.js'),
	CompTimePicker = require('common:widget/ui/time_picker/time_picker.js');


var DatetimePicker = Base.extend(Component, {
	init: function () {
		this.tpl = __inline('./datetime_picker.tpl');
		var data = this.getData();
		//年月日选择
		var compDatePicker = new CompDatePicker({
			data: data
		});
		//时间选择
		var	compTimePicker = new CompTimePicker({
			data: data
		});

		this.append({
			datePicker: compDatePicker,
			timePicker: compTimePicker
		});
		
	},
	registeCompEvents: function () {
		var _this = this,
			compDatePicker = this.child('datePicker'),
			compTimePicker = this.child('timePicker');
		//监听日期改变事件
		compDatePicker.on('WIDGET:U-DATEPICKERCHANGE', function (evt) {			
			compTimePicker.setData(evt);
			_this.setData(evt);
			_this.fireChangeEvent();
		});
		//监听时间改变事件
		compTimePicker.on('WIDGET:U-TIMEPICKERCHANGE', function (evt) {
			_this.setData(evt);
			_this.fireChangeEvent();
		});
	},
	fireChangeEvent: function () {
		var data = this.getData();
		data.datetime.date.ms = new Date(
			data.datetime.date.year, 
			data.datetime.date.month, 
			data.datetime.date.date
		).getTime();
		data.datetime.time.ms = new Date(
			data.datetime.date.year, 
			data.datetime.date.month, 
			data.datetime.date.date, 
			data.datetime.time.hour, 
			data.datetime.time.minute
		).getTime();
		var evt = $.extend(true, {}, data);
		this.fire('WIDGET:U-DATETIMEPICKERCHANGE', evt);
	},
	setSelected: function () {
		var instance = this.getInstance(),
			data = this.getData();
		instance.find('.ui-datetime-picker').removeClass('hide');
		data.selected = true;
	},
	canelSelected: function () {
		var instance = this.getInstance(),
			data = this.getData();
		instance.find('.ui-datetime-picker').addClass('hide');
		data.selected = false;
	},
	render: function () {

	}
});

module.exports = DatetimePicker;