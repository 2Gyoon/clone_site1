$(document).ready(function(){


     //sec_4
     //무한루프가 가능하지만 빠르게 누르면 빈칸이 보이는 문제점이 있음 -> 해결!(05/12)
     //잡고 이동시키는건 어떻게 하는지 모르겠음..ㅎ
     //-50
     $("#sec_4 .slide_part .next").click(function(){
          var $first = $("#sec_4 .slide_part ul li").first();
          console.log($first);
          $("#sec_4 .slide_part ul").stop().animate({"margin-left": -75 +"%"},500, function(){
               $("#sec_4 .slide_part ul").append($first).css("margin-left", -50+"%");
          });
     });

     $("#sec_4 .slide_part .prev").click(function(){
          var $last = $("#sec_4 .slide_part ul li").last();
          console.log($last);
          $("#sec_4 .slide_part ul").stop().animate({"margin-left": -25+"%"},500, function(){
               $("#sec_4 .slide_part ul").prepend($last).css("margin-left", -50+"%");
          });
     });


     //sec_5
     //무한루프가 가능하지만 빠르게 누르면 빈칸이 보이는 문제점이 있음 -> 해결!(05/12)
     //잡고 이동시키는건 어떻게 하는지 모르겠음..ㅎ

     //-100% / 3 * 2;
     $("#sec_5 .slide_part .next").click(function(){
          var $first = $("#sec_5 .slide_part ul li").first();
          console.log($first);
          $("#sec_5 .slide_part ul").stop().animate({"margin-left": (-100 / 3 * 2) +"%"},500, function(){
               $("#sec_5 .slide_part ul").append($first).css("margin-left", (-100 / 3)+"%");
          });
     });

     $("#sec_5 .slide_part .prev").click(function(){
          var $last = $("#sec_5 .slide_part ul li").last();
          console.log($last);
          $("#sec_5 .slide_part ul").stop().animate({"margin-left": 0 +"%"},500, function(){
               $("#sec_5 .slide_part ul").prepend($last).css("margin-left", (-100 / 3)+"%");
          });
     });


     //sec_6

     var $arr_4 = ["25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg"];

     $("#sec_6 ul li").each(function(index){
          $(this).css("background-image", "url(./img/"+$arr_4[index]+")");
     });

     $("#sec_6 ul li").click(function(){
          var $index = $(this).index();
          $("#dark_bg, #popup").addClass("active");
          $("#popup").css("background-image","url(./img/"+$arr_4[$index]+")");
          $("#popup .index span").text($index + 1);
     });

     $("#dark_bg, #popup .close").click(function(){
          $("#dark_bg, #popup").removeClass("active");
     })

     //팝업 후 슬라이드는 구현을 어떻게 해야할까..

     $("#popup .next").click(function(){
          var $number = Number($("#popup .index span").text());
          var $new_num = $number + 1;
          console.log($number);
          console.log($new_num);

          if($number == 8){
               $("#popup .index span").text(1);
               $("#popup").css("background-image","url(./img/"+$arr_4[0]+")");
          }else{
               $("#popup .index span").text($new_num);
               $("#popup").css("background-image","url(./img/"+$arr_4[$number]+")");
               console.log($arr_4[$number]);
          }

     });

     

     //작동이 안됨..ㅠ //이전버튼을 누르면 다음 사진으로 한번 튕기고 이전사진으로 넘어감
     $("#popup .prev").click(function(){
          var $number = Number($("#popup .index span").text());
          console.log($number);
          var $new_num = $number - 1;
          console.log($new_num);

          if($number == 1){
               $("#popup .index span").text(8);
               $("#popup").css("background-image","url(./img/"+$arr_4[7]+")");
               
          }else{
               $("#popup .index span").text($new_num);
               $("#popup").css("background-image","url(./img/"+$arr_4[$number-2]+")");
               console.log($arr_4[$number]);
          }
     });















});