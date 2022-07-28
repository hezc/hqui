---
footer: false
# aside: false
---

# jquery版本的：转盘抽奖

## 奖盘转动抽奖

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1,user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>HTML5 Canvas大转盘抽奖特效</title>
<script src="js/jquery.min.js"></script>
<script src="js/turntable.js"></script>
<style>
	.lottery {
		position: relative;
		display: inline-block;
		text-align:center
	}

	.lottery img {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -76px;
		margin-top: -82px;
		cursor: pointer;
	}

	#message {
		position: absolute;
		top: 0px;
		left: 10%;
	}
</style>
<!--[if lte IE 8]>
	<style>
		.lottery img{
			display: none;
		}   
	</style>
<![endif]-->

</head>
<body>
<center>
<div class="lottery">
	<canvas id="myCanvas" width="600" height="600" style="border:1px solid #d3d3d3;">
		当前浏览器版本过低，请使用其他浏览器尝试
	</canvas>
	<p id="message"></p>
	<img src="images/start.png" id="start">
</div>
</center>
<script>
	var wheelSurf
	// 初始化装盘数据 正常情况下应该由后台返回
	var initData = {
		"success": true,
		"list": [{
				"id": 100,
				"name": "5000元京东卡",
				"image": "images/1.png",
				"rank":1,
				"percent":3
			},
			{
				"id": 101,
				"name": "1000元京东卡",
				"image": "images/2.png",
				"rank":2,
				"percent":5
			},
			{
				"id": 102,
				"name": "100个比特币",
				"image": "images/3.png",
				"rank":3,
				"percent":2
			},
			{
				"id": 103,
				"name": "50元话费",
				"image": "images/4.png",
				"rank":4,
				"percent":49
			},
			{
				"id": 104,
				"name": "100元话费",
				"image": "images/5.png",
				"rank":5,
				"percent":30
			},
			{
				"id": 105,
				"name": "500个比特币",
				"image": "images/6.png",
				"rank":6,
				"percent":1
			},
			{
				"id": 106,
				"name": "500元京东卡",
				"image": "images/7.png",
				"rank":7,
				"percent":10
			}
		]
	}

	// 计算分配获奖概率(前提所有奖品概率相加100%)
	function getGift(){
		var percent = Math.random()*100
		var totalPercent = 0
		for(var i = 0 ,l = initData.list.length;i<l;i++){
			totalPercent += initData.list[i].percent
			if(percent<=totalPercent){
				return initData.list[i]
			}
		}           
	}

	var list = {}
	
	var angel = 360 / initData.list.length
	// 格式化成插件需要的奖品列表格式
	for (var i = 0, l = initData.list.length; i < l; i++) {
		list[initData.list[i].rank] = {
			id:initData.list[i].id,
			name: initData.list[i].name,
			image: initData.list[i].image
		}
	}
	// 查看奖品列表格式
	
	// 定义转盘奖品
	wheelSurf = $('#myCanvas').WheelSurf({
		list: list, // 奖品 列表，(必填)
		outerCircle: {
			color: '#df1e15' // 外圈颜色(可选)
		},
		innerCircle: {
			color: '#f4ad26' // 里圈颜色(可选)
		},
		dots: ['#fbf0a9', '#fbb936'], // 装饰点颜色(可选)
		disk: ['#ffb933', '#ffe8b5', '#ffb933', '#ffd57c', '#ffb933', '#ffe8b5', '#ffd57c'], //中心奖盘的颜色，默认7彩(可选)
		title: {
			color: '#5c1e08',
			font: '19px Arial'
		} // 奖品标题样式(可选)
	})

	// 初始化转盘
	wheelSurf.init()
	// 抽奖
	var throttle = true;
	$("#start").on('click', function () {

		var winData = getGift() // 正常情况下获奖信息应该由后台返回

		$("#message").html('')
		if(!throttle){
			return false;
		}
		throttle = false;
		var count = 0
		// 计算奖品角度

		for (const key in list) {
			if (list.hasOwnProperty(key)) {                    
				if (winData.id == list[key].id) {
					break;
				}
				count++    
			}
		}
  
		// 转盘抽奖，
		wheelSurf.lottery((count * angel + angel / 2), function () {
			$("#message").html(winData.name)
			throttle = true;
		})
	})

	
</script>

</body>
</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/lotteryTurntableCanvas.png" />


