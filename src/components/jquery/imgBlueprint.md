---
footer: false
# aside: false
---

# jquery版本的：晒图+预览
```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>评论图片</title>

<link rel="stylesheet" type="text/css" href="css/style.css"/>

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/commentImg.js"></script>

</head>

<body>
<h3>点击以下图片查看效果！</h3>
<div class="tm-m-photos">
  	<ul class="tm-m-photos-thumb">
    	<li data-src="img/1.jpg"><span><img src="img/1.jpg"></span> <b class="tm-photos-arrow"></b> </li>
    	<li data-src="img/02.png"><span><img src="img/02.png"></span> <b class="tm-photos-arrow"></b> </li>
    	<li data-src="img/03.png"><span><img src="img/03.png"></span> <b class="tm-photos-arrow"></b> </li>
    	<li data-src="img/04.png"><span><img src="img/04.png"></span> <b class="tm-photos-arrow"></b> </li>
  	</ul>
  	<div class="tm-m-photo-viewer"> 
	  	<img src="img/01.png"> 
		<a class="tm-m-photo-viewer-navleft"><i></i></a> 
		<a class="tm-m-photo-viewer-navright"><i></i></a> 
	</div>
</div>
<div class="tm-m-photos">
  	<ul class="tm-m-photos-thumb">
    	<li data-src="img/01.png"><span><img src="img/01.png"></span> <b class="tm-photos-arrow"></b> </li>
    	<li data-src="img/02.png"><span><img src="img/02.png"></span> <b class="tm-photos-arrow"></b> </li>
    	<li data-src="img/03.png"><span><img src="img/03.png"></span> <b class="tm-photos-arrow"></b> </li>
    	<li data-src="img/04.png"><span><img src="img/04.png"></span> <b class="tm-photos-arrow"></b> </li>
  	</ul>
  	<div class="tm-m-photo-viewer"> 
	  	<img src="img/01.png"> 
		<a class="tm-m-photo-viewer-navleft"><i></i></a> 
		<a class="tm-m-photo-viewer-navright"><i></i></a> 
	</div>
</div>
<script>
    
    $(function () {

        $(".tm-m-photos").commentImg({
			activeClass: 'tm-current', //缩略图当前状态class,默认'current'
        	nextButton: '.tm-m-photo-viewer-navright', //向后翻页按钮，默认'.next'
        	prevButton: '.tm-m-photo-viewer-navleft', //向前翻页按钮，默认'.prev'
			imgNavBox:'.tm-m-photos-thumb', //缩略图容器，默认'.photos-thumb'
			imgViewBox:'.tm-m-photo-viewer' //浏览图容器，默认'.photo-viewer'
        });
    })

</script>
</body>
</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/imgBlueprint.png" />


[Demo 源码下载](/pc-source-code/JQ/imgBlueprint.rar)