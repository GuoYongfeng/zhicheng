var city = {
	citys: [
		"北京", "天津", "上海","重庆", "广东", "河南",
		"河北", "辽宁", "黑龙江", "吉林", "湖南", "湖北",
		"安徽", "山东", "山西","新疆", "江苏", "浙江",
		"江西", "广西", "贵州","四川", "内蒙古", "陕西",
		"福建", "甘肃", "青海","西藏", "宁夏", "海南",
		"云南", "香港", "澳门","台湾",
	],
	dom: {
		lists: $('.city_wrap'),
		city_name: $('#city_name')
	},
	/**
	 * 初始化
	 * @return {[type]} [description]
	 */
	init: function(){
		this.createCitys();
		this.bind();
	},
	/**
	 * 批量添加城市
	 * @return {[type]} [description]
	 */
	createCitys: function(){
		var citys = this.citys;
		var tmp = [];
		for (var i = 0; i < citys.length; i++) {
			tmp.push(this.tpls(citys[i]));
		};

		this.dom.lists.append(tmp.join(''));
	},
	/**
	 * 城市模板
	 * @param  {[type]} city [description]
	 * @return {[type]}      [description]
	 */
	tpls: function( city){
		return '<li>' + city + '</li>';
	},
	/**
	 * 城市选择的瞬间绑定
	 * @return {[type]} [description]
	 */
	bind: function(){
		var _this = this;

		this.dom.lists.on('tap', 'li', function(e){
			var el = e.target;

			_this.reset();
			_this.dom.city_name.text($(el).text());
			$(el).addClass('selected');
		});
	},
	/**
	 * 选中当前城市之前，先将其他被选城市全部重置
	 * @return {[type]} [description]
	 */
	reset: function(){
		this.dom.lists.find('li').removeClass('selected');
	}
};

city.init();