$(window).on("load", function () {
  $('.page').addClass('loaded');
});

$(document).ready(function() {
	//SVG
	svg4everybody();

	//Notification
	$("#modal-a .modal-close").click(function () {
		setTimeout(function () {
			$(".notification").addClass("show");
		}, 3000);
	});
	$(".notification__close").click(function () {
		$(this).parents(".notification").removeClass("show");
	});

	//Modal
	$("a.modal-trigger").click(function () {
		var target = $(this).attr("href");

		$("body").addClass("modal-on");
		$(target).fadeIn().addClass("active");
	});
	$("button.modal-trigger").click(function () {
		var target = $(this).data("target");

		$("body").addClass("modal-on");
		$(target).fadeIn().addClass("active");
	});

	$(".modal .modal-close").click(function () {
		$("body").removeClass("modal-on");
		$(".modal.active").fadeOut().removeClass("active");
	});

	//AUDIO
	var audioSpin = document.createElement("audio");
	audioSpin.setAttribute("src", "audio/spin.mp3");
	var audioWin = document.createElement("audio");
	audioWin.setAttribute("src", "audio/win.mp3");

	//SLOT
	var clickCount = 0;
	var slotBalance = 20;
	var slotSpins = 5;

	$(".playBtn").click(function () {
		clickCount = clickCount + 1;
		slotBalance = slotBalance - 4;
		slotSpins = slotSpins - 1;
		$(this).attr("data-click", clickCount);
		
		setTimeout(function () {
			$("#slotBalance").text(slotBalance);
			$("#slotSpins").text(slotSpins);
		}, 2000);
		
		if (clickCount < 5) {
			audioSpin.play();
		}
		
		if (clickCount === 4) {
			$(".slot-wrap--count").hide();
			audioWin.play();
			audioWin.pause();
			
			setTimeout(function () {
				audioWin.play();
				confetti.start();
				$(".notification").removeClass("show");
			}, 2500);
			
			setTimeout(function () {
				$("body").addClass("modal-on");
				$("#modal-b").fadeIn().addClass("active");
			}, 4000);
		}
	});

	$(".slot--count").jSlots({
		spinner: ".playBtn",
		number: 3,
		winnerNumber: 8,
		loops: 4,
		time: 2000,
	});
	$(".slot--end").jSlots({
		spinner: ".playBtn",
		number: 3,
		winnerNumber: 8,
		loops: 4,
		time: 2000,
		endNumbers: [8, 8, 8],
	});
});

//Timer
var mins = 60;  //Set the number of minutes you need
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;

setTimeout(Decrement,1000); 

function Decrement() {
    currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;
    if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
    secs--;
    document.getElementById("countdown").innerHTML = currentMinutes + "m " + currentSeconds + "s"; //Set the element id you need the time put into.
    if(secs !== -1) setTimeout('Decrement()',1000);
}