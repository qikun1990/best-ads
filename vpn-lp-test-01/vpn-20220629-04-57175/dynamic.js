document.addEventListener("DOMContentLoaded",function(){const queryString=window.location.search;const urlParams=new URLSearchParams(queryString);const os=urlParams.get('os')
if(os!==undefined&&os!==null&&os!=="")
{switch(os)
{case 'i':{document.getElementById("service").src="./appstore.png"
break;}
case 'a':{document.getElementById("service").src="./googleplay.png"
break;}
default:{document.getElementById("service").src="./googleplay.png"
break;}}}
else{document.getElementById("service").src="./googleplay.png"}});