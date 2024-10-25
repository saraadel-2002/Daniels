/// <reference types="../@types/jquery" />

// loading screen
$(function () {
    let colorBoxes = $('.color-box');
    let sidebarInnerWidth = $('.sidebarInner').outerWidth();
    $('.sidebarInner').animate({marginLeft:`-${sidebarInnerWidth}`},500);

    // loading screen
    $('.loader').fadeOut(500 , function(){
        $('#loading').slideUp(500 , function(){
            $('body').css('overflow','auto');
            $('#loading').remove();
        });
       
    })



    // change bakground navbar
    $(window).on('scroll' , function(){
        let aboutOffset = $('#about').offset().top
        let windowScroll = $(window).scrollTop();
        if(windowScroll > aboutOffset - 500){
            $('.navbar').css('backgroundColor','#ffff');
            $('.navbar .container ul a').css('color','#595959');
            $('.logo-color').css('display','block');
            $('#keyUp').css('display','block');
        }
        else{
            $('.navbar').css('backgroundColor','transparent');
            $('.navbar .container ul a').css('color','#ffff');
            $('.logo-color').css('display','none');
            $('#keyUp').css('display','none');
        }
    });


    // smooth scroll
    $('a[href^="#"]').on('click',function(){
        let href = $(this).attr('href');
        let offset = $(href).offset().top;
        $('body,html').animate({scrollTop:offset}, 500);
    });
});