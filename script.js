$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-time');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-time');
        $('header').removeClass('toggle');

        if($(window).scrollTop()  > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }


    });

    // smooth scrolling

    $('a[href*="#"]').on('click' ,function(e){

        e.prevenDefault();

        $('html,body').animate({

            scrollTop :$($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );

    });



});
