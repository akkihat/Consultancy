$(document).ready(function() {
    var owl = $('.myslider');
    owl.owlCarousel({
        items:1,
        loop:true,
        
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    
    
    $('#scroll').click(function() {
        console.log("Hello");
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $(".header-section .mynav .section-upper").addClass("scrolldown");
            $(".header-section .mynav .navbar .mynav").addClass("bottomscroll");
            


        } else {
            $(".header-section .mynav .section-upper").removeClass("scrolldown");
            $(".header-section .mynav .navbar .mynav").removeClass("bottomscroll");
        }
    });

    $('.section-projects #owl-carousel1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
    
    var targetfisrt=document.querySelector(".section-projects .container .row .project #owl-carousel1 .owl-nav .owl-prev");
    var targetfisrtchild=document.querySelector(".section-projects .container .row .project #owl-carousel1 .owl-nav .owl-prev >span");
    targetfisrtchild.style.display="inline-block";
    targetfisrt.classList.add("prevbtn");
    var targetSecond=document.querySelector(".section-projects .container .row .project #owl-carousel1 .owl-nav .owl-next");
    var targetSecondchild=document.querySelector(".section-projects .container .row .project #owl-carousel1 .owl-nav .owl-next >span");
    targetSecondchild.style.display="inline-block";
    targetSecond.classList.add("nexbtn");
    document.querySelector(".section-projects .container .row .project #owl-carousel1 .owl-nav .nexbtn >span").innerHTML='<i class="fas fa-angle-right"></i>';
    var nexticon = document.querySelector(".section-projects .container .row .project #owl-carousel1 .owl-nav .nexbtn >span").innerHTML;
    console.log(nexticon);
    document.querySelector(".section-projects .container .row .project #owl-carousel1 .owl-nav .prevbtn >span").innerHTML='<i class="fas fa-angle-left"></i>';
    var previcon = document.querySelector(".section-projects .container .row .project  #owl-carousel1 .owl-nav .prevbtn >span").innerHTML;
    console.log(previcon);
    document.querySelector(".section-projects .container .row .project #owl-carousel1 .owl-dots").remove();

    //for removing margin right;
    var allitems = document.querySelectorAll(".section-projects .container .row .project #owl-carousel1 .owl-stage-outer .owl-stage .owl-item");
    for(let i=0;i<allitems.length;i++){
        allitems[i].style.margin = "0px";
        allitems[i].style.width = "230px";
    }
    

        var owl = $('.news-section .container .row .news #owl-carousel2');
        owl.owlCarousel({
            items:2,
            loop:false,
            
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        
    });
    var owl = $('.clients-section .container .row .clients #owl-carousel3');
        owl.owlCarousel({
            items:5,
            loop:false,
            
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        
    });

});
