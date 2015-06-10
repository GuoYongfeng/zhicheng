var data = {};

// 轮播图片的地址
var imgList = [
	"http://static.ppzuche.com/pics/banner/banner01.jpg",
	"http://static.ppzuche.com/pics/banner/banner02.jpg",
	"http://static.ppzuche.com/pics/banner/june_zjy.jpg"
];

// 点击图片进入的对应url
var urlList = ["", "", ""];

// 返回信息是否正确
var popularizList = {
	"errno" : -1
};

new banner({
	imgList : imgList,
	urlList : urlList,
	popularize : popularizList,
	autoPlay: imgList.length == 1 ? false : true,
	autoPlayDirection: 'left',
	autoPlayFrequence: 4000
});