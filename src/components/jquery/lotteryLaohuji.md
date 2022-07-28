---
footer: false
# aside: false
---

# jquery版本的：仿老虎机抽奖

## 老虎机抽奖效果1

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>jQuery优惠券滚动老虎机抽奖代码</title>

<link rel="stylesheet" href="css/public.css">

<script src="js/jquery-1.10.2.js"></script>
<script src="js/easing.min.js"></script>
<script src="js/mejs.js"></script>

</head>
<body>

<section>
	<div class="machine">
		<dl class="rotate_box clear">
			<dd></dd>
			<dd></dd>
			<dd></dd>
		</dl>
		<a class="poiner" href="">
		<img src="images/poiner.png" alt="">
		</a>
		<a class="rotate_btn" href="javascript: void(0);">
		<img src="images/rocker.png" alt="">
		</a>
		<div class="btn_box">
			<img src="images/share_btn.png" alt="">
		</div>
	</div>
</section>

<div class="mask">
	<img src="images/alert_img.png" alt="">
</div>

</body>
</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/lotteryLaohuji1.png" />


[Demo 源码下载](/pc-source-code/JQ/lotteryLaohuji1.rar)

<!-- --------------------------------------------------------------------- -->

## 老虎机抽奖效果2

```html
<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="format-detection" content="telphone=no, email=no">
<title>jQuery单滚轮老虎机抽奖代码</title>
<head>
</head>
<style type="text/css">

/* === CSS Reset ========== */
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, blockquote, th, td, p { margin:0; padding:0 }
input, button, select, textarea, a:fouse {outline:none}
li {list-style:none;}
img {border:none;}
textarea {resize:none;}
body { margin: 0; font: 12px "微软雅黑"; background-color: #2D2D2D; }
/* === End CSS Reset ========== */

body{width:100%;
}
a{
    text-decoration: none;
}
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.clearfix{*zoom:1;}

.container{
	width:320px;
    margin: 0 auto;
    position: relative;
}

.main2{
    background: url("images/main0.gif") no-repeat center;
   background-size:100%;
    height: 260px;
	width:320px;
	margin:0 auto;
}
.num{
    position: absolute;
    top: 80px;
    width: 210px;
    height: 67px;
    overflow: hidden;
}
.num-con{
    position: relative;
    top:-274px;
}
.num-img{
    background: url("images/num1.png") no-repeat;
    width: 210px;
    height: 750px;
}
.num2{
    left:12%;
}
.main3-btn{
    cursor: pointer;
    height: 39px;
    left: 25%;
    position: absolute;
    top: -71px;
    width: 152px;
}
</style>
<body><script src="/demos/googlegg.js"></script>
<div class="main2">
	<div class="container">
		<div class="num num2">
			<div class="num-con num-con2">
				<div class="num-img"></div>
				<div class="num-img"></div>
			</div>
		</div>
	</div>
</div>
<div class="main3">
	<div class="container">
		<div class="main3-btn"></div>
	</div>
</div>

<script src="js/jquery-1.10.2.js"></script>
<script type="text/javascript">
	$(".main3-btn").click(function () {
		if(!flag){
			flag=true;
			reset();
			letGo();
			setTimeout(function () {
				flag=false;
				if(index==2){
					$(".fix,.pop-form").show();
				}else{
					$(".fix,.pop").show();
					//$(".pop-text span").text(""+String(4-TextNum1)+(8-TextNum2))
				}
			},2000);
			index++;
		}
	});

	var flag=false;
	var index=0;	
	var TextNum2
	function letGo(){
		TextNum2=parseInt(Math.random()*7)
		var num2=[-750,-820,-888,-274,-341,-408,-477,-545][TextNum2];		
		$(".num-con2").animate({"top":-750},1000,"linear", function () {
			$(this).css("top",0).animate({"top":num2},1800,"linear");
		});
	}
	function reset(){
		$(".num-con2").css({"top":-274});
	}
</script>

<div style="text-align:center;margin:50px 0; font:normal 14px/24px 'MicroSoft YaHei';color:#ffffff">
<p>适用浏览器：360、FireFox、Chrome、Safari、Opera、傲游、搜狗、世界之窗. 不支持IE8及以下浏览器。</p>
</div>
</body>
</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/lotteryDangunLaohuji.png" />


[Demo 源码下载](/pc-source-code/JQ/lotteryDangunLaohuji.rar)
