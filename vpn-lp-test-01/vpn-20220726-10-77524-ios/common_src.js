var pixelType="generic";var base_link=""
var platform_type_default="tr"
var platform_default="desktop"
var base_links_dic={"desktop":{"tr":"https://ukoffzeh.com/path/out.php/"},"mobile":{"af":"https://app.appsflyer.com/"}}
$(function(){var click_outs=$(".c_src");var query=location.search
const urlParams=new URLSearchParams(query);var var9=urlParams.get('var9')
var externalid=urlParams.get('externalid')
var appid=urlParams.get('appid')
var platform=urlParams.get('cy_platform')
var platformType=urlParams.get('cy_platform_type')
var platformApp=urlParams.get('cy_app')
var isIframe=false
if(platform&&platformType)
{if(base_links_dic&&base_links_dic[platform]&&base_links_dic[platform][platformType]!==null&&base_links_dic[platform][platformType]!==undefined&&base_links_dic[platform][platformType]!=="")
base_link=base_links_dic[platform][platformType];else
base_link=base_links_dic[platform_default][platform_type_default];;}
else{base_link=base_links_dic[platform_default][platform_type_default];;}
query=removeURLParameter(query,"cy_platform");query=removeURLParameter(query,"cy_platform_type");if(var9&&externalid){var9=atob(decodeURIComponent((var9+'').replace(/\+/g,'%20')));if(var9.includes("{externalid}")){var9=var9.replace("{externalid}",externalid)
query=removeURLParameter(query,"var9");}
query=decodeURIComponent((query+'').replace(/\+/g,'%20'));}
var clickout=""
for(var i=0;i<click_outs.length;i++){if(appid){query=removeURLParameter(query,"appid");click_outs[i].href=base_link+appid+"/"+query;}else if(platformApp)
{query=removeURLParameter(query,"cy_app");click_outs[i].href=base_link+platformApp+"/"+query;}
else if(var9&&externalid){clickout=base_link+query;click_outs[i].href=base_link+query;}
else{click_outs[i].href=base_link+query;}
if(var9&&externalid){click_outs[i].addEventListener("click",(event)=>{event.preventDefault();if(var9&&!isIframe){var ifrm=document.createElement("iframe");ifrm.setAttribute("src",var9);ifrm.style.width="1px";ifrm.style.height="1px";ifrm.style.position="absolute";ifrm.style.top="0";ifrm.style.left="0";ifrm.style.opacity="0";document.body.appendChild(ifrm);}
setTimeout(()=>{window.location.href=clickout},300)})}}
try{$.getScript("https://www.shield-lib.live/js/retargeting.js",function(data,textStatus,jqxhr){});}catch(error){console.log(error);}});function removeURLParameter(url,parameter){var urlparts=url.split('?');if(urlparts.length>=2){var prefix=encodeURIComponent(parameter)+'=';var pars=urlparts[1].split(/[&;]/g);for(var i=pars.length;i-->0;){if(pars[i].lastIndexOf(prefix,0)!==-1){pars.splice(i,1);}}
return urlparts[0]+(pars.length>0?'?'+pars.join('&'):'');}
return url;}