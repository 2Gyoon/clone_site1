$(document).ready(function(){

    $(".tab_cont ul li.sec").hide();

    $("#left .tab_btn ul li a").click(function(){
        var $category = $(this).attr("val");
        console.log($category);
        $("#left .tab_btn ul li a").removeClass("active");
        $(this).addClass("active");
        $(".tab_cont ul li").hide();
        $(".tab_cont ul li." + $category).show();

        if($category == "box"){
            $(".bot_btn ul").show();
            $(".tab_cont ul li.sec").hide();
            $("#left .bot_btn ul li").removeClass("active");
            $("#left .bot_btn ul li.one, #left .bot_btn ul li.right_arr").addClass("active");
        }else{
            $(".bot_btn ul").hide();
        }


        return false;
    });

    $("#left .bot_btn ul li.two, #left .bot_btn ul li.right_arr").click(function(){
        $(".tab_cont ul li.fir").hide();
        $(".tab_cont ul li.sec").show();

        $("#left .bot_btn ul li").removeClass("active");
        $("#left .bot_btn ul li.two, #left .bot_btn ul li.left_arr").addClass("active");

        $("html, body").animate({scrollTop:200}, 500);
        return false;
    });

    $("#left .bot_btn ul li.one, #left .bot_btn ul li.left_arr").click(function(){
        $(".tab_cont ul li.sec").hide();
        $(".tab_cont ul li.fir").show();

        $("#left .bot_btn ul li").removeClass("active");
        $("#left .bot_btn ul li.one, #left .bot_btn ul li.right_arr").addClass("active");
        
        $("html, body").animate({scrollTop:200}, 500);
        return false;
    });













});