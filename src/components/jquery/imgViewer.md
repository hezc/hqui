---
footer: false
# aside: false
---

# jquery版本的：预览大图
```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>预览大图</title>
<link rel="stylesheet" type="text/css" href="viewer.min.css">

<script src="../../js/jquery.min.js"></script>
<script src="viewer.min.js"></script>

<style>
* { margin: 0; padding: 0;}
#dowebok { width: 700px; margin: 0 auto; font-size: 0;}
#dowebok li { display: inline-block; width: 32%; margin-left: 1%; padding-top: 1%;}
#dowebok li img { width: 100%;}
h2{ margin:20px; text-align:center;}
</style>
</head>

<body>
<h2>默认效果</h2>

<ul id="dowebok">
	<li><img data-original="img/tibet-1.jpg" src="img/thumbnails/tibet-1.jpg" alt="图片1"></li>
	<li><img data-original="img/tibet-2.jpg" src="img/thumbnails/tibet-2.jpg" alt="图片2"></li>
	<li><img data-original="img/tibet-3.jpg" src="img/thumbnails/tibet-3.jpg" alt="图片3"></li>
	<li><img data-original="img/tibet-4.jpg" src="img/thumbnails/tibet-4.jpg" alt="图片4"></li>
	<li><img data-original="img/tibet-5.jpg" src="img/thumbnails/tibet-5.jpg" alt="图片5"></li>
	<li><img data-original="img/tibet-6.jpg" src="img/thumbnails/tibet-6.jpg" alt="图片6"></li>
</ul>
</body>
</html>
<script>
var viewer = new Viewer(document.getElementById('dowebok'), {
    url: 'data-original'
});
</script>
```
预览效果图：
<img src="/public/pc-source-code/JQ/imgViewer.png" />


[Demo 源码下载](/pc-source-code/JQ/imgViewer.rar)