/**
 * 年份设置
 */

var Base = require('common:widget/ui/lib/base.js'),
	Component = require('common:widget/ui/component/component.js');

var Comp = Base.extend(Component, {
	init: function () {
		this.tpl = __inline('./year.tpl');
	},
	registeDomEvents: function () {
		var _this = this;
		_this.onDomEvent('click', '.ui-year', function (evt) {
			var target = $(evt.currentTarget);
			var toYear = parseInt(target.data('value'), 10);
			var data = _this.getData();
			if (toYear != data.datetime.date.year) {
				data.datetime.date.year = toYear;
				_this.setData(data);
				_this.fireChangeEvent();
			}			
		});
	},
	fireChangeEvent: function () {
		var evt = this.getData();
		this.fire('WIDGET:U-YEARCHANGE', evt);
	}
});

module.exports = Comp;