// header scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav bar item color change on clicking-----???
// $(document).ready(function () {
  
//     $('ul.navbar-nav > li')
//             .click(function (e) {
//         $('ul.navbar-nav > li')
//             .removeClass('active');
//         $(this).addClass('active');
//     });
// });


// nav hide 
let navBar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})



// owl carousel 
$(document).ready(function() {
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});