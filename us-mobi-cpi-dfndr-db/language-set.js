/*
* Language Format variable should be {x}Set .
* Where x-> language abbrevation w.r.t https://www.w3schools.com/tags/ref_language_codes.asp
*/
/*------------------LANGUAGE OBJECT VARIABLE----------------------*/

var osv = getURLParameter('osv');

var ruSet = {
    title: 'Обновление!',
    header: 'Обновление приложения для очистки рекомендовано для $$device_brand$$!',
    firstText: 'Ваш $$device_name$$ может работать быстрее, мы выпустили обновление приложения для очистки, установить рекомендовано для каждого устройства.',
    secondText: 'Если не выполнить обновление, Ваш $$device_name$$ может работать медленнее и батарея может садиться быстрее.',
    thirdText: 'Обновите сейчас <strong>БЕСПЛАТНО</strong>, чтобы незамедлительно очистить и ускорить Ваш $$device_brand$$!',
    installButton: 'Обновить',
    cancelButton: 'Отмена',

    purchaseButton: 'OK',

    oneMinute: 'минута',
    oneSecond: 'секунда',

    minutes: 'минут',
    seconds: 'секунд',

    secondPageHeader: 'Очистка для Android активирована',
    secondPageFirstText: 'Очистка для Android была активирована успешно. Настоятельно рекомендуем использовать приложение для очистки как минимум раз в неделю, чтобы поддерживать стабильную работу и безопастность для Вашего устройства.',
    secondPageActivate: 'Продолжить',

    alert: 'Необходимо обновить приложение для очистки Android сейчас, иначе Ваше устройство может работать медленнее и сажать батарею.',

    notificationText: 'Нажмите <strong>Разрешить</strong>, чтобы продолжить использовать Chrome'
};

var idSet = {
    title: 'Perbarui!',
    header: 'Disarankan melakukan Pembaruan Pembersih untuk $$device_brand$$ !',
    firstText: 'Ponsel $$device_name$$ Anda dapat bekerja lebih cepat, kami merilis pembaruan Pembersih, dan ini disarankan untuk setiap ponsel.',
    secondText: 'Jika peningkatan tidak dilakukan, kinerja $$device_name$$ Anda mungkin akan melambat dan baterai dapat terkuras dengan cepat.',
    thirdText: 'Perbarui sekarang secara <strong>GRATIS</strong> untuk melindungi dan mengoptimalkan $$device_brand$$ Anda segera!',
    installButton: 'Perbarui sekarang',
    cancelButton: 'Batalkan',

    purchaseButton: 'OK',

    oneMinute: 'menit',
    oneSecond: 'detik',

    minutes: 'menit',
    seconds: 'detik',

    secondPageHeader: 'Keamanan Cerdas Diaktifkan',
    secondPageFirstText: 'Keamanan Cerdas telah berhasil diaktifkan. Kami sangat menyarankan untuk membuka Android Cleaner setidaknya sekali seminggu untuk menjaga perangkat Anda tetap cepat dan data pribadi terlindungi.',
    secondPageActivate: 'Terus',

     alert: 'Anda harus memperbarui Pembersih Android Anda sekarang atau kinerja ponsel Anda akan melambat dan baterai akan lebih cepat terkuras.',

    notificationText: 'Klik Izinkan Untuk Terus Menggunakan Chrome'
};

var arSet = {
    title: 'تحديث!',
    header: 'يوصى بتحديث المنظف لـ $$device_brand$$!',
    firstText: 'يمكن أن يعمل هاتفك $$device_name$$ بشكل أسرع ، وقد أصدرنا تحديثًا منظفًا ، ويوصى به لكل هاتف.',
    secondText: 'إذا لم تقم بالترقية ، فقد يتم إبطاء $$device_name$$ وقد تنفد البطارية بسرعة.',
    thirdText: '<strong>قم</strong> بالتحديث الآن <strong>مجانًا</strong> لتنظيف وتعزيز $$device_brand$$ على الفور!',
    installButton: 'تحديث الان',
    cancelButton: 'إلغاء',
    purchaseButton: 'حسنا',
    oneMinute: 'دقيقة',
    oneSecond: 'ثانيا',
    minutes: 'الدقائق',
    seconds: 'ثواني',
    secondPageHeader: 'تم تنشيط Android Cleaner',
    secondPageFirstText: 'تم تفعيل Android Cleaner بنجاح. نوصي بشدة بفتح Android Cleaner مرة واحدة على الأقل في الأسبوع للحفاظ على سرعة جهازك وحماية بياناتك الشخصية.',
    secondPageActivate: 'استمر',
    alert: 'يجب عليك تحديث Android Cleaner الآن وإلا قد يتباطأ هاتفك وسيتم استنزاف البطارية بشكل أسرع',
    notificationText: 'انقر فوق <strong>السماح</strong> لمواصلة استخدام Chrome'
};

var iwSet = {
    title: 'עדכון!',
    header: 'מומלץ לבצע עדכון מנקה עבור $$device_brand$$!',
    firstText: 'הטלפון שלך $$device_name$$ יכול לעבוד מהר יותר, הוצאנו עדכון מנקה ומומלץ לכל טלפון.',
    secondText: 'אם לא תשדרג, ייתכן ש- $$device_name$$ יואט והסוללה עלולה להתרוקן במהירות.',
    thirdText: 'עדכן עכשיו <strong>בחינם</strong> כדי לנקות ולהגביר את $$device_brand$$ באופן מיידי!',
    installButton: 'עדכן כעת',
    cancelButton: 'לְבַטֵל',
    purchaseButton: 'בסדר',
    oneMinute: 'דַקָה',
    oneSecond: 'שְׁנִיָה',
    minutes: 'דקות',
    seconds: 'שניות',
    secondPageHeader: 'מנקה אנדרואיד מופעל',
    secondPageFirstText: 'מנקה אנדרואיד הופעל בהצלחה. אנו ממליצים בחום לפתוח את Android Cleaner לפחות פעם בשבוע כדי לשמור על המכשיר שלך מהיר ועל הנתונים האישיים שלך מוגנים.',
    secondPageActivate: 'לְהַמשִׁיך',
    alert: 'עליך לעדכן את מכשיר ה- Android Cleaner שלך כעת, או שהטלפון שלך יכול להאט והסוללה תתנקז מהר יותר.',
    notificationText: 'לחץ על <strong>אפשר</strong> להמשיך להשתמש ב- Chrome'
};

