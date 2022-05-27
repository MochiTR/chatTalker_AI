"use strict";
$(document).ready(function(){
    $('.container').on('click','.totop',function(e){
        $('html,body').animate({scrollTop:0},800);
    })

    $('.qa').on('click','ul .more_li .more',function(e){
        e.preventDefault();
        $(this).parent().find('ul').slideToggle(1000);
    })

      
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
      });

      
})
