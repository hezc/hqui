---
footer: false
# aside: false
---

# jquery版本的slider
```html
<script src="https://res-js.hqewimg.com/res/hqui/1.0.2/js/jquery.uislider.min.js"></script>
<div class="uislider js-ad-tips" id="J_uislider">
    <ul class="uislider-content">
        <li class="uislider-c active">
            <a href="#">
                <img class="main-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2015723141733788985.png">
                <img class="left-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2015723141742641037.png">
                <img class="right-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2015723141752594363.png">
            </a>
        </li>
        <li class="uislider-c">
            <a href="#">
                <img class="main-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2015729144414128059.png">
                <img class="left-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2015729144423564926.png">
                <img class="right-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2015729144432138169.png">
            </a>
        </li>
        <li class="uislider-c">
            <a href="#">
                <img class="main-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/20151231162723175084.png">
                <img class="left-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2016111162347695667.png">
                <img class="right-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2016111162359586093.png">
            </a>
        </li>
        <li class="uislider-c">
            <a href="#">
                <img class="main-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2016119172352350046.png">
                <img class="left-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/201611917235536307.png">
                <img class="right-img"
                    data-src="//img1.hqewimg.com/File/ASFile/G01/2016119172359125771.png">
            </a>
        </li>
    </ul>
    <ol class="uislider-nav">
        <li class="uislider-n active">1</li>
        <li class="uislider-n">2</li>
        <li class="uislider-n">3</li>
        <li class="uislider-n">4</li>
    </ol>
    <div class="uislider-pager">
        <div class="next">&gt;</div>
        <div class="prev">&lt;</div>
    </div>
</div>

<script>
    $("#J_uislider").uislider();
</script>
```

```css
.uislider{height:290px;width:680px;display:inline;float: left;overflow: hidden;position: relative;}
.uislider-content li{ display: block;  position: relative; z-index: 1;  width: 680px;  height: 290px;  overflow: hidden;}
.uislider-content li img{width:680px;height:290px;}
.uislider-content .uislider-c{display: none;}
.uislider-content .active{display: block;}
.uislider .main-img {display:block;}
.uislider .left-img { opacity:0; display: block;z-index: 1;position: absolute;left:-800px;_left: 0;_display: none;top: 0;}
.uislider .right-img { opacity:0; display: block;z-index: 2;position: absolute;right:20px;_right: 0;_display: none;top: 0;}
.uislider-nav{ position: absolute; z-index: 2; bottom: 15px; right: 15px; }
.uislider-nav li{background:#fff;float:left;display: inline;width:8px;height:8px;margin-left:8px;font-size:0;line-height:0; opacity: 0.4;filter: alpha(opacity=40);overflow: hidden;cursor: pointer;border-radius:4px;transition: width 0.3s ease;}
.uislider-nav li.active{ opacity: 1; filter: alpha(opacity=100);width:15px;}
.uislider .next,.uislider .prev{position:absolute;top:50%;margin-top:-31px;z-index:1;width:28px;height:62px;line-height:62px;background: #000;background:rgba(0,0,0,.2);color:#fff;text-align:center;font-size:22px;font-weight:400;font-family:simsun;cursor: pointer;_background-color: #000;filter: alpha(opacity=20);user-select:none;}
.uislider .uislider-pager{display:none;}
.uislider:hover .uislider-pager{display:block;}
.uislider .prev{left:0;border-radius:0 5px 5px 0;}
.uislider .next{right:0;border-radius:5px 0 0 5px;}
```

[在线 Demo](https://codepen.io/hezc/pen/ZEreYNR)