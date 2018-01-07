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

$('.carousel').carousel({
  interval: 3000
})