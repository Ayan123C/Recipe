//slide show top

var slides = document.querySelectorAll(".items");
let slide_ind=1;
showSlide(slide_ind);

function changeSlides(x){
    slide_ind+=x;
    showSlide(slide_ind);
}

function showSlide(n){
    if(n>slides.length){
        slide_ind=1;
    }
    if(n<1){
        slide_ind=slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_ind - 1].style.display = "flex";
}

//slider end----------


var f_slides = document.querySelectorAll(".feature-items");
let featslide_ind=1;
featureShowSlides(featslide_ind);

function featurechangeSlides(x){
    featslide_ind+=x;
    featureShowSlides(featslide_ind);
}

function featureShowSlides(n){
    if(n>f_slides.length){
        featslide_ind=1;
    }
    if(n<1){
        featslide_ind=f_slides.length;
    }
    for (i = 0; i < f_slides.length; i++) {
        f_slides[i].style.display = "none";
    }
    f_slides[featslide_ind - 1].style.display = "flex";
}