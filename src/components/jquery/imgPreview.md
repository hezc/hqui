---
footer: false
# aside: false
---

# jquery版本的：缩略图+预览
```html
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link rel="stylesheet" href="imgPreview.css" />
	<style>
		.picView-magnify-list{}
		.picView-magnify-list li{float:left;display:inline-block;width:100px;height:60px;border:1px solid #ccc;margin-right:10px; overflow:hidden;}
		.picView-magnify-list li img{width:100px;height:60px;}
	</style>
</head>

<body>
    <ul class="picView-magnify-list" style="padding: 30px">
        <li>
            <span data-magnify="gallery" data-group="g1" data-src="./images/a1.png"
                data-caption="测试图片一">
                <img src="images/a1.png" />
            </span>
        </li>
        <li>
            <span data-magnify="gallery" data-group="g1" data-src="./images/a2.png"
                data-caption="测试图片二">
                <img src="images/a2.png" />
            </span>
        </li>
        <li>
            <span data-magnify="gallery" data-group="g1" data-src="./images/a3.png"
                data-caption="测试图片三">
                <img src="images/a3.png" />
            </span>
        </li>
        <li>
            <span data-magnify="gallery" data-group="g1" data-src="./images/a4.png"
                data-caption="测试图片四">
                <img src="images/a4.png" />
            </span>
        </li>
		<li>
            <span data-magnify="gallery" data-group="g1" data-src=""
                data-caption="测试图片五">
                <img src="images/a5.png" />
            </span>
        </li>
    </ul>
    <script src="jquery-1.10.2.js"></script>
    <script src="imgPreview.js"></script>
    <script src="jquery.rotate.min.js"></script>
    <script type="text/javascript">
        $(function () {
            $("[data-magnify]").Magnify({
                Toolbar: [
                    "prev",
                    "next",
                    "rotateLeft",
                    "rotateRight",
                    "zoomIn",
                    "actualSize",
                    "zoomOut",
                ],
                keyboard: true,
                draggable: true,
                movable: true,
                modalSize: [800, 600],
                beforeOpen: function (obj, data) {
                    console.log("beforeOpen");
                },
                opened: function (obj, data) {
                    console.log("opened");
                },
                beforeClose: function (obj, data) {
                    console.log("beforeClose");
                },
                closed: function (obj, data) {
                    console.log("closed");
                },
                beforeChange: function (obj, data) {
                    console.log("beforeChange");
                },
                changed: function (obj, data) {
                    console.log("changed");
                },
            });
        });
    </script>
</body>

</html>
```
预览效果图：
<img src="/public/pc-source-code/JQ/imgPreview.png" />


[Demo 源码下载](/pc-source-code/JQ/imgPreview.rar)