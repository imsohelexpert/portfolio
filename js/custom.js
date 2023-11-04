$(document).ready(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $("#header").addClass("sticky");
            $("nav ul").addClass("sticky")
        }
        else{
            $("nav ul").removeClass("sticky")
            $("#header").removeClass("sticky");
        }
    });
    $(".toggle-btn").click(function(){
        $(this).children().toggleClass("fa-times");
        $("nav ul").toggleClass("active")
    });
    $(".nav-menu li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("nav ul").removeClass("active");
        $(".toggle-btn").children().removeClass("fa-times")
    });
});