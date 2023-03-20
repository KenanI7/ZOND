const BackToTop=document.querySelector("#back-to-top");
window.onscroll = function() {scrollFunction()};


BackToTop.addEventListener("click",  function(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;  
})  

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      BackToTop.style.display = "flex";
    } else {
      BackToTop.style.display = "none";
    }
  }