/**
 * 时间设置
 * create by gaojinghua, 2015-04-20
 */

var Base = require('common:widget/ui/lib/base.js'),
	UtilDatetime = require('common:widget/ui/lib/datetime.js'),
	Component = require('common:widget/ui/component/component.js');

var TimePicker = Base.extend(Component, {
	init: function () {
		this.tpl = __inline('./time_picker.tpl');
		this.data.util = UtilDatetime;
	},
	registeCompEvents: function () {
		var _this = this;
		_this.onDomEvent('click', '.hour-add', function (evt) {
			_this._addHour();
		});
		_this.onDomEvent('click', '.hour-sub', function (evt) {
			_this._subHour();
		});
		_this.onDomEvent('click', '.minute-add', function (evt) {
			_this._addMinute();
		});
		_this.onDomEvent('click', '.minute-sub', function (evt) {
			_this._subMinute();
		});
	},
	_addHour: function () {
		var instance = this.getInstance(),
			data = this.getData();
		data.datetime.time.hour = (data.datetime.time.hour+1)%24;
		this.setData(data);
		this.fireChangeEvent()
	},
	_subHour: function () {
		var instance = this.getInstance(),
			data = this.getData();
		data.datetime.time.hour = (data.datetime.time.hour-1+24)%24; 
		this.setData(data);
		this.fireChangeEvent()
	},
	_addMinute: function () {
		var instance = this.getInstance(),
			data = this.getData();
		data.datetime.time.minute = (data.datetime.time.minute+15)%60;
		this.setData(data);
		this.fireChangeEvent() 
	},
	_subMinute: function () {
		var instance = this.getInstance(),
			data = this.getData();
		data.datetime.time.minute = (data.datetime.time.minute-15+60)%60;
		this.setData(data);
		this.fireChangeEvent()
	},
	adjustData: function () {
		var data = this.getData();
		data.datetime.time.ms = new Date(
			data.datetime.date.year, 
			data.datetime.date.month, 
			data.datetime.date.date, 
			data.datetime.time.hour, 
			data.datetime.time.minute
		).getTime();
		var limits = data.limits;
		var isLimited = false;
		if (limits) {
			var limit = limits[data.datetime.date.ms];
			if (limit && limit.parts) {
				data.limit = limit;
				for (var i=0,len=limit.parts.length; i<len; i++) {
					var part = limit.parts[i];
					if (data.datetime.time.ms >= part.min && data.datetime.time.ms <= part.max ) {
						isLimited = true;
						break;
					}
				}
			}			
		}
		data.isLimited = isLimited;
	},
	fireChangeEvent: function () {
		var data = this.getData();
		if (!data.isLimited) {
			var evt = $.extend(true, {}, this.getData());
			delete evt.util;
			this.fire('WIDGET:U-TIMEPICKERCHANGE', evt);
		}		
	}
	
});

module.exports = TimePicker;