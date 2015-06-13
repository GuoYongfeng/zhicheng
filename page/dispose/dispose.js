var Modal = Modal;

function initModal () {
	var modal;

	return function (url, txt){
		if( modal ){
			modal.show();
		}else{
			modal = new Modal({
				title : "领取成功",
				content : "恭喜您成功领取￥110元优惠券，请您到个人中心查看",
				confirmText : "确认"
			});
			modal.show();
		}

		return modal;
	}
}

$(function(){
	var register = $('#coupon'),
		modal,
		show = initModal();

	register.on('click', function(){
		modal = show();
		return false;
	});
});