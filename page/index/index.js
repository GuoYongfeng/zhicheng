var index = {
	data: [
		[
			{'url': 'test1', 'value': '驾考预约'}, 
			{'url': 'test1', 'value': '违章处理'}, 
			{'url': 'test1', 'value': '驾管服务'}
		],
		[
			{'url': '', 'value': '1元洗车'}, 
			{'url': '', 'value': '上门保养'}, 
			{'url': '', 'value': '保险/理赔'},
			{'url': '', 'value': '爆品秒杀'}
		],
		[
			{'url': '', 'value': 'APP下载'}, 
			{'url': '', 'value': '我要抽'}, 
			{'url': '', 'value': 'VIP服务'},
			{'url': '', 'value': '在线服务'}, 
			{'url': '', 'value': '我的订单'}, 
			{'url': '', 'value': '个人中心'}
		]
	],

	dom: {
		online: $('.online'),
		car: $('.car'),
		self: $('.self'),
		list: $('.nav li'),
		targets: [$('.online'), $('.car'), $('.self')],
	},
	init: function(){

		this.bind();

	},

	bind: function(){
		var lists = this.dom.list,
			_this = this;

		lists.each(function(item, index, input){
			var el = $(index),
				data = _this.data[item];

			el.on('click', function(e){
				_this.render(_this.dom.targets[item], data);
			});
		})

	},

	render: function(el, data){
		this.reset();

		var templates = this.tpls(data);
		el.append(templates);
		el.addClass('common-border');
	},

	reset: function(){
		this.dom.online.html('').removeClass('common-border');
		this.dom.car.html('').removeClass('common-border');
		this.dom.self.html('').removeClass('common-border');
	},

	tpls: function(data){
		// data is a array
		var data = data || [],
			tpl = [];

		data.forEach(function(item, index, input){
			if( index < data.length -1 )
				tpl.push('<li><a href= "' + item.url + '">' + item.value + '</a></li>');
			else
				tpl.push(
					'<li class="last">' + 
						'<a href= "' + item.url + '">' + item.value + '</a>' + 
						'<div class="pos"><span class="z">&#9670</span><span class="y">&#9670</span></div>' + 
					'</li>'
				);

		});

		return tpl.join('');
	}
};

index.init();

