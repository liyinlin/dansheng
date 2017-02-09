/**
 * Created by cz on 2016/8/19.
 */
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper);
    }
});
$(".swiper-slide:nth-child(1)>div:nth-child(2)").fragmentFly({
    image_url:"images/jy.png",    //背景图路径，当前目录为元素所在的html目录
    cut_dir:"x",    //可选"x"或"y"，默认均分x方向
    ave_part:12,    //均分cut_dir方向，默认切割成12份
    rm_part:[2,3]   //非cut_dir方向上随机切割，默认最小2份，最多3份
},{
    anime_dir:"",   //切割子元素动画运行方向，可选"up","down","left","right"，默认为down
    path:[500,800],     //切割子元素动画路长，默认路径最短500px，最长800px
    time:[1000,1300],   //切割子元素动画时长，默认时长最短1000ms，最长1300ms
    opacity:[1,1]       //切割子元素透明度变化，默认初始为1，结束为1(即无渐变)
});
