"use strict";
$(document).ready(function(){
    $('.container').on('click','.totop',function(e){
        $('html,body').animate({scrollTop:0},800);
    })
})