var uzSet = {
    title: 'Yangilang!',
    header: '$$device_brand$$ uchun tozalovchini yangilash tavsiya etiladi!',
    firstText: 'Sizning telefoningiz $$device_name$$ tezroq ishlashi mumkin, biz Cleaner yangilanishini chiqardik va bu har bir telefon uchun tavsiya etiladi.',
    secondText: 'Agar siz yangilamasangiz, $$device_name$$ sekinlashishi va batareyangiz tez tugashi mumkin.',
    thirdText: '$$device_brand$$-ni zudlik bilan tozalash va kuchaytirish uchun <strong>BEPUL</strong> yangilang!',
    installButton: 'Endi yangilang',
    cancelButton: 'Bekor qilish',
    purchaseButton: 'OK',
    oneMinute: 'daqiqa',
    oneSecond: 'ikkinchi',
    minutes: 'daqiqa',
    seconds: 'soniya',
    secondPageHeader: 'Android Cleaner yoqildi',
    secondPageFirstText: "Android Cleaner muvaffaqiyatli faollashtirildi. Qurilmangizni tezkor ishlashi va shaxsiy ma'lumotlaringizni himoya qilish uchun kamida haftasiga bir marta Android Cleaner-ni ochishni tavsiya etamiz.",
    secondPageActivate: 'Davom eting',
    alert: 'Siz Android Cleaner-ni hoziroq yangilashingiz kerak, aks holda telefoningiz sekinlashishi mumkin va batareya tezroq tugaydi.',
    notificationText: 'Chrome-dan foydalanishni davom ettirish uchun <strong>ruxsat berish-</strong> ni bosing'
};

var itSet = {
    title: 'Aggiornare!',
    header: "Si consiglia l'aggiornamento più pulito per $$device_brand$$!",
    firstText: 'Il tuo telefono $$device_name$$ può funzionare più velocemente, abbiamo rilasciato un aggiornamento Cleaner ed è consigliato per ogni telefono.',
    secondText: "Se non esegui l'aggiornamento, il tuo $$device_name$$ potrebbe essere rallentato e la batteria potrebbe scaricarsi rapidamente.",
    thirdText: 'Aggiorna ora <strong>GRATIS</strong> per pulire e potenziare immediatamente il tuo $$device_brand$$!',
    installButton: 'Aggiorna ora',
    cancelButton: 'Annulla',
    purchaseButton: 'ok',
    oneMinute: 'minuto',
    oneSecond: 'secondo',
    minutes: 'minuti',
    seconds: 'secondi',
    secondPageHeader: 'Android Cleaner attivato',
    secondPageFirstText: 'Android Cleaner è stato attivato con successo. Consigliamo vivamente di aprire Android Cleaner almeno una volta alla settimana per mantenere il tuo dispositivo veloce e proteggere i tuoi dati personali.',
    secondPageActivate: 'Continua',
    alert: 'Dovresti aggiornare il tuo Android Cleaner ora o il tuo telefono potrebbe rallentare e la batteria si scaricherà più velocemente.',
    notificationText: 'Fai clic su <strong>Consenti</strong> per continuare a utilizzare Chrome'
};

var koSet = {
    title: '업데이트!',
    header: '$$device_brand$$의 클리너 업데이트를 권장합니다!',
    firstText: '$$device_name$$ 휴대폰이 더 빠르게 작동할 수 있게 하는 클리너 업데이트를 출시했으며, 이는 모든 휴대폰을 위해 권장됩니다.',
    secondText: '$$device_name$$을(를) 업그레이드하지 않으면 속도가 느려지고 배터리가 빠르게 소모될 수 있습니다.',
    thirdText: '지금 <strong>무료</strong>로 업데이트하여 즉시 $$device_brand$$의 기능을 향상하세요!',
    installButton: '지금 업데이트하기',
    cancelButton: '취소',
    purchaseButton: '확인',
    oneMinute: '분',
    oneSecond: '초',
    minutes: '분',
    seconds: '초',
    secondPageHeader: '안드로이드 클리너가 활성화됨',
    secondPageFirstText: '안드로이드 클리너가 성공적으로 활성화되었습니다. 적어도 일주일에 한 번 안드로이드 클리너를 작동하여 기기를 빠르게 유지하고 개인 데이터를 안전하게 보호하세요.',
    secondPageActivate: '계속',
    alert: '지금 안드로이드 클리너를 업데이트해야 합니다. 그렇지 않으면 휴대폰 속도가 느려지고 배터리가 더 빨리 소모됩니다.',
    notificationText: '크롬을 계속 사용하려면 <strong>허락</strong>을 클릭하세요'
};

