var items = document.getElementsByClassName('item');
//获取所有的轮播图片

var index = 0;
//index 表示当前第几张图在展示》第index张图片，有active这个类名
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
}
//删除掉全部的active类名，这里写完，在下方第19行进行调用，确保不会出现多个元素有 active

var goIndex = function () {
    clearActive();
    items[index].className = 'item active'
    //index包含多个数字，是一个数组，用方框
}
//用于给元素添加classname

var goNext = function () {
    if (index < 2) {
        index ++;
    }else
    index = 0;
    goIndex();
}

var goPre = function () {
    if(index == 0){
        index = 2 ;
    }else{
        index --;
    }
    goIndex();
}
//制造时间，每次点击的时候index都会自己+1，然后执行goIndex，添加他的元素类名。
//需要加一个判断，不能无限制添加，无限制添加后，会报错
//保证不会溢出

var goPreBtn = document.getElementById('goPre');
//获取左侧按钮
var goNextBtn = document.getElementById('goNext');
//获取右侧按钮
goNextBtn.addEventListener('click',function(){
     goNext();
 });
 goPreBtn.addEventListener('click',function(){
    goPre();
});