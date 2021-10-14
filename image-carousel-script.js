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

function addToImageAndDot(index){
    imagesArr[index].classList.add("visibleImage");
    dotsArr[index].classList.add("blackDot");
}

function removeFromImageAndDot(index){
    imagesArr[index].classList.remove("visibleImage");
    dotsArr[index].classList.remove("blackDot");
}

nextButton.addEventListener("click", function(){
    //show the next picture and change the next grey dot to black
    removeFromImageAndDot(currentlyDisplayed);
    if(currentlyDisplayed === imagesArr.length-1){
        currentlyDisplayed = 0;
        addToImageAndDot(currentlyDisplayed);
    }else{
        addToImageAndDot(currentlyDisplayed+1);
        currentlyDisplayed = findCurrentIndex();
    }
});

previousButton.addEventListener("click", function(){
    //show the previous picture and change the previous dot to black
    removeFromImageAndDot(currentlyDisplayed);
    if(currentlyDisplayed === 0){
        currentlyDisplayed = imagesArr.length-1;
        addToImageAndDot(currentlyDisplayed);
    }else{
        addToImageAndDot(currentlyDisplayed-1);
        currentlyDisplayed = findCurrentIndex();
    }
});

for(let j=0;j<dotsArr.length;j++){      //add a click event to each dot that will change the image to the corresponding one

    dotsArr[j].addEventListener("click", function(){
        removeFromImageAndDot(currentlyDisplayed);
        addToImageAndDot(j);
        currentlyDisplayed = findCurrentIndex();
    });
}




// function changeElementClass(elemSelector,elemIndex,className,howToChange){
//     let updatedElement;
//     if(elemSelector === "image"){
//         updatedElement = imagesArr[elemIndex];
//     }else if(elemSelector === "dot"){
//         updatedElement = dotsArr[elemIndex];
//     }

//     if(howToChange === "add"){

//     }
//     if(howToChange === "remove"){

//     }
// }