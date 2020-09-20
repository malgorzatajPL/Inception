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


var vid = document.getElementById("CameraVideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 

function show() {
    var x = document.getElementById("hidden");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
        x.style.display = "block";
      }
  }

  var goBack = document.getElementById('btnBack');

 goBack.addEventListener('click', function(event) {
    window.location.href='index.html';
  });