[Demo 源码下载](/pc-source-code/JQ/lotteryTurntableCanvas.rar)

<!-- -------------------------------------------------------------------------- -->

## 指针转动抽奖
```html
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>抽奖</title>
		<meta charset="utf-8">
		<meta name="keywords" content="">
		<meta name="description" content="">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="renderer" content="webkit">
		<link rel="stylesheet" type="text/css" href="css/reset.css" />
		<style>
			.g-content {
				width: 100%;
				background: #fbe3cc;
				height: auto;
				font-family: "微软雅黑", "microsoft yahei";
			}
			.g-content .g-lottery-case {
				width: 500px;
				height: 445px;
				margin: 0 auto;
				overflow: hidden;
			}
			
			.g-content .g-lottery-case .g-left h2 {
				font-size: 20px;
				line-height: 32px;
				font-weight: normal;
				margin-left: 20px;
			}
			
			.g-content .g-lottery-case .g-left {
				width: 450px;
				float: left;
			}
			
			.g-lottery-box {
				width: 400px;
				height: 400px;
				margin-left: 30px;
				position: relative;
				background: url(img/lottery/ly-plate-c.gif) no-repeat;
			}
			
			.g-lottery-box .g-lottery-img {
				width: 340px;
				height: 340px;
				position: relative;
				background: url(img/lottery/bg-lottery.png) no-repeat;
				left: 30px;
				top: 30px;
			}
			
			.g-lottery-box .playbtn {
				width: 186px;
				height: 186px;
				position: absolute;
				top: 77px;
				left: 77px;
				background: url(img/lottery/playbtn.png) no-repeat;
			}
		</style>
	</head>

	<body>
		<div class="g-content">
			<div class="g-lottery-case">
				<div class="g-left">
					<h2>您已拥有<span class="playnum"></span>次抽奖机会，点击立刻抽奖！~</h2>
					<div class="g-lottery-box">
						<div class="g-lottery-img">
							<a class="playbtn" href="javascript:;" title="开始抽奖"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="js/jquery-1.8.3.min.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="js/jquery.rotate.min.js"></script>
		<script>
			$(function() {
				var $btn = $('.playbtn');
				var playnum = 1; //初始次数，由后台传入
				$('.playnum').html(playnum);
				var isture = 0;
				var clickfunc = function() {
					var data = [1, 2, 3, 4, 5, 6];
					//data为随机出来的结果，根据概率后的结果
					data = data[Math.floor(Math.random() * data.length)];
					switch(data) {
						case 1:
							rotateFunc(1, 0, '恭喜您获得2000元理财金!');
							break;
						case 2:
							rotateFunc(2, 60, '谢谢参与~再来一次吧~');
							break;
						case 3:
							rotateFunc(3, 120, '恭喜您获得5200元理财金!');
							break;
						case 4:
							rotateFunc(4, 180, '恭喜您获得100元京东E卡，将在次日以短信形式下发到您的手机上，请注意查收!');
							break;
						case 5:
							rotateFunc(5, 240, '谢谢参与~再来一次吧~');
							break;
						case 6:
							rotateFunc(6, 300, '恭喜您获得1000元理财金!');
							break;
					}
				}
				$btn.click(function() {
					if(isture) return; // 如果在执行就退出
					isture = true; // 标志为 在执行
					//先判断是否登录,未登录则执行下面的函数
					if(1 == 2) {
						$('.playnum').html('0');
						alert("请先登录");
						isture = false;
					} else { //登录了就执行下面
						if(playnum <= 0) { //当抽奖次数为0的时候执行
							alert("没有次数了");
							$('.playnum').html(0);
							isture = false;
						} else { //还有次数就执行
							playnum = playnum - 1; //执行转盘了则次数减1
							if(playnum <= 0) {
								playnum = 0;
							}
							$('.playnum').html(playnum);
							clickfunc();
						}
					}
				});
				var rotateFunc = function(awards, angle, text) {
					isture = true;
					$btn.stopRotate();
					$btn.rotate({
						angle: 0,
						duration: 4000, //旋转时间
						animateTo: angle + 1440, //让它根据得出来的结果加上1440度旋转
						callback: function() {
							isture = false; // 标志为 执行完毕
							alert(text);
						}
					});
				};
			});
		</script>
	</body>

</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/lotteryTurntablePointer.png" />


[Demo 源码下载](/pc-source-code/JQ/lotteryTurntablePointer.rar)