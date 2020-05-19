function GetTime() {
    var EndTime = new Date('2020/6/11 12:00:00');
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    if(t>0){
        d = Math.floor(t/1000/60/60/24);
        h = Math.floor(t/1000/60/60%24);
        m = Math.floor(t/1000/60%60);
        s = Math.floor(t/1000%60);
    }

    document.getElementById('daystime').innerHTML = d;
    document.getElementById('hourtime').innerHTML = h;
    document.getElementById('minutetime').innerHTML = m;
    document.getElementById('secondtime').innerHTML = s;

}
setInterval(GetTime,0);

function Draw() {
    var number = document.getElementsByTagName('input');
    var luck =   Math.floor(Math.random()*10000000000+1);
    number[0].placeholder = "恭喜您，您的抽奖号码是" + luck;
}
document.getElementById('btn').addEventListener('click',
    function (even) {
        Draw();
    },);