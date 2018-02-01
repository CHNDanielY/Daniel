
$(function(){
    // 主轮播图
    $(".carousel").carousel();
    // 副轮播图
   

    var listItem='<div class="live-recommend-detail-item">';
        listItem+='<div class="live-recommend-detail-item-banner">';                                    
        listItem+='<a href=""><img src="https://sfault-live.b0.upaiyun.com/137/069/1370692931-5a669f3d8bf2e_render" alt=""></a>'                                        
        listItem+='</div>';
        listItem+= '<h5 class="live-recommend-detail-item-title">';
        listItem+='<a class="clr212" href="">android线程同步那些事儿</a></h5>';
        listItem+='<div class="mb5 clr999">(28 人参与)</div>';
        listItem+='<span><span class="cur-price">￥1.00</span></span>'  ;                              //     
        listItem+='</div>';
        listItem+= '<div class="live-recommend-detail-item">';
        listItem += '<div class="live-recommend-detail-item-banner">';
        listItem += '<a href=""><img src="https://sfault-live.b0.upaiyun.com/366/227/3662279048-5a3b2c86c8d96_render" alt=""></a>';
        listItem += "</div>";
        listItem += '<h5 class="live-recommend-detail-item-title">';
        listItem += '<a class="clr212" href="">SpringBoot搭建自己的个人博客(一)</a></h5>';
        listItem += '<div class="mb5 clr999">(20 人参与)</div>';
        listItem += '<span><span class="cur-price">￥16.00</span></span>'; //
        listItem += "</div>";

     var timer = null,
     $detail = $(".live-recommend-detail"),
     $item = $(".live-recommend-detail-item");
    // for(i=0;i<3;i++){
        $detail.prepend(listItem);
    // }
     // console.log($item.width())
    // console.log(parseInt($detail.css('left'))-192+"px")
    function animate(){
        $detail.animate({
            left:parseInt($detail.css('left'))-212+"px"
        })
    }
    // if()
     $(document).on("click",'.live-recommend-detail-item',function() {
        alert($(this).index());
    });
    timer=setInterval(function(){
        // animate()
    },3000)
    console.log(timer)
})