$(function(){

	var fire = {
		course: 1,
		init: function(){
			this.bind();
		},

		bind: function(){
			this.select();
			this.send();
		},

		select: function(){
			var _this = this;

			$('.content').on('tap', function(e){
				var el = e.target,
					img = $(el).siblings()[0],
					img = $(img);

				
				_this.course = img.data('course');
				_this.reset();

				if(img.hasClass('off')){
					img.removeClass('off');
				}else{
					img.addClass('off');
				}

			});
		},

		reset: function(){
			var imgs = $('dd>img');

			for (var i = 0; i < imgs.length; i++) {
				$(imgs[i]).addClass('off');
			};
		},

		send: function(){
			var _this = this,
				data = {
                	'course': _this.course
                };

			// click sure button
			// send course
			$('.sure').on('tap', function(){
				console.log(data);

				$.ajax({
                    type: "POST",
                    url: "",
                    data: data,
                    dataType: 'json',
                    success: function(res){
                        
                    }
                });
			});
		}
	};

	fire.init();
});