
var	index = 0,
	len = 0,

	$cur = null,
	$next = null,
	$prev = null,
	$wrap = null,
	$list = null,
	$nav = null,
	$prevBtn = null,
	$nextBtn = null;

var defautImg = __uri('./images/default-bg.jpg');

function initNav( start ){
	var tpl = '<span></span>', cat = [];
	for(var i=0;i<len;i++){
		cat.push(tpl);
	}

	$nav.html(cat.join('')); 

	$nav = $nav.find('span');
	$nav.eq(start).addClass('on');
}

function swapNav(){
	$nav.removeClass();
	$nav.eq(index).addClass("on");
}

function swipeLeft(){
	$cur = $list.eq( index ).addClass('cur');;
	$next = $list.eq( (index+1)%len ).removeClass().addClass('next');
	
	$prev = $list.eq( (index + len - 1)%len ).removeClass();

	setTimeout(function(){
			
		$cur.addClass('prev').removeClass('cur');
		$next.addClass('cur').removeClass('next');
	
	}, 50);
	//__slide();

	index = (index+1)%len;

	swapNav();

	return false;
}

function swipeRight(){
	$cur = $list.eq( index ).addClass('cur');
	$next = $list.eq( (index+1)%len ).removeClass();
	$prev = $list.eq( (index + len - 1)%len ).removeClass().addClass('prev');

	setTimeout(setTimeout(function(){
		$cur.addClass('next').removeClass('cur');
		$prev.addClass('cur').removeClass('prev');
		
	}, 50), 50);

	index = (index + len - 1)%len;

	swapNav();

	return false;
}

function loadImages(){
	$wrap.find('img').each(function(){
		var $this = $(this), loader;
		$this.attr('src', defautImg);

		loader = (new Image());
		loader.onload = function(){
			$this.attr('src', $this.data('src')+'?size=400x300');
			loader = null;
		};

		loader.src = $this.data('src');
	});
}

function init( options ){
	options = $.extend({
		selector : ".ui-slide-wrap",
		slideNav : '.ui-slide-nav',
		prev: '.ui-slide-pre',
		next: '.ui-slide-next',
		autoPlay: false,
		autoPlayDirection: 'left',
		autoPlayFrequence: 2000,
		start : 0
	},options);

	$wrap =  $(options.selector);

	$list = $wrap.find('li');
	index = options.start;
	len = $list.length;
	$cur = $list.eq(index).addClass('cur');

	/**
	 * @description     修改图片高度bug
	 * @author          guoyongfeng
	 * @update          2014-09-02
	 */
	$container = $wrap.find('ul');
	$width = $(window).width();
	$wrap.css({height: 0.75 * $width});
	$container.css({lineHeight: (0.75 * $width) + 'px'});
	if($list.length > 1){
		$wrap.on('swipeLeft',swipeLeft);
		$wrap.on('swipeRight', swipeRight);
	}
	

	$nav = $wrap.find(options.slideNav);

	loadImages();
	initNav(options.start);

	options.autoPlay && setInterval( 
		options.autoPlayDirection == 'left' ? swipeLeft : swipeRight,
		options.autoPlayFrequence
	);
}
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
module.exports.init = init;