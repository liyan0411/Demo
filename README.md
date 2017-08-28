# Demo


1： 移动端图片上传裁切功能---phone_loadimg

应用到的知识点有：
canvas :
	clearRect() //清除画布   drawImage() //图片    
	getImageData(x,y,w,h) 获取canvas中的画面
	 //putImageData(imgData,x,y);向canvas中添加画面    getBoundingClientRect()
	    这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。
	    分别表示元素各边与页面上边和左边的距离。

H5 input["file"]:
	new FileReader()//读取本地图片文件并显示

移动端事件
	touchstart    touchmove     touchend    (touches获取当前屏幕几指操作)

js
	addEventListener()   事件绑定     阻止冒泡 stopPropagation()

实现的功能：上传图片，图片拖拽，选框拖拽、缩放，图片裁切
	