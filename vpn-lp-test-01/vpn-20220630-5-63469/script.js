

!function (t) {
    "use strict";

    function e() {
        return o.TYPE_DEFAULT = m, o.TYPE_CONFIRM = d, o.alert = n, o.confirm = i, o["break"] = l, a(), o
    }

    function n() {
        var t = r.apply(null, arguments);
        return t.present(), t
    }

    function i() {
        var t = [].splice.call(arguments, 0, 6);
        t.length < 5 && (t[4] = "Cancel");
        var e = r.apply(null, t);
        return e.setType(d), e.present(), e
    }

    function r(t, e) {
        var n = new o, i = [].splice.call(arguments, 2);
        for (n.setTitle(t), n.setMessage(e); i.length;) n.addAction(i.shift(), i.shift());
        return n
    }

    function l() {
        throw null
    }

    function a() {
        var t = document.createElement("style");
        t.innerHTML = "#Alert7,#Alert7::after,#Alert7 .alert7-container {vertical-align: middle;}#Alert7 {position: fixed;top: 0;bottom: 0;left: 0;right: 0;z-index: 1001;background-color: rgba(0, 0, 0, 0.3);text-align: center;font-size: 16px;-webkit-user-select: none;   -moz-user-select: none;    -ms-user-select: none;        user-select: none;}#Alert7.alert7-confirm {}#Alert7::after,#Alert7 .alert7-container {display: inline-block;}#Alert7::after {height: 100%;content: '';}#Alert7 .alert7-container {max-width: 240px;width: 80%;box-sizing: border-box;background-color: rgba(255, 255, 255, 0.9);border-radius: 18px;}#Alert7 .alert7-title,#Alert7 .alert7-message {padding-left: 20px;padding-right: 20px;line-height:1.3em;}#Alert7 .alert7-title {padding-top: 20px;font-size: 1.1em;font-weight: 500;line-height: 2em;}#Alert7 .alert7-message {padding-bottom: 14px;font-size: 0.8em;}#Alert7 .alert7-actions {}#Alert7 .alert7-actions button.alert7-action-item {padding-top: 12px;padding-bottom: 12px;width: 100%;background: 0;border: 0;border-top: 1px solid #E7E7E7;outline: 0;color: #59F;}#Alert7 .alert7-actions button.alert7-action-item:last-of-type {border-bottom-left-radius: 18px;border-bottom-right-radius: 18px;}#Alert7 .alert7-actions button.alert7-action-item:active {background-color: #E7E7E7;}#Alert7.alert7-confirm .alert7-actions button.alert7-action-item {float: right;width: 50%;}#Alert7.alert7-confirm .alert7-actions button.alert7-action-item:first-of-type {border-left: 1px solid #E7E7E7;border-bottom-right-radius: 18px;}#Alert7.alert7-confirm .alert7-actions button.alert7-action-item:first-of-type:last-of-type {width: 100%;}#Alert7.alert7-confirm .alert7-actions button.alert7-action-item:nth-of-type(2) {border-bottom-left-radius: 18px;border-bottom-right-radius: 0;}#Alert7.alert7-confirm .alert7-actions button.alert7-action-item:nth-of-type(n+3) {display: none;}", document.getElementsByTagName("head")[0].appendChild(t)
    }

    function o() {
        this.title = "", this.message = "", this.type = m, this.actions = [], s(this)
    }

    function s(t) {
        t.instanceElement = document.createElement("div"), t.instanceElement.id = "Alert7", t.alertElement = document.createElement("div"), t.alertElement.className = "alert7-container", t.instanceElement.appendChild(t.alertElement), t.titleElement = document.createElement("div"), t.titleElement.className = "alert7-title", t.alertElement.appendChild(t.titleElement), t.messageElement = document.createElement("div"), t.messageElement.className = "alert7-message", t.alertElement.appendChild(t.messageElement), t.actionsElement = document.createElement("div"), t.actionsElement.className = "alert7-actions", t.alertElement.appendChild(t.actionsElement)
    }

    function c(t) {
        function e(e) {
            return function () {
                try {
                    e && e(), t.dismiss()
                } catch (n) {
                }
            }
        }

        var n, i, r = t.actions, l = r.length;
        for (t.actionsElement.innerHTML = ""; l--;) i = r[l], n = document.createElement("button"), n.className = "alert7-action-item", n.innerText = n.textContent = i.text || "OK", n.addEventListener("click", e(i.handler), !1), t.actionsElement.insertBefore(n, t.actionsElement.firstChild)
    }

    var m = 0, d = 1;
    !function () {
        t = window.Alert7 = t || e()
    }(), o.prototype.setTitle = function (t) {
        this.title = t || ""
    }, o.prototype.setMessage = function (t) {
        this.message = t || ""
    }, o.prototype.setType = function (t) {
        this.type = t || m
    }, o.prototype.addAction = function (t, e) {
        this.actions.push({ text: t, handler: e })
    }, o.prototype.present = function () {
        switch (this.titleElement.innerText = this.titleElement.textContent = this.title, this.messageElement.innerText = this.messageElement.textContent = this.message, this.type) {
            case d:
                this.instanceElement.classList.add("alert7-confirm")
        }
        this.actions.length || this.actions.push({}), c(this), document.querySelector("body").appendChild(this.instanceElement)
    }, o.prototype.dismiss = function () {
        this.instanceElement.parentNode && this.instanceElement.parentNode.removeChild(this.instanceElement)
    }
}(window.Alert7);


