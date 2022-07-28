---
footer: false
# aside: false
---

# jquery版本的：图片3D轮播效果

## 图片3D轮播效果1

```html
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>图片3D轮播效果1</title>
<link href="css/stackedCards.css" rel="stylesheet" />
<style>


.stacked-cards h2 {
    text-align: center;
    position: relative;
    top: -20px;
}

.container-fuild {
    max-width: 80%;
    margin: 0 auto;
}
.container-fixed {
    max-width: 767px;
    margin: 0 auto;
}
.divider {
    max-width: 500px;
    margin: 25px auto;
    background-color: #ccc;
    height: 2px;
    width: 100%;
}
.stacked-cards {
    padding-top: 40px;
    padding-bottom: 15px;
}
.stacked-cards-fanOut {
    padding-bottom: 40px;
}
.stacked-cards-fanOut li img {
    max-height: 200px;
}
.stacked-cards li {
    height: 250px;
}

@media (max-width: 767px) {
.stacked-cards li {
    height: 180px;
}
}
.stacked-cards li {
    background-color: #00bcd4;
}
.stacked-cards li:nth-child(n) {
    background-color: #3599db;
}
.stacked-cards li:nth-child(2n) {
    background-color: #e61b77;
}
.stacked-cards li:nth-child(3n) {
    background-color: #00bcd4;
}
.stacked-cards li:nth-child(4n) {
    background-color: #f4b251;
}
.stacked-cards li:nth-child(5n) {
    background-color: #8e4497;
}


</style>
	</head>
	
<body>
	

<div id="wrap">
      <div class="container-fixed stacked-cards stacked-cards-slide">
    <h2>Slide</h2>
    <ul>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
  </div>

      
      <div class="container-fixed stacked-cards stacked-cards-fanOut">
    <h2>FanOut</h2>
    <ul>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
  </div>

    </div>

</div>
<script src="js/stackedCards.min.js"></script> 
<script>
	var stackedCardSlide = new stackedCards({
		selector: '.stacked-cards-slide',
		layout: "slide",
		transformOrigin: "center",
	 });

	stackedCardSlide.init();

	var stackedCardFanOut = new stackedCards({
		selector: '.stacked-cards-fanOut',
		layout: "fanOut",
		transformOrigin: "bottom",
	 });

	stackedCardFanOut.init();
</script>

</body>
</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/imgCarousel3D1.png" />


[Demo 源码下载](/pc-source-code/JQ/imgCarousel3D1.rar)

<!-- -------------------------------------------------------------------------- -->

## 图片3D轮播效果2

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<title>图片轮转</title>

<link href="css/reset_zl_2021519.css" rel="stylesheet" type="text/css">

</head>
<body>

<div class="contents"> 
  <!--图片轮转-->
  <div class="poster_box">
    <div class="caroursel poster-main" data-setting='{
           "width":1060,		
"height":300,		
"posterWidth":543,	
"posterHeight":297,
"scale":0.85,		
"speed": 500,	
"autoPlay":true,	
"delay":2000,	
"verticalAlign":"middle"
        }'>
      <div class="poster-btn poster-prev-btn"></div>
      <ul class="poster-list">
        <li class="poster-item">
          <div class="item"> <a href="#"><img class="tabImg" src="picture/t1.png"></a> <span class="poster-item-title">图片轮转标题1</span> </div>
        </li>
        <li class="poster-item">
          <div class="item"> <a href="#"><img class="tabImg" src="picture/t2.png"></a> <span class="poster-item-title">图片轮转标题2</span> </div>
        </li>
        <li class="poster-item">
          <div class="item"> <a href="#"><img class="tabImg" src="picture/t3.png"></a> <span class="poster-item-title">图片轮转标题3</span> </div>
        </li>
        <li class="poster-item">
          <div class="item"> <a href="#"><img class="tabImg" src="picture/t4.png"></a> <span class="poster-item-title">图片轮转标题4</span> </div>
        </li>
        <li class="poster-item">
          <div class="item"> <a href="#"><img class="tabImg" src="picture/t5.png"></a> <span class="poster-item-title">图片轮转标题5</span> </div>
        </li>
      </ul>
      <ul class="lunbo_btn">
        <li class="tabBtn"></li>
        <li class="tabBtn"></li>
        <li class="tabBtn"></li>
        <li class="tabBtn"></li>
        <li class="tabBtn"></li>
      </ul>
      <div class="poster-btn poster-next-btn"></div>
    </div>
    <!--pc 图片轮转  end--> 
    
  </div>
</div>

<script src="js/jquery-1.10.2.js"></script>
<script src="js/jquery.carousel-zl-fb.js"></script><!-- 首页切换 --> 
<script>Caroursel.init($('.caroursel'))</script>

</body>
</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/imgCarousel3D2.png" />


[Demo 源码下载](/pc-source-code/JQ/imgCarousel3D2.rar)

<!-- -------------------------------------------------------------------------- -->

## 图片3D轮播效果3

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>原生JS层叠图片轮播展示代码</title>

<link type="text/css" href="css/style.css" rel="stylesheet" />

<script type="text/javascript" src="js/tools.js"></script>
<script type="text/javascript" src="js/js.js"></script>

</head>
<body>

<div class="wrap" id="wrap">
	<ul class="content"></ul>
	<a href="javascript:;" class="prev">&#60;</a>
	<a href="javascript:;" class="next">&#62;</a>
</div>

</body>
</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/imgCarousel3D3.png" />


[Demo 源码下载](/pc-source-code/JQ/imgCarousel3D3.rar)
