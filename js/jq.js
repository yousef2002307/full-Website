$(document).ready(function () {
    /* coding active class on navbar */
    $(".navbar ul li a").click(function () {
        $(this).parent("li").addClass("active");
        $(this).parent("li").siblings("li").removeClass("active");
    });


    /* coding active class on navbar */
    /* coding button effect */
        $("header button").hover(function(){
                $(this).find("span:eq(1)").animate({
                        width : "100%"
                },1000);
        },function(){
            $(this).find("span:eq(1)").animate({
                width : "0%"
        },1000);
        });
    /* coding button effect */
    /*changin class on scroll */
    $("nav a").click(function(e){
        e.preventDefault();
        $("body, html").animate({
            scrollTop : $(`${$(this).data("scroll")}`).offset().top
        },500);
            console.log($(this).data("scroll"));
    });
        $(window).scroll(function(){
                $(".sec").each(function(){
                    if($(window).scrollTop() >= $(this).offset().top - 120){
                        let x = $(this).attr("id");
                        $(` nav ul li a[data-scroll='${'#' + x}']`).parent("li").addClass("active");
                        $(` nav ul li a[data-scroll='${'#' + x}']`).parent("li").siblings("li").removeClass("active");
                    }
                });
        });


 /*changin class on scroll */

});