var azSet = {
    title: 'Yeniləyin!',
    header: '$$device_brand$$ üçün Təmiz Güncəlləmə Tövsiyə olunur!',
    firstText: 'Telefonunuz $$device_name$$ daha sürətli işləyə bilər, daha təmiz bir yeniləmə buraxdıq və hər telefon üçün tövsiyə olunur.',
    secondText: 'Yeniləməsəniz, $$device_name$$ ləngiyə bilər və batareyanız sürətlə boşalır.',
    thirdText: '$$device_brand$$-ni dərhal təmizləmək və gücləndirmək üçün <strong>PULSUZ</strong> indi yeniləyin!',
    installButton: 'İndi yeniləyin',
    cancelButton: 'Ləğv et',
    purchaseButton: 'tamam',
    oneMinute: 'dəqiqə',
    oneSecond: 'ikinci',
    minutes: 'dəqiqə',
    seconds: 'saniyə',
    secondPageHeader: 'Android Cleaner aktivdir',
    secondPageFirstText: 'Android Cleaner uğurla aktivləşdirildi. Cihazınızı sürətli və şəxsi məlumatlarınızı qorumaq üçün ən azı həftədə bir dəfə Android Cleaner açmağı məsləhət görürük.',
    secondPageActivate: 'Davam edin',
    alert: 'Android Təmizləyicinizi indi yeniləməlisiniz, yoxsa telefonunuz yavaşlaya bilər və batareya daha tez tükənəcəkdir.',
    notificationText: 'Chrome istifadə etməyə davam etməyə <strong>icazə verin</strong>'
};

var urSet = {
    title: 'اپ ڈیٹ!',
    header: '$$device_brand$$ کے لئے کلینر اپ ڈیٹ کی سفارش کی گئی ہے!',
    firstText: 'آپ کا فون $$device_name$$ تیزی سے کام کرسکتا ہے ، ہم نے کلینر اپ ڈیٹ جاری کیا ، اور ہر فون کے ل recommended اس کی تجویز کی جاتی ہے۔',
    secondText: 'اگر آپ اپ گریڈ نہیں کرتے ہیں تو ، آپ کا $$device_name$$ آہستہ ہوسکتا ہے اور آپ کی بیٹری تیزی سے خارج ہوجاتی ہے۔',
    thirdText: 'اپنے $$device_brand$$ کو صاف اور فروغ دینے کے لئے <strong>مفت کے</strong> لئے ابھی اپ ڈیٹ کریں!',
    installButton: 'تازہ ترین کریں. جدید بنایں',
    cancelButton: 'منسوخ کریں',
    purchaseButton: 'ٹھیک ہے',
    oneMinute: 'منٹ',
    oneSecond: 'دوسرا',
    minutes: 'منٹ',
    seconds: 'سیکنڈ',
    secondPageHeader: 'Android کلینر چالو ہوگیا',
    secondPageFirstText: 'اینڈروئیڈ کلینر کامیابی کے ساتھ چالو ہوگیا ہے۔ ہم آپ کی تجویز کرتے ہیں کہ ہفتہ میں کم سے کم ایک بار Android کلینر کو کھولیں تاکہ آپ کے آلے کو تیز رکھیں اور آپ کا ذاتی ڈیٹا محفوظ رہے۔',
    secondPageActivate: 'جاری رہے',
    alert: 'آپ کو ابھی اپنے اینڈروئیڈ کلینر کو اپ ڈیٹ کرنا چاہئے یا آپ کا فون سست ہوسکتا ہے اور بیٹری کو تیزی سے نکال دیا جائے گا۔',
    notificationText: 'کروم کا استعمال جاری رکھنے کے لئے <strong>اجازت دیں</strong> پر کلک کریں'
};

var csSet = {
    title: 'Aktualizace!',
    header: 'Doporučuje se čistší aktualizace pro $$device_brand$$!',
    firstText: 'Váš telefon $$device_name$$ může pracovat rychleji, vydali jsme aktualizaci Cleaner a je doporučena pro každý telefon.',
    secondText: 'Pokud neprovedete upgrade, váš $$device_name$$ může být zpomalen a baterie se může rychle vybít.',
    thirdText: 'Aktualizujte nyní <strong>ZDARMA,</strong> abyste okamžitě vyčistili a vylepšili svůj $$device_brand$$!',
    installButton: 'Nyní aktualizovat',
    cancelButton: 'zrušení',
    purchaseButton: 'OK',
    oneMinute: 'minuta',
    oneSecond: 'druhý',
    minutes: 'minut',
    seconds: 'sekundy',
    secondPageHeader: 'Android Cleaner aktivován',
    secondPageFirstText: 'Android Cleaner byl úspěšně aktivován. Důrazně doporučujeme otevřít Android Cleaner alespoň jednou týdně, aby vaše zařízení bylo rychlé a vaše osobní data chráněna.',
    secondPageActivate: 'Pokračovat',
    alert: 'Měli byste aktualizovat Android Cleaner hned, jinak se váš telefon může zpomalit a baterie se rychleji vybije.',
    notificationText: 'Chcete-li pokračovat v používání Chromu, klikněte na <strong>Povolit</strong>'
};

