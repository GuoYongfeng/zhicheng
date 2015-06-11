var Modal = Modal;

function initModal () {
	var modal;

	return function (url, txt){
		if( modal ){
			modal.show();
		}else{
			modal = new Modal({
				title : "温馨提示",
				content : "恭喜您注册成功",
				confirmText : "返回"
			});
			modal.show();
		}

		return modal;
	}
}

$(function(){
	var register = $('.register'),
		modal,
		show = initModal();

	register.on('click', function(){
		modal = show();
		return false;
	});
});