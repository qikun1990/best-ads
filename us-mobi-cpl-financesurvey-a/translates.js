var langs = {
en: {
 step1: "ONLY TODAY",
 step2: "Do you want to earn $1620 per day online?",
 step3: "Answer 7 quick questions to qualify!",
 step4: "Attention:",
 step5: "Offer only valid for",
 step6: "CLICK HERE",
 }
 ,
 es: {
 step1: "SOLO HOY",
 step2: "¿Quieres ganar $1100 por día en línea?",
 step3: "¡Responda 7 preguntas rápidas para calificar!",
 step4: "Atención:",
 step5: "Oferta solo válida para",
 step6: "HAGA CLIC AQUÍ",
 }
 ,
 pt: {
 step1: "SOMENTE HOJE",
 step2: "Você quer ganhar $1100 por dia online?",
 step3: "Responda 7 perguntas rápidas para se qualificar!",
 step4: "Atenção:",
 step5: "Oferta válida apenas para",
 step6: "CLIQUE AQUI",
 }
 ,
 id: {
 step1: "HANYA HARI INI",
 step2: "Apakah Anda ingin menghasilkan $1100 per hari secara online?",
 step3: "Jawab 7 pertanyaan singkat untuk memenuhi syarat!",
 step4: "Perhatian:",
 step5: "Penawaran hanya berlaku untuk",
 step6: "KLIK DISINI",
 }
 ,
 th: {
 step1: "เฉพาะวันนี้",
 step2: "คุณต้องการสร้างรายได้ $1100 ต่อวันทางออนไลน์หรือไม่?",
 step3: "ตอบคำถามสั้น ๆ 7 ข้อเพื่อรับสิทธิ์!",
 step4: "ความสนใจ:",
 step5: "ข้อเสนอนี้ใช้ได้สำหรับ",
 step6: "คลิกที่นี่",
 }
 ,
 it: {
 step1: "SOLO OGGI",
 step2: "Vuoi guadagnare $1100 al giorno online?",
 step3: "Rispondi a 7 domande veloci per qualificarti!",
 step4: "Attenzione:",
 step5: "Offerta valida solo per",
 step6: "CLICCA QUI",
 }
 ,
 de: {
 step1: "NUR HEUTE",
 step2: "Willst du online €1100 am Tag verdienen?",
 step3: "Beantworte 7 schnelle Fragen um dich zu qualifizieren!",
 step4: "Achtung:",
 step5: "Angebot gilt nur für",
 step6: "HIER KLICKEN",
 }
 ,
 fr: {
 step1: "UNIQUEMENT AUJOURD'HUI",
 step2: "Voulez-vous gagner 1,100 $ par jour en ligne?",
 step3: "Répondez à 7 questions rapides pour vous qualifier!",
 step4: "Attention:",
 step5: "Offre valable uniquement pour",
 step6: "CLIQUEZ ICI",
 }
 ,
 nl: {
 step1: "ALLEEN VANDAAG",
 step2: "Wil je online $1100 per dag verdienen?",
 step3: "BBeantwoord 7 korte vragen om in aanmerking te komen!",
 step4: "Aandacht:",
 step5: "Aanbieding alleen geldig voor",
 step6: "KLIK HIER",
 }
 ,
 fil: {
 step1: "NGAYON LANG NGAYON",
 step2: "Nais mo bang kumita ng $1100 bawat araw sa online?",
 step3: "Sagutin ang 7 mabilis na mga katanungan upang maging kwalipikado!",
 step4: "Pansin:",
 step5: "May bisa lang ang alok para sa",
 step6: "PINDUTIN DITO",
 }
 ,
 vi: {
 step1: "CHỈ NGÀY HÔM NAY",
 step2: "Bạn có muốn kiếm 1.100 đô la mỗi ngày trực tuyến không?",
 step3: "Trả lời 7 câu hỏi nhanh để đủ điều kiện!",
 step4: "Chú ý:",
 step5: "Ưu đãi chỉ hợp lệ cho",
 step6: "BẤM VÀO ĐÂY",
 }
 ,
 ms: {
 step1: "HARI INI SAHAJA",
 step2: "Adakah anda ingin memperoleh $1100 sehari dalam talian?",
 step3: "Jawab 7 soalan pantas untuk memenuhi syarat!",
 step4: "Perhatian:",
 step5: "Tawaran hanya sah untuk",
 step6: "TEKAN DI SINI",
 }
 ,
 ru: {
 step1: "ТОЛЬКО СЕГОДНЯ",
 step2: "Вы хотите зарабатывать 1.100 долларов в день в Интернете?",
 step3: "Ответьте на 7 быстрых вопросов, чтобы пройти квалификацию!",
 step4: "Внимание:",
 step5: "Предложение действительно только для",
 step6: "КЛИКНИТЕ СЮДА",
 }
 ,           
};
$(document).ready(function () {
  var langBrowser =
      navigator.language || (navigator.languages && navigator.languages[0]),
      param = langs[langBrowser];
  if (param == undefined && langBrowser && langBrowser.length > 0) {
    var parsedLang = langBrowser.slice(0, 2);
    if (langs[parsedLang]) {
      param = langs[parsedLang];
    }
  }
  if (param == undefined) {
    param = langs["en"];
    // 'en' - default language, if you want change language, please select in object abbreviation. Example: 'fr', 'ru' etc.
    $("#step1 p").text(param.step1);
    $("#step2").text(param.step2);
    $("#step3").text(param.step3);
    $("#step4").text(param.step4);
    $("#step5").text(param.step5);
    $("#step6 p").text(param.step6);
  }
  else {
    $("#step1 p").text(param.step1);
    $("#step2").text(param.step2);
    $("#step3").text(param.step3);
    $("#step4").text(param.step4);
    $("#step5").text(param.step5);
    $("#step6 p").text(param.step6);
  }
}
                  );
