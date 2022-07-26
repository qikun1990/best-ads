
document.addEventListener("DOMContentLoaded",async function () {

	var links = document.getElementsByTagName("a");
	var params = (new URL(document.location)).searchParams;
	var query=window.location.search
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src","https://impressions.onelink.me/v6wJ/c0e50e6c"+query);
	ifrm.style.width = "1px";
	ifrm.style.height = "1px";
	ifrm.style.display = "none"
	ifrm.style.position ="fixed"
	document.body.appendChild(ifrm);
	var appid = params.get('appid');
	if(appid)
	{
	var search_r =window.location.search.replace("?","").split("&")
	var search=""
	search_r.forEach((q,index)=>{
		   if(q!=="appid="+appid)
		   {
			
				search+=q+"&"
		   }
	   })
	   if(search[search.length-1]==="&")
	   {
		search=search.slice(0,search.length-1)
	   }
	
	for (var i = 0; i < links.length; i++) {
		
		let link = links[i].href
		if (search !== null) {
			if (link.includes("?")) {
				search = search.replace("?", "&")
			}
			search=search.replace("appid="+appid,"")
			links[i].href=  links[i].href+appid+"?"+search;
		}
	}
}
});