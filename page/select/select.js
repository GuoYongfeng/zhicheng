var Modal = Modal;



$(function(){
	var next = $('.next'),
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

				// _this.send();

				// 测试弹框
				// 正式逻辑时在send方法里面回调实现
				modal = show({
					title : "排队成功",
					content : "恭喜您排队成功，请继续查看排队信息",
					confirmText : "继续" 
				});

				
				return false;
			});
		},

		send: function(){

			$.ajax({
                type: "POST",
                url: "",
                data: data,
                dataType: 'json',
                success: function(res){
                	// 选择考场成功与否
                	// 需要传递回标志位
                	// 展示内容前端控制
                	
                	var flag = res.flag,	// 该字段应为约定 0表示排队失败 1表示排队成功
                		url = res.url;		// 该字段为点击继续跳转的URL地址

                	var info = {
						title : flag ? "排队成功" : "【排队未成功",
						content : flag ? "恭喜您排队成功，请继续查看排队信息" : "由于当前人数过多，您本次排队未成功，请返回重新排队",
						confirmText : flag ? "继续" : "返回"
					};

                    modal = show(info);
                }
            });

		}
	};

	run.init();
	
});