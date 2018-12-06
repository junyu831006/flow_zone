var slideIndex = 0;
var dots = document.getElementsByClassName("dot");
showSlides();
for (var i=0; i< dots.length; i++){

    dots[i].addEventListener('click',currentDiv);
}//

function currentDiv(e) {
    clearTimeout(timerId);
    var dots = document.getElementsByClassName("dot");
    //e.target.id-->dot1
    //var index =e.id.charAt(3)
    //dots[index]
    if(e == dots[1]){
        slideIndex=1;
    }else if(e == dots[2]){
        slideIndex=2;
    }else{
        slideIndex=0;
    }
    timerId=setTimeout(showSlides, 3500); // Change image every 2 seconds

    showSlides(slideIndex);
  }//show 第n張照片
//   console.log(slideIndex);
function showSlides(n) {
    // e.stopPropagation();
    var i;
    var slides = document.getElementsByClassName("mySlides");//img
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }//slides.length=3 
    //先把圖片都關起來
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }//dots.length=3 
    //active是填滿圓點的顏色
    //replace是把圓點顏色取消
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    var timerId=setTimeout(showSlides, 3500); // Change image every 2 seconds
}

function init(){
    
}