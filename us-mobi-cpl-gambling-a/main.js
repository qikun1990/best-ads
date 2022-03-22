function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.*?)(&|$)').exec(location.search) || [, null])[1] || ''
    );
}

var tk = getURLParameter('tk');// pub.min.js use it too
if(!tk){
    tk = 'www.news123.fun';
}
var trackDomain = "https://"+tk;
var bonus = getURLParameter('bonus');
if(!bonus){
    bonus = '25 Free Spins + 200% Bonus';
}
$(document).ready(function() {
    $(".bonus").html(bonus);
});

function stepOne() {
	spinsCount();
	document.getElementById("spin-step-1").className += " none";
	var spinnerReel = document.querySelectorAll(".spinners .reelcase img");
	if (typeof spinnerReel === "object") {
		for (var i = 0; i < spinnerReel.length; i++) {
			var className = "spin" + (i + 1);
			if (spinnerReel[i].classList)
				spinnerReel[i].classList.add(className);
			else
				spinnerReel[i].className += ' ' + className;
		}
	}
	setTimeout(function () {
		document.getElementById("spin-step-2").className = "spin-popup-dialog";
	}, 5500);
}

function stepTwo() {
	spinsCount();
	document.getElementById("spin-step-2").className += " none";
	var spinnerReel = document.querySelectorAll(".spinners .reelcase img");
	if (typeof spinnerReel === "object") {
		/* prepare for next SPIN moving */
		for (var i = 0; i < spinnerReel.length; i++) {
			var className = "spin" + (i + 1);
			if (spinnerReel[i].classList)
				spinnerReel[i].classList.remove(className);
			else
				spinnerReel[i].className = spinnerReel[i].className.replace(new RegExp('(^|\\b)' + className.split(
					' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
		/* start SPIN moving */
		for (var i = 0; i < spinnerReel.length; i++) {
			var className = "spin" + (i + 4);
			if (spinnerReel[i].classList)
				spinnerReel[i].classList.add(className);
			else
				spinnerReel[i].className += ' ' + className;
		}
		var spinTimer = setTimeout(function () {
			/* blink effect */
			var blinkCounter = 0;
			var overlay = document.querySelectorAll(".overlay")[0];
			var overlay2 = document.querySelectorAll(".overlay2")[0];
			if (overlay2.classList)
				overlay2.classList.add("red");
			else
				overlay2.className += " " + "red";
			var blinkTimer = setInterval(function () {
				blinkCounter++;
				if (blinkCounter % 2 == 0) {
					overlay.style.display = 'none';
					overlay2.style.display = 'block';
				} else {
					overlay.style.display = 'block';
					overlay2.style.display = 'none';
				}
				if (blinkCounter > 20) {
					clearInterval(blinkTimer);
				}
			}, 100);
		}, 5000);
	}
	setTimeout(function () {
		document.getElementById("spin-step-3").className = "spin-popup-dialog";
	}, 7000);
}



function stepThree() {
	window.onbeforeunload = null;
	document.location.href = trackDomain+'/click.php?lp=1';
}

function spinsCount() {
	var spins = document.getElementById("spinsLeft");
	if (typeof spins === "object") {
		var temp = parseInt(spins.innerHTML);
		if (!isNaN(temp) && temp > 0) {
			spins.innerHTML = temp - 1;
		}
	}
}

window.onload = function () {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()
	var marray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September",
		"October", "November", "December");
	var yyyy = today.getFullYear();
	today = dd + " " + marray[mm] + " " + yyyy;
	e = document.getElementById("todaysDate");
	e.innerHTML = today;
}