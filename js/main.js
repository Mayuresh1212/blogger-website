$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    
    /**click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });




    $('.blog-slider').slick({
    autoplay: true,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",

    responsive:[
        {
            breakpoint: 960,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint: 576,
            settings:{
                slidesToShow:1,
            }
        }
    ]
    })


    //---------click to scroll up------------

    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })


      //---------Animation on scroll------------
      AOS.init({
          easing: 'ease',
          duration: 1000,
      });

      window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');
        nav.classList.toggle("sticky", window.scrollY > 0)
    });

});