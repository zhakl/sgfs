/**
 * Created by zql on 2015/12/30.
 */
$(document).ready(function(){
    $(".smimg li img").mouseover(function(){
        $(".smimg li img").css("opacity","0.3");
        $(".smimg li img").css("box-shadow","5px 5px 5px #ccc");

        $(this).animate({"opacity":"1"},600)

    });
   $(".smimg li img").click(function(){
        $(".bbi").attr("src",$(this).attr("src"))

   });
   
    /*lunbo*/
    $(".pat_ul").append($(".pat_ul").html());
    v=$(".pat_ul li").length;
    w=v*300;
    $(".pat_ul").css("width",w+"px");
    var kua=$(".pat_ul").css("width");
    var timer=null;
    var timer1=null;
    var timer2=null;
    var sped = "=5";
    var is=1;
    timer2=setInterval(function(){
        $(".pat_ul").animate({"left":"-=5px"},30,function()
        {
            if(parseInt($(".pat_ul").css("left"))<= -(parseInt(kua)/2))
            {
                $(".pat_ul").css("left","0")

            }
        })
    },60);

    $(".lunbo").mouseover(function(){
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer);

    });
    $(".lunbo").mouseout(function(){
       if(is==1){
           $(".left").trigger("click");
       }else{
           $(".right").trigger("click");
       }
    });
    $(".left, .right").mousedown(function(){
        setTimeout(function(){sped="=40";
            return;},500)


    });
    $(".left, .right").mouseup(function(){
        setTimeout(function(){sped="=5";
            return;},500)

    });
   $(".left").click(function(){
       is=1;
       clearInterval(timer1);
       clearInterval(timer2);
       clearInterval(timer);

       timer=setInterval(function(){
           $(".pat_ul").animate({"left":"-"+sped},30,function()
           {

               if(parseInt($(".pat_ul").css("left"))<= -(parseInt(kua)/2))
               {
                   $(".pat_ul").css("left","0")

               }

           })
       },60);
   });
    $(".right").click(function(){
        is=2;
        clearInterval(timer);
        clearInterval(timer2);
        clearInterval(timer1);
        timer1=setInterval(function(){
            $(".pat_ul").animate({"left":"+"+sped},30,function()
            {
                if(parseInt($(".pat_ul").css("left"))>=0)
                {
                    $(".pat_ul").css("left",(-(parseInt(kua)/2))+"px")
                }
            })
        },60);
    });
    $(".left").mousemove(function(){
        $(".left").css("background-image","url(images/arr02.jpg)")
    });
    $(".left").mouseout(function(){
        $(".left").css("background-image","url(images/arr01.jpg)")
    });
    $(".right").mousemove(function(){
        $(".right").css("background-image","url(images/arr03.jpg)")
    });
    $(".right").mouseout(function(){
        $(".right").css("background-image","url(images/arr.jpg)")
    });
    var wid = 0;
    var len = 0;
    var wd = 0;
     $(".c_ul").append($(".c_ul").html());
    len =$(".c_ul li").length;
    wid = len *411;
    $(".c_ul").css("width",wid);
    var wd = -parseInt($(".c_ul").css("width"))/2;
    $(".l img").click(function()
    {
        $(".c_ul").animate({left:"-=411"},"fast",function()
        {
            if(parseInt($(".c_ul").css("left"))<= wd){
                $(".c_ul").css("left","0");
            }
        });
    });
    $(".r img").click(function()
    {
        $(".c_ul").animate({left:"+=411"},"fast",function()
        {
            if(parseInt($(".c_ul").css("left"))>=0){
                $(".c_ul").css("left",wd);
            }
        });
    });


});
$(function(){
    $(".open").click(function(){
        $(".vis").css("display","block");
        var contents=$(this).attr("href");
        var sss=$("#contents").offset().top;
        $("html,body").animate({scrollTop:sss},666);

    });
});
var isno=0;
function ccd(){

    /***********************
     * 函数：判断滚轮滚动方向
     * 作者：walkingp
     * 参数：event
     * 返回：滚轮方向 1：向上 -1：向下
     *************************/
    var scrollFunc=function(e){
        if (isno==0){
            isno=1;
            $(".vis").css("display","block");
            var contents=$(this).attr("href");
            var sss=$("#contents").offset().top;
            $("html,body").animate({scrollTop:sss},666);
        }
        var e = e || window.event;

        var t1=document.getElementById("wheelDelta");
        var t2=document.getElementById("detail");
        if(e.wheelDelta){//IE/Opera/Chrome
            t1.value=e.wheelDelta;
        }else if(e.detail){//Firefox
            t2.value=e.detail;
        }
        ScrollText(direct);


    };
    /*注册事件*/
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
    }//W3C
    window.onmousewheel=document.onmousewheel=window.onmousewheel=document.onmousewheel=function(){
        if (isno==0){
            isno=1;
        $(".vis").css("display","block");
        var contents=$(this).attr("href");
        var sss=$("#contents").offset().top;
        $("html,body").animate({scrollTop:sss},666);
        }
    }


}
ccd();

/*鼠标隐藏显示*/
$(document).ready(function(){
	$(".zong").mouseover(
			function(){
		    	
		        $(".zhezhao").css("opacity","0.5");
		        $(".zhezhao").css("filter","alpha(opacity=50)");
		        $(".zizi").css("display","block");
		                                });
	$(".zong").mouseout(
			function(){
		    	
		        $(".zhezhao").css("opacity","0");
		        $(".zhezhao").css("filter","alpha(opacity=0)");
		        $(".zizi").css("display","none");
		                                });
	
});
$(document).ready(function(){
	$(".zong_b").mouseover(
			function(){
				
				$(".zhezhao_b").css("opacity","0.5");
				$(".zhezhao_b").css("filter","alpha(opacity=50)");
				$(".zizi_b").css("display","block");
			});
	$(".zong_b").mouseout(
			function(){
				
				$(".zhezhao_b").css("opacity","0");
				$(".zhezhao_b").css("filter","alpha(opacity=0)");
				$(".zizi_b").css("display","none");
			});
	
});
$(document).ready(function(){
	$(".zong_c").mouseover(
			function(){
				
				$(".zhezhao_c").css("opacity","0.5");
				$(".zhezhao_c").css("filter","alpha(opacity=50)");
				$(".zizi_c").css("display","block");
			});
	$(".zong_c").mouseout(
			function(){
				
				$(".zhezhao_c").css("opacity","0");
				$(".zhezhao_c").css("filter","alpha(opacity=0)");
				$(".zizi_c").css("display","none");
			});
	
});
$(document).ready(function(){
	$(".zong_d").mouseover(
			function(){
				
				$(".zhezhao_d").css("filter","alpha(opacity=30)");
				$(".zizi_d").css("display","block");
			});
	$(".zong_d").mouseout(
			function(){
				
				$(".zhezhao_d").css("filter","alpha(opacity=0)");
				$(".zizi_d").css("display","none");
			});
    $(".millde ul li").mouseover(function()
    {
       $(this).children("div").fadeIn(400);
    });
    $(".millde ul li").mouseleave(function()
    {
       $(this).children("div").fadeOut(400);
    });
	
});






