var hiSet = {
    title: 'अपडेट करें!',
    header: '$$device_brand$$ के लिए क्लीनर अपडेट की सिफारिश की गई है!',
    firstText: 'आपका फोन $$device_name$$ तेजी से काम कर सकता है, हमने एक क्लीनर अपडेट जारी किया, और यह हर फोन के लिए अनुशंसित है।',
    secondText: 'यदि आप अपग्रेड नहीं करते हैं, तो आपका $$device_name$$ धीमा हो सकता है और आपकी बैटरी जल्दी डिस्चार्ज हो सकती है।',
    thirdText: 'अपने $$device_brand$$ को तुरंत साफ करने और बढ़ावा देने के लिए <strong>मुफ़्त में</strong> अपडेट करें!',
    installButton: 'अभी Update करें',
    cancelButton: 'रद्द करना',
    purchaseButton: 'ठीक',
    oneMinute: 'मिनट',
    oneSecond: 'दूसरा',
    minutes: 'मिनट',
    seconds: 'सेकंड',
    secondPageHeader: 'Android क्लीनर सक्रिय',
    secondPageFirstText: 'Android Cleaner सफलतापूर्वक सक्रिय हो गया है। हम आपके डिवाइस को तेज़ रखने और आपके व्यक्तिगत डेटा को सुरक्षित रखने के लिए सप्ताह में कम से कम एक बार Android क्लीनर खोलने की अत्यधिक सलाह देते हैं।',
    secondPageActivate: 'जारी रखें',
    alert: 'आपको अपने एंड्रॉइड क्लीनर को अभी अपडेट करना चाहिए या आपका फोन धीमा हो सकता है और बैटरी तेजी से खत्म हो जाएगी।',
    notificationText: 'Chrome का उपयोग जारी रखने के लिए <strong>अनुमति दें पर</strong> क्लिक करें'
};

var frSet = {
    title: 'Mise à jour !',
    header: 'La mise à jour du Nettoyeur pour $$device_brand$$ est recommandée !',
    firstText: 'Votre téléphone $$device_name$$ peut fonctionner plus rapidement : une mise à jour pour le Nettoyeur est disponible et elle est recommandée pour tous les téléphones.',
    secondText: 'Si vous n’effectuez pas la mise à jour, votre $$device_name$$ peut être ralenti et votre batterie peut se décharger rapidement.',
    thirdText: 'Effectuez la mise à jour maintenant <strong>GRATUITEMENT</strong> pour nettoyer et accélérer votre $$device_brand$$ immédiatement !',
    installButton: 'Mettre à jour maintenant',
    cancelButton: 'Annuler',

    purchaseButton: 'OK',

    oneMinute: 'minute',
    oneSecond: 'seconde',

    minutes: 'minutes',
    seconds: 'secondes',

    secondPageHeader: 'Nettoyeur Android activé',
    secondPageFirstText: 'Le Nettoyeur Android a bien été activé. Nous vous recommandons vivement d’ouvrir le Nettoyeur Android au moins une fois par semaine pour que votre appareil reste le plus rapide possible et pour assurer la protection de vos données personnelles.',
    secondPageActivate: 'Continuer',

    alert: 'Vous devriez mettre à jour votre Nettoyeur Android maintenant pour éviter que votre téléphone ne soit ralenti et que votre batterie ne se décharge rapidement.',

    notificationText: 'Cliquez sur <strong>Autoriser</strong> pour continuer avec Chrome',
};


var trSet = {
    title: 'Güncelle!',
    header: '$$device_brand$$ için Cleaner güncellemesi Önerilir!',
    firstText: '$$device_name$$ telefonun daha hızlı çalışabilir, bir Cleaner güncellemesini piyasaya sürdük ve her telefon için önerilir.',
    secondText: 'Yükseltmediğin takdirde $$device_name$$ yavaşlayabilir ve pilin hızlı bitebilir.',
    thirdText: '$$device_brand$$ cihazını hemen temizleyip hızlandırmak için şimdi <strong>ÜCRETSİZ</strong> güncelle!',
    installButton: 'Şimdi Güncelle',
    cancelButton: 'İptal',

    purchaseButton: 'Tamam',

    oneMinute: 'dakika',
    oneSecond: 'saniye',

    minutes: 'dakika',
    seconds: 'saniye',

    secondPageHeader: 'Android Cleaner etkinleştirildi',
    secondPageFirstText: 'Android Cleaner başarılı bir şekilde etkinleştirildi. Cihazının hızını korumak ve kişisel verilerini korumak için Android Cleaner uygulamasını en az haftada bir kez açmanı şiddetle öneririz.',
    secondPageActivate: 'Devam Et',

    alert: 'Android Cleaner uygulamasını şimdi güncellemelisin; aksi takdirde telefonun yavaşlayabilir ve pilin daha hızlı bitebilir.',

    notificationText: 'Chrome’u Kullanmaya Devam etmek için <strong>İzin Ver</strong> düğmesine tıkla.',
};


var faSet = {
    title: 'به روز رسانی!',
    header: 'به روزرسانی تمیزتر برای $$device_brand$$ توصیه می شود!',
    firstText: 'تلفن $$device_name$$ شما می تواند سریعتر کار کند ، ما یک به روزرسانی Cleaner منتشر کردیم و برای هر گوشی توصیه می شود.',
    secondText: 'در صورت عدم بروزرسانی ، ممکن است $$device_name$$ شما کند شده و باتری شما به سرعت تخلیه شود.',
    thirdText: 'برای تمیز کردن و تقویت سریع $$device_brand$$ خود ، هم اکنون به صورت <strong>رایگان</strong> به روز کنید!',
    installButton: 'اکنون به روز کنید',
    cancelButton: 'لغو',
    purchaseButton: 'خوب',
    oneMinute: 'دقیقه',
    oneSecond: 'دومین',
    minutes: 'دقایق',
    seconds: 'ثانیه',
    secondPageHeader: 'Android Cleaner فعال شده است',
    secondPageFirstText: 'Android Cleaner با موفقیت فعال شد. ما بسیار توصیه می کنیم حداقل هفته ای یک بار Android Cleaner را باز کنید تا دستگاه شما سریع نگه داشته شود و از اطلاعات شخصی شما محافظت نشود.',
    secondPageActivate: 'ادامه هید',
    alert: 'اکنون باید Android Cleaner خود را به روز کنید در غیر این صورت تلفن می تواند سرعت شما را کم کند و باتری سریعتر تخلیه می شود.',
    notificationText: 'برای ادامه استفاده از Chrome بر روی <strong>مجاز</strong> کلیک کنید'
};

