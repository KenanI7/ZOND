const menuButton = document.querySelector("#mobile-menu-btn");
const slider = document.querySelector("#slider");
const closebutton =document.querySelector("#close-button");

menuButton.addEventListener("click",  function(){
    // slider.style.transform = "translateX(0)"
    slider.classList.add("show");
})

closebutton.addEventListener("click", function(){
    slider.classList.remove("show");
})

