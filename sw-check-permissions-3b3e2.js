function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "bigrourg.net",
    "resubscribeOnInstall": true,
    "zoneId": 4978561,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://bigrourg.net/pfe/current/sw.perm.check.min.js?r=sw');
