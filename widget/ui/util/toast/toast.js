var mask =  require('common:widget/ui/util/singleton-mask/singleton-mask.js').getInstance();

var toastTimer = null,
	dom = null;
function toast( text ){
	if( !text || mask.status.is_show ){
		return ;
	}
	//连续toast以第一条为主
	if(toastTimer){
		return ;
	}

	if(!dom){
		dom = $('<span class="ui-toast-wrap">');
	}
	dom.text(text);
	mask.append(dom).style().show();
	

	toastTimer = setTimeout(function(){
		clearTimeout(toastTimer);
		toastTimer = null;
		mask.hide();
	},1500);
}

module.exports = toast;