function show_prompt() {
	var blood = prompt("请输入您的血型", "在这里如实填写您的血型a或者b或者ab或者o");
	//显示一个弹出的对话框，提示内容如上述所示。
	switch (blood) {
		//定一个切换的switch函数，名为blood;
		case "a":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/a1.jpg'><br/><img src='images/a2.jpg'><br/><img src='images/a3.jpg'></div>";
			break;
		//如果输入的是a，替换result div中的内容，三行图片，每行图片的中间用分隔符隔开。下面b、o、ab同理。
		case "b":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/b1.jpg'><br/><img src='images/b2.jpg'><br/><img src='images/b3.jpg'></div>";
			break;
		case "o":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/o1.jpg'><br/><img src='images/o2.jpg'><br/><img src='images/o3.jpg'></div>";
			break;
		case "ab":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/ab1.jpg'><br/><img src='images/ab2.jpg'><br/><img src='images/ab3.jpg'></div>";
			break;
		default: alert('请检查是不是输入错误了？');
		//其所有的情况，则会默认弹出显示，请检查是否输错。
	}
}
function warming() {
	//定一个名为warming的动作
	alert('还没开始就放弃\n还不赶紧点测试？');
	//定义一个放弃的弹窗
	// \n 代表换行
} 