//Translator
window.addEventListener('load', function () {
    if (window.location.search.indexOf("ic=1") !== -1)
        document.getElementById("ic").setAttribute("src", "assets/ic1.jpeg");
    else if (window.location.search.indexOf("ic=2") !== -1)
        document.getElementById("ic").setAttribute("src", "assets/ic2.jpeg");
    else if (window.location.search.indexOf("ic=3") !== -1)
        document.getElementById("ic").setAttribute("src", "assets/ic3.jpeg");


    var texts = {
        //en - English
        en: {
            title: 'Important Update!',
            text: [
                'IOS VPN profile', 'The internet connection is perhaps not secure.',
                'If you do not install the appropriate VPN application now, you risk losing all your photos, contacts and other personal files in the future.',
                'Follow the simple steps below to protect all your data ...', 'Detailed',
                'Step 1:', 'Click the button below to install the VPN.',
                'Step 2:', 'Use a VPN to get complete data protection 24/7',
                'Step 3:', 'Use a VPN when you connect to free public wi-fi.',
                'Download and install'],
            popup: ['Continue to AppStore', 'OK']
        },
        //fr - France
        fr: {
            title: 'Important Update!',
            text: [
                'Perfil IOS VPN', 'La conexión a internet tal vez no sea segura.',
                'Si no instala la aplicación VPN adecuada ahora, corre el riesgo de perder todas sus fotos, contactos y otros archivos personales en el futuro.',
                'Siga los sencillos pasos a continuación para proteger todos sus datos ...', 'Detallado',
                'Paso 1:', 'Haga clic en el botón de abajo para instalar la VPN.',
                'Paso 2:', 'Use una VPN para obtener protección de datos completa 24/7',
                'Paso 3:', 'Use una VPN cuando se conecte a una red WI-FI pública gratuita.',
                'Descargar e instalar'],
            popup: ['continuer sur AppStore', 'OK']
        },
        //pt - Portuguese
        pt: {
            title: 'Atualização importante!!',
            text: [
                'Perfil VPN IOS', 'A conexão à Internet pode não ser confiável',
                'Se você não instalar um aplicativo VPN adequado, existe o risco de perder todas as fotos, contatos e outros dados pessoais.',
                'Siga as instruções simples abaixo para proteger seus dados...', 'Mais detalhes',
                'Etapa 1:', 'Clique no botão abaixo para instalar',
                'Etapa 2:', ' Inicie o aplicativo VPN para proteção total de dados 24/7',
                'Etapa 3:', 'Use uma VPN ao conectar-se a redes wifi públicas',
                'Baixe e instale'],
            popup: ['continue na AppStore', 'Está bem']
        },
        //es - Spanish
        es: {
            title: '¡Actualización importante!!',
            text: [
                'Perfil IOS VPN', 'La conexión a internet tal vez no sea segura.',
                'Si no instala la aplicación VPN adecuada ahora, corre el riesgo de perder todas sus fotos, contactos y otros archivos personales en el futuro.',
                'Siga los sencillos pasos a continuación para proteger todos sus datos ...', 'Detallado',
                'Paso 1:', 'Haga clic en el botón de abajo para instalar la VPN.',
                'Paso 2:', 'Use una VPN para obtener protección de datos completa 24/7',
                'Paso 3:', 'Use una VPN cuando se conecte a una red WI-FI pública gratuita.',
                'Descargar e instalar'],
            popup: ['continuar a AppStore', 'OK']
        },
        //it - Italian
        it: {
            title: 'Aggiornamento importante!',
            text: [
                'Profilo VPN IOS', 'La connessione Internet forse non è sicura.',
                'Se non installi ora l\'applicazione VPN appropriata, rischi di perdere tutte le foto, i contatti e altri file personali in futuro.',
                'Segui i semplici passaggi seguenti per proteggere tutti i tuoi dati ...', 'Dettagliato',
                'Passo 1:', 'Fai clic sul pulsante in basso per installare la VPN.',
                'Passo 2:', 'Utilizzare una VPN per ottenere una protezione completa dei dati 24/7',
                'Passo 3:', 'Utilizzare una VPN quando ci si connette al WI-FI pubblico gratuito.',
                'Scarica e installa'],
            popup: ['continua su AppStore', 'OK']
        },
        //de - German
        de: {
            title: '"wichtiges update!"!',
            text: [
                'IOS VPN Profil', 'Internetverbindung ist unsicher.',
                'Wenn man keine geeignete VPN-Anwendung installieren, besteht die Gefahr alle Fotos, Kontakte und sonstigen persönlichen Daten verlieren.',
                'Folgen Sie die einfachen Anweisungen zum Datenschutz ...', 'Weitere Details',
                'Schritte 1:', 'Klicken Sie zum Installieren auf die Taste unten.',
                'Schritte 2:', 'Starten Sie die VPN-Anwendung für vollständigen Datenschutz 24/7.',
                'Schritte 3:', 'Verwenden Sie die VPN-Anwendung für eine Verbindung zu öffentlichen Netzwerken.',
                'Herunterladen und installieren'],
            popup: ['Weiter zum AppStore', 'in Ordnung']
        },
        //ja - Japanese
        ja: {
            title: '重要な更新!',
            text: [
                'IOS VPN profile', 'インターネット接続はおそらく安全ではありません。',
                '適切なVPNアプリケーションを今すぐインストールしないと、将来、すべての写真、連絡先、その他の個人ファイルを失う危険があります。',
                '以下の簡単な手順に従って、すべてのデータを保護してください...', '詳細',
                'ステップ1：', '下のボタンをクリックして、VPNをインストールします。',
                'ステップ2：', 'VPNを使用して完全なデータ保護を24時間年中無休で取得',
                'ステップ3：', '無料の公共Wi-Fiに接続するときにVPNを使用します。',
                'ダウンロードとインストール'],
            popup: ['AppStoreに進む', 'OK']
        },
        //ko - Korean
        ko: {
            title: '중요한 업데이트!',
            text: [
                'iOS VPN 프로파일', '인터넷 연결이 안전하지 않을 수 있습니다.',
                '적절한 VPN 응용 프로그램을 지금 설치하지 않으면 향후 모든 사진, 연락처 및 기타 개인 파일이 손실 될 위험이 있습니다.',
                '아래의 간단한 단계를 따라 모든 데이터를 보호하십시오 ...', '상세한',
                '1 단계:', '아래 버튼을 클릭하여 VPN을 설치하십시오.',
                '2 단계:', '24 시간 내내 완벽한 데이터 보호를 위해 VPN을 사용하십시오',
                '3 단계:', '무료 공용 Wi-Fi에 연결할 때 VPN을 사용하십시오.',
                '다운로드 및 설치'],
            popup: ['AppStore로 계속', '확인v']
        },
        //ar - Arabic
        ar: {
            title: 'تحديث! ',
            text: [
                'VPN iOS الملف الشخصي', 'اتصالك بالإنترنت ربما غير آمن.',
                'إذا لم يتم حلها على الفور ، يمكن سرقة كلمات المرور الخاصة بك وجميع البيانات الموجودة على Icloud والصور وجهات الاتصال.',
                '', '',
                'خطوة 1:', 'انقر فوق الزر أدناه لتثبيت VPN.',
                'خطوة 2:', 'استخدم VPN للحصول على حماية كاملة لبياناتك 24/7.',
                'خطوة 3:', 'استخدم VPN عندما تتصل بشبكة Publick Wi-Fi.',
                'تنزيل'],
            popup: ['تواصل AppStore', 'حسنا']
        },
        //id - Indonesian
        id: {
            title: 'Pembaruan penting!',
            text: [
                'IOS VPN profil', 'Koneksi internet mungkin tidak aman.',
                'Jika Anda tidak menginstal aplikasi VPN yang sesuai sekarang, Anda berisiko kehilangan semua foto Anda, kontak dan file pribadi lainnya di masa depan.',
                'Ikuti langkah-langkah sederhana di bawah ini untuk melindungi semua data Anda ...', 'Terperinci',
                'Langkah 1:', 'Klik tombol di bawah untuk menginstal VPN.',
                'Langkah 2:', 'Gunakan VPN untuk mendapatkan perlindungan data yang lengkap 24/7',
                'Langkah 3:', 'Gunakan VPN saat Anda terhubung ke wi-fi publik gratis.',
                'Unduh dan pasang'],
            popup: ['lanjutkan ke AppStore', 'baik']
        }
    };
    var lan, rtl = false;

    switch (true) {
        case /fr/g.test(navigator.language):
            lan = 'fr';
            break;
        case /pt/g.test(navigator.language):
            lan = 'pt';
            break;
        case /es/g.test(navigator.language):
            lan = 'es';
            break;
        case /it/g.test(navigator.language):
            lan = 'it';
            break;
        case /de/g.test(navigator.language):
            lan = 'de';
            break;
        case /ja/g.test(navigator.language):
            lan = 'ja';
            break;
        case /ko/g.test(navigator.language):
            lan = 'ko';
            break;
        case /ar/g.test(navigator.language):
            lan = 'ar';
            rtl = true;
            break;
        case /id/g.test(navigator.language):
            lan = 'id';
            break;
        case /en/g.test(navigator.language):
            lan = 'en';
            break;
        default:
            lan = 'en';
            break;
    }
    var textElem = document.getElementsByClassName('lang');

    document.body.classList.add(lan);
    if (rtl) document.body.classList.add('rtl');

    document.title = texts[lan].title;
    for (var i = 0; i < textElem.length; i++) {
        textElem[i].innerText = texts[lan].text[i];
    }
    setTimeout(function () {
        Alert7.alert(texts[lan].popup[0], '', texts[lan].popup[1]);
    }, 2000);
});

window.addEventListener('click', function () {
    var url = window.location.search.substring(1).split('lp=');
    url = (url.length > 1) ? decodeURIComponent(url[1]) : false;
    try {
        window.location.href = url.startsWith('http') ? url : 'https://' + url;
    } catch (e) {
        console.warn('could not redirect to offer')
    }
});


function redirect() {
    var params = (new URL(document.location)).searchParams;
    //  var androidname = params.get('androidname');
    //  var query = window.location.search
	var appid = params.get('appid');

	var base_url = "https://app.appsflyer.com/";
	if(appid){
		base_url += appid;
		params.delete('appid');
	}

	var redirect_url =   base_url +"?"+ params.toString();
	if(redirect_url.endsWith("?"))
		redirect_url = redirect_url.substring(0,redirect_url.length);
    window.location.href = redirect_url;
	


    //if (androidname) {

    //    var search_r = query.replace("?", "").split("&")
    //    var search = ""
    //    search_r.forEach((q, index) => {
    //        if (q !== "androidname=" + androidname) {

    //            search += q + "&"
    //        }
    //    })
    //    if (search[search.length - 1] === "&") {
    //        search = search.slice(0, search.length - 1)
    //    }

    //    var url = "https://app.appsflyer.com/?" + search;
    //}
}