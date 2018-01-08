$(function(){
	// 购物车
	$(".car").hover(function(){
	$(this).css("borderBottom","none");
	var $shop=$(".car_shop")
	var outerH=$shop.outerHeight();
	// console.log(outerH)
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
		var ddCon="<a href=\"\">全部手机</a><a href=\"\">ipone</a><a href=\"\">小米</a><a href=\"\">华为</a>";
		ddCon+="<a href=\"\">三星</a><a href=\"\">索尼</a><a href=\"\">oppo</a><a href=\"\">魅族</a>";
		ddCon+="<a href=\"\">全部手机</a><a href=\"\">ipone</a><a href=\"\">小米</a><a href=\"\">华为</a>";
		ddCon+="<a href=\"\">三星</a><a href=\"\">索尼</a><a href=\"\">oppo</a><a href=\"\">魅族</a>"
		var dtLen=dtCon.length;
		var rand=Math.floor(dtLen*Math.random());			
		console.log(rand)
		console.log(dtCon[rand])
		$(".cate_list:gt(1)").find("dd").append(ddCon);
		console.log($(".cate_list dt"))
		// $(".cate_list dt").each(function(){
		// 	// alert($(this).text())
		// 	// $(this).text(dlCon[rand])
		// })
		var list=$(".cate_list dt");
		var x=[];
		x[i]=dtCon[rand];
			 console.log(x[3])
			$(list[i]).text(x[i]);

		// var x=daCon[rand]
		for( let i=0;i<list.length;i++){
			


		}
		

	}()
	
})

