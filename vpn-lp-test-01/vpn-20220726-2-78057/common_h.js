var pixelType="generic";$(function(){var click_outs=$("a");var query=location.search
const urlParams=new URLSearchParams(query);var os=urlParams.get('os')
var var9=urlParams.get('var9')
var externalid=urlParams.get('externalid')
var isIframe=false
var var9Origin=var9
if(var9){var9=atob(decodeURIComponent((var9+'').replace(/\+/g,'%20')));if(externalid){if(var9.includes("{externalid}")){var9=var9.replace("{externalid}",externalid)}}
query=decodeURIComponent((query+'').replace(/\+/g,'%20'));query=query.replace("&var9="+var9Origin,"").replace("?var9="+var9Origin,"")}
var clickout=""
for(var i=0;i<click_outs.length;i++){let loc=click_outs[i].href
if(loc.includes("?")){query=query.replace("?","&")}
if(click_outs[i].href==="https://ukoffzeh.com/path/out.php/")
clickout=click_outs[i].href
if(query!==null){if(os){if(os=="ios"){base_clickout="https://app.appsflyer.com/id886492891?af_prt=takoomi";query=query.replace("?","&")
click_outs[i].href=base_clickout+query;}}else{click_outs[i].href=click_outs[i].href+query;if(clickout==="https://ukoffzeh.com/path/out.php/"){clickout+=query;}}}
if(var9){click_outs[i].addEventListener("click",(event)=>{event.preventDefault();if(var9&&!isIframe){var ifrm=document.createElement("iframe");ifrm.setAttribute("src",var9);ifrm.style.width="1px";ifrm.style.height="1px";ifrm.style.position="absolute";ifrm.style.top="0";ifrm.style.left="0";ifrm.style.opacity="0";document.body.appendChild(ifrm);}
setTimeout(()=>{window.location.href=clickout},300)})}}
try{$.getScript("https://www.shield-lib.live/js/retargeting.js",function(data,textStatus,jqxhr){});}catch(error){console.log(error);}});