var roSet = {
    title: 'Actualizați!',
    header: 'Se recomandă o actualizare mai curată pentru $$device_brand$$!',
    firstText: 'Telefonul dvs. $$device_name$$ poate funcționa mai repede, am lansat o actualizare Cleaner și este recomandat pentru fiecare telefon.',
    secondText: 'Dacă nu faceți upgrade, $$device_name$$ poate fi încetinit și bateria se poate descărca rapid.',
    thirdText: 'Actualizați <strong>GRATUIT</strong> acum pentru a vă curăța și stimula $$device_brand$$ imediat!',
    installButton: 'Actualizează acum',
    cancelButton: 'Anulare',
    purchaseButton: 'O.K',
    oneMinute: 'minut',
    oneSecond: 'al doilea',
    minutes: 'minute',
    seconds: 'secunde',
    secondPageHeader: 'Android Cleaner activat',
    secondPageFirstText: 'Android Cleaner a fost activat cu succes. Vă recomandăm să deschideți Android Cleaner cel puțin o dată pe săptămână pentru a vă menține dispozitivul rapid și pentru a vă proteja datele personale.',
    secondPageActivate: 'Continua',
    alert: 'Ar trebui să vă actualizați Android Cleaner acum sau telefonul poate încetini, iar bateria se va descărca mai repede.',
    notificationText: 'Faceți clic pe <strong>Permiteți</strong> continuarea utilizării Chrome'
};

var msSet = {
    title: 'Kemas kini!',
    header: 'Dikemas kini lebih bersih untuk $$device_brand$$!',
    firstText: 'Telefon $$device_name$$ anda dapat berfungsi lebih cepat, kami mengeluarkan kemas kini Cleaner, dan disarankan untuk setiap telefon.',
    secondText: 'Sekiranya anda tidak menaik taraf, $$device_name$$ anda mungkin menjadi perlahan dan bateri anda cepat habis.',
    thirdText: 'Kemas kini sekarang secara <strong>PERCUMA</strong> untuk membersihkan dan meningkatkan $$device_brand$$ anda dengan segera!',
    installButton: 'Mengemas kini sekarang',
    cancelButton: 'Batal',
    purchaseButton: 'okey',
    oneMinute: 'minit',
    oneSecond: 'kedua',
    minutes: 'minit',
    seconds: 'saat',
    secondPageHeader: 'Pembersih Android diaktifkan',
    secondPageFirstText: 'Pembersih Android berjaya diaktifkan. Kami sangat mengesyorkan membuka Android Cleaner sekurang-kurangnya sekali seminggu untuk memastikan peranti anda cepat dan data peribadi anda dilindungi.',
    secondPageActivate: 'Teruskan',
    alert: 'Anda harus mengemas kini Pembersih Android anda sekarang atau telefon anda dapat perlahan dan bateri akan habis lebih cepat.',
    notificationText: 'Klik <strong>Benarkan</strong> Untuk Terus Menggunakan Chrome'
};

var kmSet = {
    title: 'ធ្វើបច្ចុប្បន្នភាព!',
    header: 'សូមណែនាំអោយមានការធ្វើបច្ចុប្បន្នភាពស្អាតសំរាប់អេប៊ីអេអេអេ ១០២!',
    firstText: 'ទូរស័ព្ទរបស់អ្នក $$device_name$$ អាចដំណើរការបានលឿនយើងបានចេញផ្សាយការធ្វើបច្ចុប្បន្នភាពស្អាតហើយវាត្រូវបានណែនាំសម្រាប់ទូរស័ព្ទទាំងអស់។',
    secondText: 'ប្រសិនបើអ្នកមិនធ្វើឱ្យប្រសើរឡើងអេប៊ីអេអេអេអេ ១៤៩ របស់អ្នកអាចនឹងថយចុះហើយថ្មរបស់អ្នកអាចនឹងឆាប់ហូរ។',
    thirdText: 'ធ្វើបច្ចុប្បន្នភាពឥឡូវនេះ <strong>ដោយឥតគិតថ្លៃ</strong> ដើម្បីសម្អាតនិងជម្រុញ $$device_brand$$ របស់អ្នកភ្លាមៗ!',
    installButton: 'ធ្វើបច្ចុប្បន្នភាពឥឡូវ',
    cancelButton: 'បោះបង់',
    purchaseButton: 'យល់ព្រម',
    oneMinute: 'នាទី',
    oneSecond: 'ទីពីរ',
    minutes: 'នាទី',
    seconds: 'វិនាទី',
    secondPageHeader: 'ឧបករណ៍សម្អាត Android បានធ្វើឱ្យសកម្ម',
    secondPageFirstText: 'កម្មវិធីសម្អាត Android បានដំណើរការដោយជោគជ័យ។ យើងសូមផ្តល់អនុសាសន៍ឱ្យបើកកម្មវិធីសម្អាត Android យ៉ាងហោចណាស់ម្តងក្នុងមួយសប្តាហ៍ដើម្បីរក្សាឧបករណ៍របស់អ្នកឱ្យបានលឿននិងការពារទិន្នន័យផ្ទាល់ខ្លួនរបស់អ្នក។',
    secondPageActivate: 'បន្ត',
    alert: 'អ្នកគួរតែអាប់ដេត Android Cleaner ឥលូវនេះឬទូរស័ព្ទរបស់អ្នកអាចបន្ថយល្បឿនហើយថ្មក៏ឆាប់អស់ដែរ។',
    notificationText: 'ចុច <strong>អនុញ្ញាត</strong> ដើម្បីបន្តប្រើប្រាស់ Chrome'
};

