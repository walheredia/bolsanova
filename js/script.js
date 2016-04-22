$(document).ready(function() {

    if( location.href == "file:///D:/html_templates/bolsanova/index.html" || location.href == "http://bolsanova.com.ar" || location.href == "http://www.bolsanova.com.ar/")
    {
        var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        
        $('#logo').addClass('animated bounceInRight').one(animationend,
            function() {
                $(this).removeClass('animated bounceInRight');
            })
        $('#nuevo').addClass('animated bounceInUp').one(animationend,
            function() {
                $(this).removeClass('animated bounceInUp');
            })
        $('#carrito1').addClass('delay1 animated bounceInDown').one(animationend,
            function() {
                $(this).removeClass('delay1 animated bounceInDown');
            })
        $('#carrito2').addClass('delay2 animated bounceInDown').one(animationend,
            function() {
                $(this).removeClass('delay2 animated bounceInDown');
            })
        $('#carrito3').addClass('delay3 animated bounceInDown').one(animationend,
            function() {
                $(this).removeClass('delay3 animated bounceInDown');
            })
        $('#carrito4').addClass('delay4 animated bounceInDown').one(animationend,
            function() {
                $(this).removeClass('delay4 animated bounceInDown');
            })
        $('#form_name').addClass('animated bounceInUp').one(animationend,
            function() {
                $(this).removeClass('animated bounceInUp');
            })
        $('#form_email').addClass('animated bounceInDown').one(animationend,
            function() {
                $(this).removeClass('animated bounceInDown');
            })
        $('#form_mensaje').addClass('animated bounceInDown').one(animationend,
            function() {
                $(this).removeClass('animated bounceInDown');
            })  
    }
    

});

$(document).ready(function() {
    animationHover('#carrito1', 'tada');
    animationHover('#carrito2', 'tada');
    animationHover('#carrito3', 'tada');
    animationHover('#carrito4', 'tada');
    animationHover('#logo', 'rubberBand');
    animationHover('#fb', 'pulse');
    animationHover('#tw', 'pulse');
    animationHover('#marca', 'pulse');
    animationHover('#ind', 'shake');
    animationHover('#ini', 'shake');
    animationHover('#que', 'shake');
    animationHover('#como', 'shake');
    animationHover('#prod', 'shake');
    animationHover('#cont', 'shake');
    animationHover('#comp', 'shake');
    animationHover('#bolsan', 'swing');
    animationHover('#n_inicio', 'pulse');
    animationHover('#n_que', 'pulse');
    animationHover('#n_como', 'pulse');
    animationHover('#n_prod', 'pulse');
    animationHover('#n_cont', 'pulse');
    animationHover('#tx1', 'pulse');
    animationHover('#tx2', 'pulse');
    animationHover('#tx3', 'pulse');
    animationHover('#tx4', 'pulse');
    animationHover('#form_name', 'pulse');
    animationHover('#form_email', 'pulse');
    animationHover('#form_mensaje', 'pulse');
   

    function animationHover (element, animation){
        element = $(element);
        element.hover(
            function() {
                element.addClass('animated ' + animation);
            },
            function(){
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, 600);
            });
    }

});