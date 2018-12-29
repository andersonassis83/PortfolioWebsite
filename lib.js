//menu toggle
$(".btn-menu").click(function(){
    $(".menu").show();
});

 $(".btn-close").click(function(){
    $(".menu").hide();
});

//scroll interativo
$(function(e){
    $('#buttonTop').click(function(e){
        $('html, body').animate({scrollTop:$('#grid').offset().top}, 1000);
    });

    $('.menu li:nth-child(1)').click(function(e){
        $(".menu").hide();
        $('html, body').animate({scrollTop:$('.banner').offset().top}, 1000);
    });

    $('.menu li:nth-child(2)').click(function(e){
        $(".menu").hide();
        $('html, body').animate({scrollTop:$('.box-quemsou').offset().top}, 1000);
    });

    $('.menu li:nth-child(3)').click(function(e){
        $(".menu").hide();
        $('html, body').animate({scrollTop:$('.portfolio').offset().top}, 1000);
    });

    $('.menu li:nth-child(4)').click(function(e){
        $(".menu").hide();
        $('html, body').animate({scrollTop:$('.contato').offset().top}, 1000);
    });

});

//botão contato
$(function(e){
    $('.btn-contato').click(function(e){
        $("a").attr("href", "index.html");
    });
    $('html, body').animate({scrollTop:$('.contato').offset().top}, 1000);
});