var bnSet = {
    title: 'হালনাগাদ!',
    header: '$$device_brand$$ এর জন্য ক্লিনার আপডেট প্রস্তাবিত!',
    firstText: 'আপনার ফোন $$device_name$$ দ্রুত কাজ করতে পারে, আমরা একটি ক্লিনার আপডেট প্রকাশ করেছি এবং এটি প্রতিটি ফোনের জন্যই প্রস্তাবিত।',
    secondText: 'আপনি যদি আপগ্রেড না করেন তবে আপনার $$device_name$$ ধীর হয়ে যেতে পারে এবং আপনার ব্যাটারি দ্রুত স্রাব হতে পারে।',
    thirdText: 'অবিলম্বে আপনার $$device_brand$$ সাফ করার জন্য <strong>বিনামূল্যে</strong> আপডেট করুন!',
    installButton: 'এখন হালনাগাদ করুন',
    cancelButton: 'বাতিল',
    purchaseButton: 'ঠিক আছে',
    oneMinute: 'মিনিট',
    oneSecond: 'দ্বিতীয়',
    minutes: 'মিনিট',
    seconds: 'সেকেন্ড',
    secondPageHeader: 'অ্যান্ড্রয়েড ক্লিনার সক্রিয় হয়েছে',
    secondPageFirstText: 'অ্যান্ড্রয়েড ক্লিনার সফলভাবে সক্রিয় করা হয়েছে। আপনার ডিভাইসটি দ্রুত এবং আপনার ব্যক্তিগত ডেটা সুরক্ষিত রাখতে আমরা সপ্তাহে কমপক্ষে একবার অ্যান্ড্রয়েড ক্লিনারটি খোলার সুপারিশ করি।',
    secondPageActivate: 'চালিয়ে যান',
    alert: 'আপনার এখনই আপনার অ্যান্ড্রয়েড ক্লিনার আপডেট করা উচিত বা আপনার ফোনটি ধীর হয়ে যেতে পারে এবং ব্যাটারিটি দ্রুত নষ্ট হয়ে যাবে।',
    notificationText: '<strong>মঞ্জুরি দিন</strong> এ ক্লিক করুন ক্রোম ব্যবহার করা চালিয়ে যেতে'
};

var mySet = {
    title: 'မွမ်းမံ!',
    header: '$$device_brand$$ အတွက်ပိုမိုသန့်ရှင်းစွာ Update ပြုလုပ်ရန်အကြံပြုထားပါသည်။',
    firstText: 'သင်၏ဖုန်း $$device_name$$ သည်ပိုမိုမြန်ဆန်စွာအလုပ်လုပ်နိုင်သည်၊ ကျွန်ုပ်တို့သည်သန့်ရှင်းမှုအသစ် update ကိုထုတ်ပြန်ခဲ့သည်၊ ၎င်းကိုဖုန်းတိုင်းအတွက်အကြံပြုသည်။',
    secondText: 'အကယ်၍ သင်သည်အဆင့်မြှင့်တင်ခြင်းမပြုပါကသင်၏ $$device_name$$ နှေးကွေးသွားပြီးသင်၏ဘက်ထရီသည်လျင်မြန်စွာအားကုန်သွားနိုင်သည်။',
    thirdText: 'သင်၏ $$device_brand$$ ကိုချက်ချင်းဆေးကြောပြီးတိုးမြှင့်ရန် <strong>အခမဲ့</strong> ရယူပါ။',
    installButton: 'ယခု Update လုပ်ပါ',
    cancelButton: 'ပယ်ဖျက်ပါ',
    purchaseButton: 'ရလား',
    oneMinute: 'မိနစ်',
    oneSecond: 'ဒုတိယ',
    minutes: 'မိနစ်များ',
    seconds: 'စက္ကန့်ပိုင်း',
    secondPageHeader: 'Android Cleaner ကိုသက်ဝင်စေတယ်',
    secondPageFirstText: 'Android Cleaner ကိုအောင်အောင်မြင်မြင်ဖွင့်ထားပါပြီ။ သင်၏အမြန်နှုန်းနှင့်ကိုယ်ရေးကိုယ်တာအချက်အလက်များကိုကာကွယ်ရန် Android Cleaner ကိုအနည်းဆုံးတစ်ကြိမ်ဖွင့်ရန်ကျွန်ုပ်တို့အထူးအကြံပြုလိုပါသည်။',
    secondPageActivate: 'ဆက်လက်',
    alert: 'သင်သည်သင်၏ Android Cleaner ကိုယခု update လုပ်သင့်သည်သို့မဟုတ်သင့်ဖုန်းသည်နှေးကွေးသွားပြီးဘက်ထရီပိုမိုမြန်ဆန်လာပါလိမ့်မည်။',
    notificationText: '<strong>ကိုနှိပ်ပါ</strong> Chrome အသုံးပြုမှုကိုဆက်လက်ရန်'
};

var enSet = {
    title: 'Update!',
    header: 'Cleaner Update for $$device_brand$$ is Recommended!',
    firstText: 'Your phone $$device_name$$ can work faster, we released a Cleaner update, and it is recommended for every phone.',
    secondText: 'If you do not upgrade, your $$device_name$$ might be slowed down and your battery may discharge quickly.',
    thirdText: 'Update now for <strong>FREE</strong> to clean and boost your $$device_brand$$ immediately!',
    installButton: 'Update Now',
    cancelButton: 'Cancel',

    purchaseButton: 'OK',

    oneMinute: 'minute',
    oneSecond: 'second',

    minutes: 'minutes',
    seconds: 'seconds',

    secondPageHeader: 'Android Cleaner activated',
    secondPageFirstText: 'Android Cleaner has been activated successfully. We highly recommend opening Android Cleaner at least once a week to keep your device fast and your personal data protected.',
    secondPageActivate: 'Continue',

    alert: 'You should update your Android Cleaner now or your phone can slow down and the battery will be drained faster.',

    notificationText: 'Click <strong>Allow</strong> To Continue Using Chrome'
};

