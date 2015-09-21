var addr = {
	dom: {
		options: $('.options'),
		dd: $('dd')
	},

	data: {
		option: '1'
	},

	init: function(){
		this.bind();
		this.send();
	},

	send: function(){
	    var _this = this;
	    
	    $('.enter').on('click', function( e ){
	        alert(_this.data.option);
	        
	   //     $.ajax({
    // 			url: "",
    // 			method: "POST",
    // 			data: this.data,
    // 			dataType: "json",
    // 			success: function(){
    
    // 			}
    // 		});
	    });
		
	},

	bind: function(){
		var _this = this;

		this.dom.dd.forEach(function(item, index, input){
			$(item).on('click', function(e){
				var option = $(this).data('option');

				_this.reset();
				$(item).find('.options').addClass('img_wrap_selected');
				_this.data.option = option;
				
			});
		});
	},

	reset: function(){
		this.dom.options.forEach(function(item, index, input){
			$(item).removeClass('img_wrap_selected');
		});
	}

};

addr.init();