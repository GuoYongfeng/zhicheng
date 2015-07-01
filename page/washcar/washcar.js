var car = {
	val: '',

	dom: {
		targets: $('.selects'),
		lists: $('.ul_common')
	},

	data: [
		{
			'dom': $('.nearby'), 
			'visible': false,
			'data': ['新华区', '桥西区', '长安区', '裕华区', '井径矿区', '藁城区', '鹿泉区', '栾城区']
		},
		{	
			'dom': $('.wash'), 
			'visible': false,
			'data': ['洗车', '洗车/美容', '洗车/美容/保养']
		},
		{	
			'dom': $('.smarty'), 
			'visible': false,
			'data': ['离我最近', '评价最好']
		}
	],

	init: function () {
		this.bind();
	},

	bind: function(){
		var self = this;

		this.dom.targets.each(function(index, item, inpput){
			var el = $(item),
				dom = self.data[index].dom,
				data = self.data[index].data;

			el.on('click', function( e ){

				// reset all targets
				self.resetTargets();

				// reset all selects
				self.resetRender();

				$(this).addClass('sort_selected');

				self.data[index].visible = !self.data[index].visible;

				if(self.data[index].visible)
					self.render.call(self, dom, data);

			});
		});

		// // list event
		this.dom.lists.on('click', function( e ){
			var el = e.target;

			// console.log(el);

			$(el).css('nearby_selected');
			self.send({'value': $(el).text()});
		});
	},

	send: function(data){
		var self = this;

		$.ajax({
			url: '',
			method: '',
			data: data,
			dataType: 'json',
			success: function(res){
				self.renderContainer(res);
			}
		});
	},

	renderContainer: function(res){
		// 渲染中间部分 后续小川加上
		// 
		console.log(res);
	},

	resetTargets: function(){
		this.dom.targets.removeClass('sort_selected');
	},

	resetRender: function(){

		this.data.forEach(function(item, index, input){
			var el = item.dom;

			$(el).html('');
		});
	},

	render: function(dom, data){
		var el = $(dom),
			data = data || [],
			tpls = [],
			self = this;

		for (var i = 0; i < data.length; i++) {
			tpls.push('<li>' + data[i] + '</li>');
		};

		el.append(tpls.join(''));
	}
};

car.init();