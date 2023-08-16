(function(){
    $(document).ready(function(){


        $('.benar_slider').owlCarousel({
            items:1,
            smartSpeed:1000,
            autoplay:true,
            autoplayTimeout:5000,
            nav:true,
            autoplayHoverPause:true,
            // loop:true
        })
        $('.related_product_slider').owlCarousel({
            loop:false,
            margin:10,
            autoplay:true,
            autoplayTimeout:6000,
            nav:true,
            autoWidth: true,
            responsive:{
                0:{
                    items:1,
                    center: true,
                    autoWidth: true
                },
                425: {
                    items:1,
                    center: true,
                    autoWidth: true
                },
                600:{
                    items:3
                },
                768: {
                    center: true,
                    autoWidth: true,
                    startPosition: 3
                },
                1000:{
                    items:5
                }
            }
        })

        let bars = $('.bars');
        let bars_tow = $('.bars_tow')
        let nav_area = $('.nav_area')

        bars.click(function(){
            bars.addClass('bars_xmark');
            nav_area.addClass('nav_area_open');
        });
        bars_tow.click(function(){
            bars.removeClass('bars_xmark');
            nav_area.removeClass('nav_area_open');
        });
    });
})(jQuery)



// add hovered class to selected list item
let img_div = document.querySelectorAll(".product_small_image .img_div");

function activeLink() {
    img_div.forEach((img_div) => {
        img_div.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

img_div.forEach((img_div) => img_div.addEventListener("mouseover", activeLink));


// SHOING IMAGE ON HOME SMALL IMAGE
function myFunction(smallImg){
    let fullImg = document.querySelector("#imageArea");
    fullImg.src = smallImg.src;
}


// QR CODE TOGGLE
let codeToggler = document.querySelector('#codeToggler');
let QRCodeBox = document.querySelector('#QRCodeBox')

codeToggler.onclick = function(){
    QRCodeBox.classList.toggle("code_show_hide");
};


// TABLE TOGGLER
let firstToggle = document.querySelector('#firstToggle');
let ScndToggle = document.querySelector('#ScndToggle')

let content_first = document.querySelector('#content_first');
let content_scnd = document.querySelector('#content_scnd')

ScndToggle.onclick = function(){
    firstToggle.classList.remove("color_changer");
    ScndToggle.classList.add("color_changer");
    content_first.style.display = "none";
    content_scnd.classList.add("show");
};

firstToggle.onclick = function(){
    ScndToggle.classList.remove("color_changer");
    firstToggle.classList.add("color_changer");
    content_first.style.display = "block";
    content_scnd.classList.remove("show");
};
