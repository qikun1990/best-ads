
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
	var title = params.get('title')
	var body = params.get('body')
	var subTitle = params.get('subtitle')
	var btntext = params.get('btn')
	var step1 = params.get('step1')
	var step2 = params.get('step2')
	var new_query=""
	if(title && document.getElementById("title"))
	document.getElementById("title").innerHTML=title
	if(body && document.getElementById("body"))
	document.getElementById("body").innerHTML=body
    if(subTitle && document.getElementById("subtitle"))
	document.getElementById("subtitle").innerHTML=subTitle
    if(btntext && document.getElementById("btn-text"))
	document.getElementById("btn-text").innerHTML=btntext
    if(step1 && document.getElementById("step1"))
	document.getElementById("step1").innerHTML=step1
    if(step2 && document.getElementById("step2"))
	document.getElementById("step2").innerHTML=step2
	if(body || title ||subTitle || btntext|| step1 || step2)
    {
		var temp_query=query.split("&")
		temp_query.forEach(q=>{
			q=q.toLowerCase()
			if(!q.includes("body")&&!q.includes("title")&&!q.includes("subtitle")&&!q.includes("btn")&&!q.includes("step1") && !q.includes("step2"))
			{
				 new_query+=q+"&"
			}

		})
		if(new_query[new_query.length-1]==='&')
		new_query=new_query.slice(0,new_query.length-1)
	}
	if(appid)
	{
		if(new_query !== "")
		query=new_query
	var search_r =query.replace("?","").split("&")
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