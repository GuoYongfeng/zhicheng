var price = {
	dom: {
		lists: $('.select_list li'),
		car_num: $('.car_num')
	},
	data: {
		'0': false,
		'1': false,
		'2': false,
		'3': false
	},
	init: function(){
		this.bind();
		this.send();
	},

	bind: function(){
		var self = this;

		this.dom.lists.forEach(function(item, index, input){
			var el = $(item),
				oSpan = el.find('span');

			el.on('click', function( e ){
				self.data[index] = !self.data[index];
				if(self.data[index]){
					oSpan.addClass('on');
				}else{
					oSpan.removeClass('on');
				}
				console.log(self.data[0]);
				// car_num
				if(self.data[0]){
					self.dom.car_num.val('*');
					self.dom.car_num.attr({'disabled': true});
				}else{
					self.dom.car_num.val('');
				}
			});
		});
	},

	send: function(){

	}

};

price.init();
