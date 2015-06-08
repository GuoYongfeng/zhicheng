/**
 * 取还车时间设置，最终返回yyyy-mm-dd HH:MM ~ yyyy-mm-dd HH:MM的结果
 * create by gaojinghua@ppzuche.com 2015-04-18
 */
var Base = require('common:widget/ui/lib/base.js'),
	Datalogic = require('common:widget/ui/util/datalogic/datalogic.js'),
	UtilDatetime = require('common:widget/ui/lib/datetime.js'),
	Component = require('common:widget/ui/component/component.js'),
	CompDatetimePicker = require('common:widget/ui/datetime_picker/datetime_picker.js'),
	CompDatetimeDisplay = require('common:widget/ui/datetime_display/datetime_display.js');

var DatetimeRange = Base.extend(Component, {
	init: function () {
		this.tpl = __inline('./datetime_range.tpl');
		var data = this.getData();
		/*//TODO:测试数据，需删除
		data = {
			begin: '2015-04-26 18:00',
			end: '2015-04-29 20:00',
			limits: {
				startdate: '2015-04-25',
				freetime: '111111100000111111111111111111111111111111111111111111111111',
				ranges: {'2015-04-25': '10:00 - 24:00', '2015-04-26': '00:00 - 10:00', '2015-05-01': '10:00 - 24:00'}
			}
		};*/
		data.limits = Datalogic.formatLimitInfo(data.limits);
		var now = new Date();
		//默认取车时间
		data.begin = data.begin || UtilDatetime.calTimeTo15mins(now, true);
		//默认还车时间2天后
		data.end = data.end || UtilDatetime.calTimeTo15mins(UtilDatetime.addDays(now, 2), true);
		var compDisplayBegin = new CompDatetimeDisplay({
			data: {
				label: '取车时间',
				datetime: data.begin,
				selected: true
			}
		});
		var compDisplayEnd = new CompDatetimeDisplay({
			data: {
				label: '还车时间',
				datetime: data.end,
				selected: false
			}
		});
		var compPickerBegin = new CompDatetimePicker({
			data: {
				datetime: UtilDatetime.parseStringToJSON(data.begin, true),
				range: {
					min: UtilDatetime.parseDatetimeToJSON(now),
					max: UtilDatetime.parseDatetimeToJSON(UtilDatetime.addDays(now, 20))
				},
				limits: data.limits,
				selected: true
			}
		});
		var compPickerEnd = new CompDatetimePicker({
			data: {
				datetime: UtilDatetime.parseStringToJSON(data.end, true),
				range: {
					min: UtilDatetime.parseDatetimeToJSON(now),
					max: UtilDatetime.parseDatetimeToJSON(UtilDatetime.addDays(now, 26))
				},
				limits: data.limits,
				selected: false
			}
		});
		this.append({
			displaybegin: compDisplayBegin,
			displayend: compDisplayEnd,
			pickerbegin: compPickerBegin,
			pickerend: compPickerEnd
		});
		this.current = 'begin';
	},
	
	changeDisplayHanlder: function (strCompName) {
		var _this = this,
			strDisplayComp = 'display' + strCompName,
			strPickerComp = 'picker' + strCompName;
		var	compDisplay = _this.child(strDisplayComp),
			compPicker = _this.child(strPickerComp);
		if (compDisplay && compPicker) {
			if (_this.current) {
				var curDisplayComp = _this.child('display'+_this.current),
					curPickerComp = _this.child('picker'+_this.current);
				curDisplayComp.canelSelected();
				curPickerComp.canelSelected();
			}
			compDisplay.setSelected();
			compPicker.setSelected();
			_this.current = strCompName;
		}		
	},
	registeDomEvents: function () {
		var _this = this;
		_this.onDomEvent('click', '.ui-display-item', function (evt) {
			var target = $(evt.currentTarget);
			var item = target.data('value');
			if (item != this.currentDisplay) {
				_this.changeDisplayHanlder(item);
			}			
		});
	},
	registeCompEvents: function () {
		var _this = this,
			compPickerBegin = this.child('pickerbegin'),
			compPickerEnd = this.child('pickerend'),
			compDisplayBegin = this.child('displaybegin'),
			compDisplayEnd = this.child('displayend');
		var data = _this.getData();
		compPickerBegin.on('WIDGET:U-DATETIMEPICKERCHANGE', function (evt) {
			var strDate = UtilDatetime.parseJSONToString(evt.datetime);
			data.begin = strDate;
			_this.setData(data);
			compDisplayBegin.refresh(strDate);
			_this.fireChangeEvent();
		});
		compPickerEnd.on('WIDGET:U-DATETIMEPICKERCHANGE', function (evt) {
			var strDate = UtilDatetime.parseJSONToString(evt.datetime);
			data.end = strDate;
			_this.setData(data);
			compDisplayEnd.refresh(strDate);
			_this.fireChangeEvent();
		});
	},
	fireChangeEvent: function () {
		var evt = $.extend(true, {}, this.getData());
		this.fire('WIDGET:DATETIMERANGECHANGE', evt);
	},
	render: function () {

	}
});

module.exports = DatetimeRange;