---
footer: false
# aside: false
---

# jquery版本的：焦点图+缩略图
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>js双箭头焦点图 </title>
</head>
<body>
<!--演示内容开始-->
<style type="text/css">
*{margin:0;padding:0;list-style-type:none;}
a,img{border:0;}
body{font:12px/180% Arial, Helvetica, sans-serif, "新宋体";}
/*焦点图*/
.mod18{width:680px;height:406px;margin:20px auto;position:relative;background:#f7f7f7;}
.mod18 .btn{position:absolute;width:15px;height:70px;top:336px;cursor:pointer;z-index:99;font-size:50px;font-weight:bold;}
.mod18 .prev{left:0;background:url(images/prevBtn.png) no-repeat;}
.mod18 #prevTop,.mod18 #nextTop{top:40%; width:46px;height:48px;}
.mod18 #prevTop{background:url(images/prevBtnTop.png) 0 0 no-repeat;}
.mod18 #nextTop{background:url(images/nextBtnTop.png) 0 0 no-repeat;}
.mod18 .next{right:0;background:url(images/nextBtn.png) no-repeat;}
.mod18 li{float:left;}
.mod18 .cf li{position:relative;color:#fff;}
.mod18 .cf a{display:block;width:680px;height:330px;position:absolute;color:#fff;}
.mod18 .cf li span{display:block;width:640px;position:absolute;left:0;bottom:0;padding:10px 20px;line-height:22px;text-align:left;background:rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient( GradientType = 0,startColorstr = "#60000000",endColorstr = "#60000000");}
.mod18 .picBox{height:330px;position:relative;overflow:hidden;}
.mod18 .picBox ul{height:330px;position:absolute;}
.mod18 .picBox li{width:680px;height:330px;}
.mod18 .listBox{width:642px;height:100px;margin:0 auto;position:relative;padding:6px 0 10px;overflow:hidden;}
.mod18 .listBox ul{height:100px;position:absolute;}
.mod18 .listBox li{width:129px;height:70px;cursor:pointer;position:relative;}
.mod18 .listBox li i{display:none;}
.mod18 .listBox li a{display:block;width:124px;height:70px;}
.mod18 .listBox li img{width:124px;height:70px;}
.mod18 .listBox .on img{width:118px;height:64px;border:3px solid #ff6600;}
.mod18 .listBox .on i{display:block;}
</style>

<div class="mod18">
	<span id="prev" class="btn prev"></span>
	<span id="next" class="btn next"></span>
	<span id="prevTop" class="btn prev"></span>
	<span id="nextTop" class="btn next"></span>
	<div id="picBox" class="picBox">
		<ul class="cf">
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293306.jpg" alt="" /></a>
				<span>探班横店某剧组，陆毅在剧中最重的戏服有20斤，一下戏他就飞快地脱去戏服，躲到休息室凉快去。</span>
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank" ><img width="680" height="380" src="images/83293260.jpg" alt="" /></a>
				<span> 《宫3》剧组片场，演员王琳正对着小镜子练习微笑。在片场，许多演员都有自己的秘密装备。</span>
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293278.jpg" alt="" /></a>
				<span>虽然还是春天，横店下午的气温也有15-16度，在室外穿着厚衣服拍戏对王琳来说有点遭罪。</span> 
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293291.jpg" alt="" /></a>
				<span>同样遭罪的还有演员寇振海，戏服太厚天太热，他的脖子上捂出了痱子。</span> 
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293300.jpg" alt="" /></a>
				<span>出汗多，一些小妆容需要随时修饰，一位女助理在帮寇振海现场粘胡子。</span> 
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293339.jpg" alt="" /></a>
				<span>同样是反季节拍古装戏，夏戏冬拍就好办一些，几片暖宝宝就可以解决问题。</span>
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293353.jpg" alt="" /></a>
				<span>林志颖的一场室内戏，灯光可以模仿太阳的效果，解决时差问题。</span> 
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293410.jpg" alt="" /></a>
				<span>夜戏白天拍，则需要在场景外围起一块完全遮光的黑布。</span>
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293412.jpg" alt="" /></a>
				<span>为了拍出“摔飞出去”的效果，需要准备厚垫子，做好安全措施。</span> 
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293418.jpg" alt="" /></a>
				<span>拍戏禁忌颇多，丧事戏份通常不受演员们的欢迎。</span> 
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293442.jpg" alt="" /></a>
				<span>剧组通常都会为出演死人戏等丧事戏份的演员准备红包，以作去灾压惊之用。（资料图）</span> 
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293447.jpg" alt="" /></a>
				<span>在许多片场的旅馆，房间门上都贴有佛教用品。</span> 
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293458.jpg" alt="" /></a>
				<span>而在片场，能看到的大部分布景都不是真的，比如拍戏用的假花。</span> 
			</li>
			<li>
				<a href="http://sc.chinaz.com/" target="_blank"><img width="680" height="380" src="images/83293493.jpg" alt="" /></a>
				<span>经常在电视上看到柱子上鎏金雕刻的装饰，则是临时安装上去的。</span>
			</li>
		</ul>
	</div>
	
	<div id="listBox" class="listBox">
		<ul class="cf">
			<li class="on"><i class="arr2"></i><img width="118" height="64" src="images/83293792.jpg" alt="陆毅脱掉戏服" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293780.jpg" alt="对镜练习微笑" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293781.jpg" alt="冬戏夏拍" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293782.jpg" alt="寇振海热出痱子" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293783.jpg" alt="现场粘胡子" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293793.jpg" alt="贴暖宝宝" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293794.jpg" alt="灯光模仿太阳" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293795.jpg" alt="夜戏白天拍" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293809.jpg" alt="假摔" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293810.jpg" alt="丧事戏布景" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293811.jpg" alt="丧事戏" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293812.jpg" alt="门上贴佛教用品" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293831.jpg" alt="假花" /></li>
			<li><i class="arr2"></i><img width="118" height="64" src="images/83293832.jpg" alt="假装饰" /></li>
		</ul>
	</div>
	
</div>

<script type="text/javascript">
(function(){
	
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G("picBox");
	var oList = G("listBox");
	
	var oPrev = G("prev");
	var oNext = G("next");
	var oPrevTop = G("prevTop");
	var oNextTop = G("nextTop");

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	var w2 = oListLi[0].offsetWidth;

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 + "px";

	var index = 0;
	
	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}

	oPrevTop.onclick = oPrev.onclick = function(){
		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
	
})()
</script>

<!--演示内容结束-->


</body>
</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/focusImage1.png" />


[Demo 源码下载](/pc-source-code/JQ/focusImage1.rar)