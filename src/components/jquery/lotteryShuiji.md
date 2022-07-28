---
footer: false
# aside: false
---

# jquery版本的：随机抽奖
```html
<!DOCTYPE html>

<head>
    <meta charset="utf8">
    <title>随机抽奖</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="ChouJiang.js"></script>
</head>

<body>
    <div class="main">
        <ul id="choujiang">
            <li class="s s1">1元红包</li>
            <li class="s s2">2元红包</li>
            <li class="s s3">3元红包</li>
            <li class="s s4">4元红包</li>
            <li class="s s5">666元红包</li>
            <li class="s s6">谢谢光临</li>
            <li class="s s7">50元红包</li>
            <li class="s s8">8元红包</li>
            <li class="s s9">10元红包</li>
            <li class="s s10">20元红包</li>
            <li class="s s11">谢谢光临</li>
            <li class="s s12">200元红包</li>
            <li class="s s13">50元红包</li>
            <li class="s s14">9999元红包</li>
            <li class="s s15">谢谢光临</li>
            <li class="s s16">88888元红包</li>
        </ul>
        <button id="start" onclick="start()">开始抽奖</button>
    </div>
    <script>
        'use strict';
        function start() {
            let target = new ChouJiang('choujiang', new Map([
                [13, 0.0001],   // 设置中奖概率： [节点索引,中奖率] 
                [14, 0.25],
                [15, 0.0001],
                [10, 0.25],
                [5, 0.25],
            ]));
            //target.winning = 4;     // 设置中奖节点：用于弊器
            target.start();   // 开始
        }
    </script>
</body>

</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/lotteryShuiji.png" />


[Demo 源码下载](/pc-source-code/JQ/lotteryShuiji.rar)