var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var gift = document.getElementById("gift")
var iphone  = document.getElementById("iphone")
var apple = document.getElementById("apple")

var image1 = document.getElementById('image1')
var image2 = document.getElementById('image2')
var image3 = document.getElementById('image3')

startConfetti();


function nextPage1(){
  document.getElementById("modal1").style.display="block";
  setTimeout(function(){
      document.getElementById("modal1").style.display="none";
      document.getElementById("copy").style.display="none";
      document.getElementById("prizes").style.display="none";
      document.getElementById("headline").style.display="none";
      document.getElementById("prize_confirmation1").style.display="block";
      window.scrollTo(0,0)
  },4000)
}



function move(){
    stopConfetti();
    image1.src = document.getElementById("prize_confirmation_prize_image").src
    image2.src = 'static/acard.jpg'
    image3.src = 'static/watch1.jpg'
  
    img1.style.opacity = "0";
    fadeIn(gift, 1e3);
    img2.style.opacity = "0";
    fadeIn(iphone, 1e3);
    img3.style.opacity = "0";
    fadeIn(apple, 1e3);

    document.getElementById("Choose1").innerHTML=document.getElementById("win").innerHTML;
    document.getElementById("Choose2").style.pointerEvents = "none";
    document.getElementById("Choose2").style.backgroundColor = "grey";
    document.getElementById("Choose3").style.pointerEvents = "none";
    document.getElementById("Choose3").style.backgroundColor = "grey";

  
    nextPage1()
    
  }
  
  function move2(){
  
    stopConfetti();
  
  
    image1.src = 'static/acard.jpg'
    image2.src = document.getElementById("prize_confirmation_prize_image").src
    image3.src = 'static/watch1.jpg'
  
  
    img1.style.opacity = "0";
    fadeIn(gift, 1e3);
    img2.style.opacity = "0";
    fadeIn(iphone, 1e3);
    img3.style.opacity = "0";
    fadeIn(apple, 1e3);
  
    document.getElementById("Choose1").style.pointerEvents = "none";
    document.getElementById("Choose1").style.backgroundColor = "grey";
    document.getElementById("Choose2").innerHTML=document.getElementById("win").innerHTML;
    document.getElementById("Choose3").style.pointerEvents = "none";
    document.getElementById("Choose3").style.backgroundColor = "grey";
  
    nextPage1()
  
  }
  
  function move3(){
  
    stopConfetti();
  
  
    image1.src = 'static/acard.jpg'
    image2.src = 'static/watch1.jpg'
    image3.src = document.getElementById("prize_confirmation_prize_image").src
  
    img1.style.opacity = "0";
    fadeIn(gift, 1e3);
    img2.style.opacity = "0";
    fadeIn(iphone, 1e3);
    img3.style.opacity = "0";
    fadeIn(apple, 1e3);
  
    document.getElementById("Choose1").style.pointerEvents = "none";
    document.getElementById("Choose1").style.backgroundColor = "grey";
    document.getElementById("Choose2").style.pointerEvents = "none";
    document.getElementById("Choose2").style.backgroundColor = "grey";
    document.getElementById("Choose3").innerHTML=document.getElementById("win").innerHTML;
  
    nextPage1()
  }

  function modal3(){
    document.getElementById("modal1").style.display="none";
    document.getElementById("modal3").style.display="block";
    document.querySelector("#modal3 #prize_confirmation").style.display="block";
  
    var timerObj = document.getElementById("timerr");
  
    function startTimer(t) {
      var e, n, r = t,
        a = setInterval(function () {
          e = parseInt(r / 60, 10), n = parseInt(r % 60, 10), n = 10 > n ? "0" + n : n, timerObj.innerHTML = (e + ":" + n), --r < 0 && (clearInterval(a))
        }, 1e3)
    }
    startTimer((4 * 60) + 59);
  }

function modal2(){
  document.getElementById("modal1").style.display="none";
  document.getElementById("modal2").style.display="block";
}

// FADE IN
function fadeIn(el, time) {
  el.style.opacity = 0;
  el.style.display = "block";

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}
setTimeout(stopConfetti,5000)

