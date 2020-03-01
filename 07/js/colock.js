function clock()
{
 var today = new Date(); //创建一个新的时间点
 var year = today.getFullYear();  //从当前时间从获取当前年份
 var month = today.getMonth()+1;//获得年、月、日，Date()函数中的月份是从0－11计算
 var date = today.getDate();//从当前时间从获取当前天
 var hour = today.getHours();  //获得当前小时，0-23小时的
 var minute = today.getMinutes();//获得当前分钟
 var second = today.getSeconds();//获得当前秒钟
 
 var apm="AM"; //默认显示上午: AM
 if (hour>12) //按12小时制显示
 {
    hour=hour-12;  //如果时间大于十二，则会有减去12
    apm="PM"  ;
 }

 var weekday = 0; //定义一个初始值，后面可以替换，自动被更新
 switch(today.getDay()){  //getDay()返回一个星期的哪一天，0-6，，星期天为0
    case 0:
  	weekday = "星期日";
	break;
    case 1:
  	weekday = "星期一";
	break;
	case 2:
  	weekday = "星期二";
	break;
	case 3:
  	weekday = "星期三";
	break;
	case 4:
  	weekday = "星期四";
	break;
	case 5:
  	weekday = "星期五";
	break;
	case 6:
  	weekday = "星期六";
	break;
 }

 
  /*设置div的内容为当前时间*/
 document.getElementById("myclock").innerHTML="<h2>你好，现在是北京时间：</h2><h2>"+year+"年"+month+"月"+date+"日&nbsp;"+hour+":"+minute+":"+second+"&nbsp;"+apm+"&nbsp;"+weekday+"</h2>";

}

/*使用setInterval()每间隔指定毫秒后调用clock()*/
var newtime = setInterval("clock()",1000);

function mouseOver()
{
document.getElementById('b1').src ="images/b2.jpg"
}
function mouseOut()
{
document.getElementById('b1').src ="images/b1.jpg"
}






