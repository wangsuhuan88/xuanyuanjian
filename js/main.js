$(function(){
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		if (top>1000) {
			$(".m-top").fadeIn();
		}else
		{
			$(".m-top").fadeOut();
		}
	});
		
	$(".m-top").click(function(){	
		$('body,html').animate({scrollTop:0},500); 
	});




$(".u-ul1 li").mouseover(function(){
		$(this).find(".u-nav-more").removeClass("u-zd").addClass("u-zk");
		$(this).find("ul").show();
		var tmpName=$(this).index()+1;
		$(this).find(".m-nav-a").removeClass("u-navitem"+tmpName).addClass("u-navitem"+tmpName+"-1");
	}).mouseleave(function(){
		$(this).find(".u-nav-more").removeClass("u-zk").addClass("u-zd");
		$(this).find("ul").hide();
		var tmpName=$(this).index()+1;
		$(this).find(".m-nav-a").removeClass("u-navitem"+tmpName+"-1").addClass("u-navitem"+tmpName);
	});

$(".m-wrap").eq(0).css("margin-right","0");


	$("#ul4 li,#ul5 li").each(function(){
		if ($(this).index()==5 || $(this).index()==10) {
			$(this).css("padding-top","13px");
		};
	});


	$("#btn1,#btn2").click(function(){
		var index=$(this).index();
		$(".u-ul4").hide();
		$(".u-ul4").eq(index).show();
		$(".u-zx-tab-cur").removeClass("u-zx-tab-cur").addClass("u-zx-tab");
		$(this).removeClass("u-zx-tab").addClass("u-zx-tab-cur");
	});


	$(".m-box2-tab a").click(function(){
		var index=$(this).index();
		$(this).siblings().removeClass("u-box2-tab-cur").addClass("u-box2-tab");
		$(this).removeClass("u-box2-tab").addClass("u-box2-tab-cur");
		$(".m-xxk").siblings().hide();
		$(".m-xxk").eq(index).show();

	});


	$(".m-box4-tab a").mouseover(function(){
		var index=$(this).index();
		$(this).siblings().removeClass("u-box4-tab-cur").addClass("u-box4-tab");
		$(this).removeClass("u-box4-tab").addClass("u-box4-tab-cur");
		$(".m-box4-1 img").hide();
		$(".m-box4-1 img").eq(index).show();
	});


	$(".u-ul13 a").mouseover(function(){
		var index=$(this).index();
		$(this).parent().siblings().find(".u-item13-info").hide();
		$(this).children(".u-item13-info").show();
	});





var time1=setInterval(forcusFun,2000);
$(".m-focurnum a").mouseover(function(){
		clearInterval(time1);
		var tmp1=$(this).index();
		num=tmp1;
		forcusFun();
	}).mouseleave(function(){
		//console.log("mouseleave");
		time1=setInterval(forcusFun,2000);
	});
});
/******************/
var num=0;
var forcusFun=function(){
	$("#ul8 li").hide();
	$("#ul8 li").eq(num).show();
	$(".m-focurnum a").eq(num).removeClass("u-tit-a").addClass("u-tit-cur-a").siblings().removeClass("u-tit-cur-a").addClass("u-tit-a");

	num++;
	if (num>2) {
		num=0;
	};
};