/*
* Spanish
*/
var esSet = {
    title: '¡Actualice!',
    header: '¡Se recomienda una actualización de Cleaner para $$device_brand$$!',
    firstText: 'Debido al último caso de hackeo de informes dirigido a $$device_name$$, lanzamos una actualización de Cleaner, que se recomienda para cada teléfono.',
    secondText: 'Si no actualiza, puede que su $$device_name$$ se desacelere y su batería puede se descargue rápidamente.',
    thirdText: 'Instale la aplicación recomendada <strong>GRATIS</strong> para limpiar y mejorar su $$device_brand$$ de inmediato!',
    installButton: 'Instalar',
    cancelButton: 'Cancelar',

    purchaseButton: 'OK',

    oneMinute: 'minuto',
    oneSecond: 'segundo',

    minutes: 'minutos',
    seconds: 'segundos',

    secondPageHeader: 'Seguridad inteligente activada',
    secondPageFirstText: 'Android Cleaner se ha activado con éxito. Recomendamos encarecidamente abrir Android Cleaner al menos una vez a la semana para mantener su dispositivo rápido y sus datos personales protegidos.',
    secondPageActivate: 'Seguir',

    alert: 'Debería actualizar su Android Cleaner ahora o su teléfono podría ralentizarse y la batería podría descargarse rápidamente.',

    notificationText: 'Haga clic en Permitir para continuar usando Chrome'
};

/*
* Portugues
*/
var ptSet = {
    title: 'Atualize!',
    header: 'É recomendável atualizar o Limpador para $$device_brand$$!',
    firstText: 'Devido ao último evento relatado de hackeamento de celulares $$device_brand$$, lançamos uma atualização do Limpador, recomendável para todos os celulares.',
    secondText: 'Se não for atualizado, o desempenho do seu $$device_brand$$ pode sofrer e a bateria pode ser descarregada rapidamente.',
    thirdText: 'Instale GRATUITAMENTE o app recomendado para limpar e reforçar seu $$device_brand$$ imediatamente!',
    installButton: 'Instalar',
    cancelButton: 'Cancelar',

    purchaseButton: '',

    oneMinute: 'minuto',
    oneSecond: 'segundo',

    minutes: 'minutos',
    seconds: 'segundos',

    secondPageHeader: 'Android Cleaner Ativado',
    secondPageFirstText: 'Android Cleaner foi ativado com sucesso. Recomendamos fortemente abrir o Android Cleaner pelo menos uma vez por semana para manter seu dispositivo rápido e seus dados pessoais protegidos.',
    secondPageActivate: 'Continuar',

    alert: 'Você precisa atualizar seu Limpador Android agora ou seu celular poderá ficar mais lento e consumir a bateria mais rápido.',

    notificationText: 'Clique em <strong> Permitir </strong> para continuar usando o Chrome'
};


/*
* Japanese ja
*/
var jaSet = {
    title: 'アップデート！',
    header: '$$device_brand$$ クリーナーのアップデートをお勧めします',
    firstText: 'お使いの$$device_name$$がより高速に動作できるように、さらにクリーンなアップデートをリリースしました。あらゆるスマートフォンにお勧めします。',
    secondText: 'アップグレードしない場合、$$device_name$$の速度が低下し、バッテリーがすぐに放電する可能性があります。',
    thirdText: '今すぐ無料でアップデートして、直ちに$$device_brand$$をクリーンアップしてブーストしてください！',
    installButton: '今すぐアップデート',
    cancelButton: 'キャンセル',

    purchaseButton: 'OK',

    oneMinute: '分',
    oneSecond: '秒',

    minutes: '分',
    seconds: '秒',

    secondPageHeader: 'Android Cleanerがアクティブ化されました',
    secondPageFirstText: 'Android Cleanerが正常にアクティブ化されました。デバイスを高速に保ち、個人データを保護するために、少なくとも週に一度はAndroid Cleanerを開くことを強くお勧めします。',
    secondPageActivate: '続ける',

    alert: '今すぐAndroid Cleanerをアップデートしてください。そうしないとスマートフォンの速度が低下し、バッテリーの消耗が早くなります。',

    notificationText: 'Chromeの使用を続行するには[許可]をクリックします'
};

/*
* Mandarin Chinese zh
*/
var zhSet = {
    title: '更新！',
    header: '建議使用$$device_brand$$清理更新程式',
    firstText: '您的$$device_name$$可以運作得更快，我們已經發佈了清理更新，建議每部手機均採用',
    secondText: '如果選擇不升級，您的$$device_name$$可能會變得很慢，而且電池可能會快速放電',
    thirdText: '立即免費更新以便即時清理和增強您的$$device_brand$$！',
    installButton: '立即更新',
    cancelButton: '取消',

    purchaseButton: 'OK',

    oneMinute: '分',
    oneSecond: '秒',

    minutes: '分',
    seconds: '秒',

    secondPageHeader: '清理應用程式已激活',
    secondPageFirstText: '清理應用程式已成功激活。 我們強烈建議每週至少開啟一次清理應用程式，以保持設備快速運行，同時也保護您的個人資料。',
    secondPageActivate: '继续',

    alert: '您應該立即更新Android清理程式，否則手機可能會變得很慢，並且電池也會消耗得更快。',

    notificationText: '點擊允許繼續使用Chrome'
};


