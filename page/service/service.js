var service = {

	dom: {
		content: $('.content')
	},
	data: [
		{'name': 'icon_11', 'url': 'http://localhost:9000/page/order/order.html'},
		{'name': 'icon_11', 'url': 'http://localhost:9000/page/order/order.html'},
		{'name': 'icon_11', 'url': 'http://localhost:9000/page/order/order.html'},
		{'name': 'icon_11', 'url': 'http://localhost:9000/page/order/order.html'},

		{'name': 'icon_11', 'url': 'http://localhost:9000/page/order/order.html'},
		{'name': 'icon_11', 'url': 'http://localhost:9000/page/order/order.html'},
		{'name': 'icon_11', 'url': 'http://localhost:9000/page/order/order.html'},
		{'name': 'icon_11', 'url': 'http://localhost:9000/page/order/order.html'},
	],
	init: function(){
		this.bind();
	},

	bind: function(){
		var data = this.data;

		for (var i = 0; i < data.length; i++) {
			var name = data[i].name,
				url = data[i].url;
				
			this.exec(name, url);
			
		};
	},

	exec: function(name, url){
		$("." + name).on('click', function( e ){
			window.open(url, '_self');
		});
	}
};

service.init();