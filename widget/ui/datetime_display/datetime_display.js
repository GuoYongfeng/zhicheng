/**
 * 取还车时间设置
 * create by gaojinghua, 2015-04-20
 */

var Base = require('common:widget/ui/lib/base.js'),
	UtilDatetime = require('common:widget/ui/lib/datetime.js'),
	Component = require('common:widget/ui/component/component.js');

var DatetimeDisplay = Base.extend(Component, {
	init: function () {
		this.tpl = __inline('./datetime_display.tpl');
	},
	setSelected: function () {
		var instance = this.getInstance(),
			data = this.getData();
		instance.find('.ui-datetime-display').addClass('selected');
		data.selected = true;
	},
	canelSelected: function () {
		var instance = this.getInstance(),
			data = this.getData();
		instance.find('.ui-datetime-display').removeClass('selected');
		data.selected = false;
	},
	refresh: function (strDate) {
		var data = this.getData();
		data.datetime = strDate;
		this.setData(data);
	} 
});

module.exports = DatetimeDisplay;