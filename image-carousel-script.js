//not going to be a true image slider
//change display from "none" to "block" in order to reveal the image needed
//the image that has the class name 'visibleImage' will be the one that is shown
//--------------------------------------Next Button------------------------------------------------
//clicking this button will reveal the next image in the array of images. If the last image is the one already shown, the next image will be the first

let imagesArr = document.querySelectorAll(".imageSlide");   //an array of all the img divs
let dotsArr = document.querySelectorAll(".dot");            //array of all the corresponding dot links
let nextButton = document.querySelector(".next");           //next button on page
let previousButton = document.querySelector(".previous");    //previous button on page
let currentlyDisplayed = findCurrentIndex();

function findCurrentIndex(){
    //retun index of image that is currently being displayed
    for(let i=0;i<imagesArr.length;i++){
        if(imagesArr[i].classList[1]==="visibleImage"){
            return i;
        }
    }
}

nextButton.addEventListener("click", function(){
    //show the next picture
    if(currentlyDisplayed === imagesArr.length-1){
        imagesArr[currentlyDisplayed].classList.remove("visibleImage");
            dotsArr[currentlyDisplayed].classList.remove("blackDot");
        currentlyDisplayed = 0;
        imagesArr[currentlyDisplayed].classList.add("visibleImage");
            dotsArr[currentlyDisplayed].classList.add("blackDot");
    }else{
        imagesArr[currentlyDisplayed].classList.remove("visibleImage");
            dotsArr[currentlyDisplayed].classList.remove("blackDot");
        imagesArr[currentlyDisplayed+1].classList.add("visibleImage");
            dotsArr[currentlyDisplayed+1].classList.add("blackDot");
        currentlyDisplayed = findCurrentIndex();
    }
    //change the corresponding dot to black
    
});

previousButton.addEventListener("click", function(){
    //show the previous picture
    if(currentlyDisplayed === 0){
        imagesArr[currentlyDisplayed].classList.remove("visibleImage");
            dotsArr[currentlyDisplayed].classList.remove("blackDot");
        currentlyDisplayed = imagesArr.length-1;
        imagesArr[currentlyDisplayed].classList.add("visibleImage");
            dotsArr[currentlyDisplayed].classList.add("blackDot");
    }else{
        imagesArr[currentlyDisplayed].classList.remove("visibleImage");
            dotsArr[currentlyDisplayed].classList.remove("blackDot");
        imagesArr[currentlyDisplayed-1].classList.add("visibleImage");
            dotsArr[currentlyDisplayed-1].classList.add("blackDot");
        currentlyDisplayed = findCurrentIndex();
    }
    //change the corresponding dot to black
});