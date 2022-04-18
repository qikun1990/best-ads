var lang=document.getElementById("lang").innerHTML;
var cong=document.getElementById("cong").innerHTML

function speak(c) {
	var b = new SpeechSynthesisUtterance,
		a = speechSynthesis.getVoices();
	b.voice = a[6], b.voiceURI = "native", b.volume = 1, b.rate = 1, b.pitch = 1, b.text = c, b.lang = lang, speechSynthesis.speak(b)
  }
  
  speak(cong)