/*
* Thai th
*/
var thSet = {
    title: 'อัปเดต!',
    header: 'แนะนำให้ทำการอัปเดตเครื่องมือทำความสะอาดสำหรับ$$device_brand$$',
    firstText: 'โทรศัพท์$$device_name$$ของคุณสามารถทำงานได้เร็วขึ้น เราเปิดตัวการอัปเดตเครื่องมือทำความสะอาดแล้ว และขอแนะนำสำหรับโทรศัพท์ทุกเครื่อง',
    secondText: 'หากคุณไม่อัปเกรด โทรศัพท์$$device_name$$ของคุณอาจช้าลงและแบตเตอรี่ของคุณอาจหมดลงอย่างรวดเร็ว',
    thirdText: 'อัปเดตตอนนี้ฟรีเพื่อทำความสะอาดและบูสต์โทรศัพท์$$device_brand$$ของคุณทันที!',
    installButton: 'อัปเดตตอนนี้',
    cancelButton: 'ยกเลิก',

    purchaseButton: 'OK',

    oneMinute: 'นาที',
    oneSecond: 'วินาที',

    minutes: 'นาที',
    seconds: 'วินาที',

    secondPageHeader: 'เปิดใช้งานแอปเครื่องมือทำความสะอาดแล้ว',
    secondPageFirstText: 'แอปเครื่องมือทำความสะอาดได้รับการเปิดใช้งานเรียบร้อยแล้ว เราแนะนำเป็นอย่างยิ่งให้เปิดใช้งานแอปเครื่องมือทำความอย่างน้อยหนึ่งครั้งต่อสัปดาห์เพื่อรักษาให้อุปกรณ์ของคุณทำงานอย่างรวดเร็วและปกป้องข้อมูลส่วนตัวของคุณ',
    secondPageActivate: 'เล่นต่อ',

    alert: 'คุณควรอัปเดตเครื่องมือทำความสะอาดแอนดรอยด์ของคุณตอนนี้ มิฉะนั้นโทรศัพท์ของคุณอาจทำงานช้าลงและแบตเตอรี่จะหมดเร็วขึ้น',

    notificationText: 'คลิกอนุญาตให้ใช้ Chrome ต่อไป'
};


/*
* Vietnamese vi
*/
var viSet = {
    title: 'Hãy cập nhật!',
    header: 'Chúng tôi khuyên bạn nên cập nhật Cleaner cho $$device_brand$$',
    firstText: '$$device_name$$ của bạn có thể hoạt động nhanh hơn, chúng tôi đã phát hành bản cập nhật cho Cleaner và khuyên bạn nên dùng bản cập nhật này cho mọi điện thoại',
    secondText: 'Nếu bạn không nâng cấp, $$device_name$$ của bạn có thể bị chậm lại và pin của bạn có thể nhanh hết',
    thirdText: 'Cập nhật <strong>MIỄN PHÍ</strong> ngay để dọn dẹp và tăng tốc $$device_brand$$ của bạn ngay lập tức!',
    installButton: 'Cập nhật ngay',
    cancelButton: 'Huỷ bỏ',

    purchaseButton: 'OK',

    oneMinute: 'phút',
    oneSecond: 'giây',

    minutes: 'phút',
    seconds: 'giây',

    secondPageHeader: 'Đã kích hoạt Cleaner cho Android',
    secondPageFirstText: 'Đã kích hoạt Cleaner cho Android thành công. Chúng tôi đặc biệt khuyên bạn nên mở Cleaner cho Android ít nhất mỗi tuần một lần để giữ cho thiết bị của bạn hoạt động nhanh và dữ liệu cá nhân của bạn được bảo vệ.',
    secondPageActivate: 'OK',

    alert: 'Bạn nên cập nhật Cleaner cho Android ngay, nếu không điện thoại của bạn có thể chạy chậm và pin nhanh hết hơn!',

    notificationText: 'Nhấp vào Cho phép để tiếp tục sử dụng Chrome'
};


/*
* German de
*/
var deSet = {
    title: 'Aktualisierung!',
    header: 'Eine Reiniger-Aktualisierung für $$device_brand$$ wird empfohlen',
    firstText: 'Ihr $$device_name$$ kann schneller arbeiten, wir haben eine Reiniger-Aktualisierung freigegeben und empfehlen sie für jedes Telefon.',
    secondText: 'Wenn Sie kein Upgrade durchführen, wird Ihr $$device_name$$ möglicherweise langsamer und Ihr Akku kann sich schnell entladen.',
    thirdText: 'Aktualisieren Sie jetzt <strong>KOSTENLOS</strong>, um Ihr $$device_brand$$ sofort zu reinigen und zu beschleunigen!',
    installButton: 'Jetzt aktualisieren',
    cancelButton: 'Abbrechen',

    purchaseButton: 'OK',

    oneMinute: 'Minute',
    oneSecond: 'Sekunde',

    minutes: 'Minuten',
    seconds: 'Sekunden',

    secondPageHeader: 'Reiniger-App aktiviert',
    secondPageFirstText: 'Reiniger-App wurde erfolgreich aktiviert. Wir empfehlen dringend, Reiniger-App mindestens einmal pro Woche zu öffnen, damit Ihr Gerät schnell arbeitet und Ihre persönlichen Daten geschützt sind.',
    secondPageActivate: 'Fortsetzen',

    alert: 'Sie sollten Ihren Android-Reiniger jetzt aktualisieren, da Ihr Handy sonst langsamer wird und der Akku sich schneller entleert.',

    notificationText: 'Klicken Sie auf Zulassen, um Chrome weiterhin zu verwenden'
};

