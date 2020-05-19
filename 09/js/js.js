//返回顶部代码
$(document).ready(function() {
    //首先将#btn隐藏
    $("#back").hide();
    //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
          $("#back").fadeIn(200);
        } else {
          $("#back").fadeOut(200);
        }
      });
      //当点击跳转链接后，回到页面顶部位置
      $("#back").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        return false;
      });
    });
  });


  //轮播动画

  $(document).ready(function () {
    var i = 0;
    var timer;

    //用jquery方法设置第一张图片显示，其余隐藏
    $('.item').eq(0).show().siblings('.item').hide();
    //jQuery 遍历 - eq() 方法 ,指定序号，silings 所有同级别

    //创建一个Show函数
    function Show() {
        //在这里可以用其他jquery的动画
        $('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);

        //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式,滑动样式
        $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');

    }

    //创建一个showTime函数
    function showTime() {
        //定时器
        timer = setInterval(function () {
            //调用一个Show()函数
            Show();
            i++;
            //当图片是最后一张的后面时，设置图片为第一张
            if (i == 5) {
                i = 0;
            }
        }, 3000);
    }


    //调用showTime()函数（轮播函数）
    showTime();

    //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
    $('.tab').hover(function () {
        //获取当前i的值，并显示，同时还要清除定时器
        i = $(this).index();
        Show();
        clearInterval(timer);
    }, function () {
        //
        showTime();
    });

    //鼠标点击左侧的箭头
    $('.prev').click(function () {
        clearInterval(timer);
        if (i == 0) {
            i = 5;//注意此时i的值
        }
        i--;
        Show();
        showTime();
    });

    //鼠标点击右侧的箭头
    $('.next').click(function () {
        clearInterval(timer);
        if (i == 4) {
            i = -1;//注意此时i的值
        }
        i++;
        Show();
        showTime();
    });
});

