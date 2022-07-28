---
footer: false
# aside: false
---

# jquery版本的：手风琴效果

## 手风琴效果1
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>jQuery圆形修边图片手风琴代码</title>

<link rel="stylesheet" href="css/style.css" type="text/css" />

<script type="text/javascript" src="js/jquery.min.js"></script>

</head>
<body>


  <div class="options">
    <div class="option active" style="background:url(images/1.jpg);">
      <div class="shadow"></div>
      <div class="label">
        <div class="icon"> <i class="fas fa-walking"></i> </div>
        <div class="info">
          <div class="main">这是标题</div>
          <div class="sub">这是一段描述</div>
        </div>
      </div>
    </div>
    <div class="option" style="background:url(images/2.jpg);">
      <div class="shadow"></div>
      <div class="label">
        <div class="icon"> <i class="fas fa-snowflake"></i> </div>
        <div class="info">
          <div class="main">这是标题</div>
          <div class="sub">这是一段描述</div>
        </div>
      </div>
    </div>
    <div class="option" style="background:url(images/3.jpg);">
      <div class="shadow"></div>
      <div class="label">
        <div class="icon"> <i class="fas fa-tree"></i> </div>
        <div class="info">
          <div class="main">这是标题</div>
          <div class="sub">这是一段描述</div>
        </div>
      </div>
    </div>
    <div class="option" style="background:url(images/4.jpg);">
      <div class="shadow"></div>
      <div class="label">
        <div class="icon"> <i class="fas fa-tint"></i> </div>
        <div class="info">
          <div class="main">这是标题</div>
          <div class="sub">这是一段描述</div>
        </div>
      </div>
    </div>
    <div class="option" style="background:url(images/5.jpg);">
      <div class="shadow"></div>
      <div class="label">
        <div class="icon"> <i class="fas fa-sun"></i> </div>
        <div class="info">
          <div class="main">这是标题</div>
          <div class="sub">这是一段描述</div>
        </div>
      </div>
    </div>
  </div>


<script type="text/javascript">
$(".option").click(function () {
	$(".option").removeClass("active");
	$(this).addClass("active");
});
</script>

</body>
</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/accordion1.png" />


[Demo 源码下载](/pc-source-code/JQ/accordion1.rar)

<!-- -------------------------------------------------------------------------- -->

## 手风琴效果2

```html
<!DOCTYPE html>
<html lang="en" >
<head>
<meta charset="UTF-8">
<title>CSS3横向切换图片手风琴特效</title>

<link rel="stylesheet" href="css/style.css">

</head>
<body>

<div class="container">
	<div class="box">
		<img src="img/1000x800.jpg">
		<span>CSS</span>
	</div>
	<div class="box">
		<img src="img/1000x802.jpg">
		<span>Image</span>
	</div>
	<div class="box">
		<img src="img/1000x804.jpg">
		<span>Hover</span>
	</div>
	<div class="box">
		<img src="img/1000x806.jpg">
		<span>Effect</span>
	</div>
</div>

</body>
</html>
```

预览效果图：
<img src="/public/pc-source-code/JQ/accordion2.png" />


[Demo 源码下载](/pc-source-code/JQ/accordion2.rar)

<!-- -------------------------------------------------------------------------- -->

## 手风琴效果3

```html
<!DOCTYPE html>
<html lang="en" >
<head>
<meta charset="UTF-8">
<title>js+css3全屏手风琴特效 </title>

<link rel="stylesheet" href="css/style.css">

</head>
<body>

<div class="panels">
	<div class="panel panel1">
		<p>Hey</p>
		<p>Let's</p>
		<p>Dance</p>
	</div>
	<div class="panel panel2">
		<p>Give</p>
		<p>Take</p>
		<p>Receive</p>
	</div>
	<div class="panel panel3">
		<p>Experience</p>
		<p>It</p>
		<p>Today</p>
	</div>
	<div class="panel panel4">
		<p>Give</p>
		<p>All</p>
		<p>You can</p>
	</div>
	<div class="panel panel5">
		<p>Life</p>
		<p>In</p>
		<p>Motion</p>
	</div>
</div>

<script  src="js/index.js"></script>

</body>
</html>

```
预览效果图：
<img src="/public/pc-source-code/JQ/accordion3.png" />


[Demo 源码下载](/pc-source-code/JQ/accordion3.rar)