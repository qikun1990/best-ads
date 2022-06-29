document.addEventListener("DOMContentLoaded",function(){var urlParams=new URLSearchParams(window.location.search);var ip=urlParams.getAll('ip')
if(ip.length===0)
{ip="213.194.69.240"}
document.getElementById("variable-ip-address").innerHTML=ip});