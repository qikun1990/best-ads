/*
https://github.com/f2etw/detect-inapp
*/

const BROWSER = {
  messenger: /\bFB[\w_]+\/(Messenger|MESSENGER)/,
  facebook: /\bFB[\w_]+\//,
  twitter: /\bTwitter/i,
  line: /\bLine\//i,
  wechat: /\bMicroMessenger\//i,
  puffin: /\bPuffin/i,
  miui: /\bMiuiBrowser\//i,
  instagram: /\bInstagram/i,
  chrome: /\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,
  safari: /Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,
  ie: /IEMobile|MSIEMobile/,
  firefox: /fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/,
};

class InApp {
  ua = '';

  constructor(useragent) {
    this.ua = useragent;
  }

  get browser() {
    return _.findKey(BROWSER, regex => regex.test(this.ua)) || 'other';
  }

  get isMobile() {
    return /(iPad|iPhone|Android|Mobile)/i.test(this.ua) || false;
  }

  get isDesktop() {
    return !this.isMobile;
  }

  get isInApp() {
    const rules = [
      'WebView',
      '(iPhone|iPod|iPad)(?!.*Safari\/)',
      'Android.*(wv|\.0\.0\.0)',
    ];
    const regex = new RegExp(`(${rules.join('|')})`, 'ig');
    return this.ua.match(regex);
  }
}
