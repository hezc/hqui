---
footer: false
# aside: false
---

# jquery版本的：图片横向切换
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>简单实用的轮播插件</title>
		
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/Lunbo.js" ></script>
		
		<style type="text/css">
			* {padding: 0;margin: 0;}
			body {background: #f3f3f3;}
			.Box {position: relative;}
			.Box .content {width: 1200px;margin: 0 auto;}
			.Box h2 {text-align: center;margin-bottom: 35px;padding-top: 250px;}
			.Box .Box_con {position: relative;}
			.Box .Box_con .btnl {position: absolute;}
			.Box .Box_con .btn {display: block;width: 41px;height: 41px;position: absolute;top: 80px;cursor: pointer;}
			.Box .Box_con .btnl {background: url(img/jtl02.png) no-repeat center;left: -72px;}
			.Box .Box_con .btnr {background: url(img/jtr02.png) no-repeat center;right: -72px;}
			.Box .Box_con .btnl:hover {background: url(img/jtl03.png) no-repeat center;}
			.Box .Box_con .btnr:hover {background: url(img/jtr03.png) no-repeat center;}
			.Box .Box_con .conbox {position: relative;overflow: hidden;}
			.Box .Box_con .conbox ul {position: relative;list-style: none;}
			.Box .Box_con .conbox ul li {float: left;width: 285px;height: 200px;margin-left: 20px;overflow: hidden;}
			.Box .Box_con .conbox ul li:first-child {margin-left: 0;}
			.Box .Box_con .conbox ul li img {display: block;width: 285px;height: 200px;transition: all 0.5s;}
			.Box .Box_con .conbox ul li:hover img {transform: scale(1.1);}
			
			.Box .BoxSwitch {margin-top: 30px;text-align: center;}
			.Box .BoxSwitch span {display: inline-block;*display: inline;*zoom: 1;vertical-align: middle;width: 30px;height: 3px;background: #ccc;margin: 0 5px;cursor: pointer;}
			.Box .BoxSwitch span.cur {background: red;}
		</style>
		
	</head>
	<body>

    <div class="Box">
    	<div class="content">
    		<h2>简单实用的轮播插件</h2>
    		
    		<div class="Box_con clearfix">
    			<span class="btnl btn" id="btnl"></span>
    			<span class="btnr btn" id="btnr"></span>
    			
    			<div class="conbox" id="BoxUl">
	    			<ul>
	    				<li class="cur"><img src="img/1.jpg" alt=""/></li>
	    				
	    				<li class="cur"><img src="img/2.jpg" alt=""/></li>
	    				
	    				<li class="cur"><img src="img/3.jpg" alt=""/></li>
	    			
	    				<li class="cur"><img src="img/4.jpg" alt=""/></li>
	    				
	    				<li class="cur"><img src="img/5.jpg" alt=""/></li>
    				</ul>
    			</div>
    			
    			<p class="BoxSwitch" id="BoxSwitch">
    				<span class="cur"></span>
    				<span></span>
    				<span></span>
    				<span></span>
    			</p>
    			
    		</div>
    		
    	</div>
    </div>
	
    <script type="text/javascript">
    	//滚动元素id，左切换按钮，右切换按钮，切换元素个数id,滚动方式，切换方向，是否自动滚动，滚动距离，滚动时间，滚动间隔，显示个数
    	LbMove('BoxUl','btnl','btnr','BoxSwitch',true,'left',true,305,1000,5000,4);
    </script>
	
	</body>
</html>

```
预览效果图：
<img src="/public/pc-source-code/JQ/imgHorizontalSwitch.png" />


[Demo 源码下载](/pc-source-code/JQ/imgHorizontalSwitch.rar)