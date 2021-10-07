let menuButton = document.querySelector(".menuButton");
let menuContainer = document.querySelector(".menuContainer");
let menuItemContainer = document.querySelector(".menuItemContainer");

//--------------------------click to reveal, click to hide------------
function toggleHideReveal(){
    if(menuItemContainer.style.display === "none"){
        menuItemContainer.style.display = "block";
    }else{
        menuItemContainer.style.display = "none";
    }
}

// menuButton.addEventListener("click", toggleHideReveal);

//------------------------hover over to reveal, hover off to hide------
function reveal(){
    menuItemContainer.style.display = "block";
}
function hide(){
    menuItemContainer.style.display = "none";
}

menuContainer.addEventListener("mouseover", reveal);
menuContainer.addEventListener("mouseout", hide);



