$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 0){
    $("header").addClass('scrolled');
  } else{
    $("header").removeClass('scrolled');
  }
})

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
  
