/*

mql.addEventListener( "change", (e) => {
    if (e.matches) {

            window.onscroll = function() {stickyNav()};

            var nav = document.getElementById("navigation");
            var sticky = nav.offsetTop;

            
        }
    }
    else{
        
        $('button').on('click', function(){
            $('body').toggleClass('open');
        });
  
    }
})



const media = window.matchMedia("(min-width: 768px)");
const body = document.querySelector("body");


function stickyNav(e) {
    if (e) {
        nav.classList.add("sticky")
        (window.pageYOffset > sticky) 
    }
    else {
        nav.classList.remove("sticky")
    }
    
    
}
var nav = document.getElementById("navigation");
var stickyNav = nav.offsetTop;
stickyNav(media);
window.onscroll = function() {stickyNav()};

media.addEventListener("change", stickyNav); 


const media = window.matchMedia("(min-width: 768px)");
const body = document.querySelector("body"); */

const smallDevice = window.matchMedia("(max-width: 768px)");

smallDevice.addListener(changeMenu);
function changeMenu(e) {
    if (e.matches){

$('button').on('click', function(){
            $('body').toggleClass('open');
        });
    }
  else{
        window.onscroll = function() {stickyNav()};

        var nav = document.getElementById("navigation");
        var sticky = nav.offsetTop;
        
        function stickyNav() {
          if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
          } else {
            nav.classList.remove("sticky");
          }
        }
  }}