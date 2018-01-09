$(function(){
	// 购物车
	$(".car").hover(function(){
	$(this).css("borderBottom","none");
	var $shop=$(".car_shop")
	var outerH=$shop.outerHeight();
	$shop.show().css({
		"bottom":-outerH+"px"
	})
	},function(){
		var $shop=$(".car_shop");
		$shop.hide()
	})

	// nav list
	$(".nav_list ul>li,.list_detail").hover(function(){
		$(".list_detail").show();
		var data=$(this).data("id");
		var Id=$(".cate_list").filter("#"+data);
		Id.show().siblings().hide();
		// console.log($(this).data("id"))
	},function(){
		$(".list_detail").hide()
		$(".cata_list").hide()
	})

	//轮播图
	$('.carousel').carousel({
	  interval: 3000
	});

	// list content
	!function(){
		var dtCon=["电视","空调","数码","家具","图书","个护","运动","玩具","男装","食品","鞋子"];
		var ddCon="<dl class=\"clear\"><dt><span>手机通讯</span><i class=\"glyphicon glyphicon-chevron-right\"></i></dt><dd>";
		ddCon+="<a href=\"\">全部手机</a><a href=\"\">ipone</a><a href=\"\">小米</a><a href=\"\">华为</a>"
		ddCon+="<a href=\"\">三星</a><a href=\"\">索尼</a><a href=\"\">oppo</a><a href=\"\">魅族</a>";
		ddCon+="<a href=\"\">全部手机</a><a href=\"\">ipone</a><a href=\"\">小米</a><a href=\"\">华为</a>";
		ddCon+="<a href=\"\">三星</a><a href=\"\">索尼</a><a href=\"\">oppo</a><a href=\"\">魅族</a>";
		ddCon+="</dd></dl>"
		var dtLen=dtCon.length;
		var rand=Math.floor(dtLen*Math.random());
		// 循环二级菜单
		for(i=0;i<5;i++){
			$(".cate_list").append(ddCon);
		};
		var list=$(".cate_list dt");
		$.each(list,function(key,val){
			var rand=Math.floor(dtLen*Math.random());
			$(val).find("span").text(dtCon[rand])
		})
		// for( let i=0;i<list.length;i++){
		// 	var setnum=setTimeout(function(){
		// 		var rand=Math.floor(dtLen*Math.random());
		// 		$(list[i]).text(dtCon[rand])
		// 	},i*0.1)	
		// }
		

	}()
	
})

