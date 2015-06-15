var Modal = Modal;



$(function(){
	var next = $('.coupons'),
		modal,
		show = initModal();

	function initModal () {
		var modal;

		return function (opt){
			var title = opt.title || "温馨提示",
				content = opt.content || "",
				confirmText = opt.confirmText || "知道了"

			if( modal ){
				modal.show();
			}else{
				modal = new Modal({
					title : title,
					content : content,
					confirmText : confirmText
				});
				modal.show();
			}

			return modal;
		}
	}

	var run = {

		init: function(){
			this.bind();
		},

		bind: function(){
			var _this = this;

			next.on('click', function(){

				modal = show({
					title : "使用优惠券",
					content : '<div class="item"><input type="radio" name="common">' + 
								'<label for="common">通用优惠券</label>' + 
								'<span>￥110</span></div>' + 
								'<div class="item"><input type="radio" name="common">' + 
								'<label for="common">违章缴费优惠券</label>' + 
								'<span>￥110</span></div>' + 
								'<div class="item"><input type="radio" name="common">' + 
								'<label for="common">汽车优惠券</label>' + 
								'<span>￥110</span></div>',
					confirmText : "确认" 
				});


				
				return false;
			});
		}
	};

	run.init();
	
});