"use strict";

/*PRINT CUST CHECKLIST*/

// FUNCTION: get number with commas for every 3 digits:
const numberWithCommas = number => {
  let parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

// HTML: set true and false check marks:
const trueMark = `<i class="bi bi-check2"></i>`;
const falseMark = `<i class="bi bi-x"></i>`;

// FUNCTION: click PRINT_INDEX_BTN:
$("#PRINT_INDEX_BTN").click(() => {
  // HTML: set the index result html:
  let INDEX_RESULT_HTML = `
<section id=RESULT_CONTENT><div class=page_head><img alt="شركة السريع التجارية للأرضيات والمفروشات"src=../media/alsourayia-logo.png width=100px><div></div></div><h4 class=index-title>فهرس مستندات فتح حساب</h4><div><table class=tg><thead><tr><th class=table-header style=width:20%>رقم العميل<th class=table-header style=width:50%>إسم العميل<th class=table-header style=width:30%>قيمة الحد الإئتماني<tbody><tr><td class=table-data>${$(
    "#CUST_NO"
  ).val()}<td class=table-data>${
    $("#parenthesis1").hasClass("hide") && $("#parenthesis2").hasClass("hide")
      ? $("#VIEW_CUST_NAME")
          .text()
          .replace("(", "")
          .replace(")", "")
          .trim()
          .replace(/\s+/g, " ")
      : $("#VIEW_CUST_NAME").text().trim().replace(/\s+/g, " ")
  }<td class=table-data>${numberWithCommas($("#CUST_CREDIT_LIMIT").val())} ${$(
    "#CUST_CREDIT_LIMIT_CURRENCY"
  ).val()}</table></div><br><br><div><table class=tg><thead><tr><th class=table-header style=width:10%>م<th class=table-header style=width:50%>المستنــــــــــــــد<th class=table-header style=width:40%>الحالــــــــــــــة<br>( موجود - غير موجود )<tbody><tr><td class=table-header>1<td class=table-data>ملف طلب تسهيلات<td class=table-data><div class=table-data-flex>${
    $Name("TASHEEL_APP_CHECK")[0].checked
      ? trueMark + $("#TASHEEL_APP_VERFIY").val()
      : falseMark
  }</div><tr><td class=table-header>2<td class=table-data>أصل سند لأمر<td class=table-data><div class=table-data-flex>${
    $Name("WARRANT_SUPPORT_CHECK")[0].checked
      ? trueMark + $("#WARRANT_SUPPORT_VERFIY").val()
      : falseMark
  }</div><tr><td class=table-header>3<td class=table-data>السجل التجاري<td class=table-data>${
    $Name("CUST_TRADE_LOG_CHECK")[0].checked ? trueMark : falseMark
  }<tr><td class=table-header>4<td class=table-data>شهادة التسجيل في ضريبة القيمة المضافة<td class=table-data>${
    $Name("VAT_CERT_CHECK")[0].checked ? trueMark : falseMark
  }<tr><td class=table-header>5<td class=table-data>هوية سعودي<td class=table-data>${
    $Name("NATIONAL_ID_CHECK")[0].checked ? trueMark : falseMark
  }<tr><td class=table-header>6<td class=table-data>هوية أجنبي<td class=table-data>${
    $Name("FORIGN_ID_CHECK")[0].checked ? trueMark : falseMark
  }<tr><td class=table-header>7<td class=table-data>إقرار نقل رصيد<td class=table-data>${
    $Name("MOVE_CREDIT_CHECK")[0].checked ? trueMark : falseMark
  }<tr><td class=table-header>8<td class=table-data>إثبات وكالة<td class=table-data>${
    $Name("CUST_ATTORNEY_CHECK")[0].checked ? trueMark : falseMark
  }<tr><td class=table-header>9<td class=table-data>رخصة نشاط تجاري<td class=table-data>${
    $Name("CUST_LICENSE_CHECK")[0].checked ? trueMark : falseMark
  }<tr><td class=table-header>10<td class=table-data>عنوان وطني<td class=table-data>${
    $Name("NATIONAL_ADDRESS_CHECK")[0].checked ? trueMark : falseMark
  }<tr><td class=table-header>11<td class=table-data>تاريخ إنتهاء السجل التجاري<td class=table-data>${
    $("#CUST_TRADE_DATE_EXP").val() == "" ||
    $Name("CUST_TRADE_LOG_CHECK")[1].checked == true
      ? "-"
      : $("#VIEW_TRADE_DATE_EXP").text()
  }</table></div><br><br><div class=employees-signs><div class=sign-container><div class=sign-title>إعداد :</div><div class=sign-name>${$(
    "#MAKE_EMPLOYEE_NAME"
  ).val()}</div></div><div class=sign-container><div class=sign-title>مراجعة :</div><div class=sign-name>${$(
    "#REVIEW_EMPLOYEE_NAME"
  ).val()}</div></div><div class=sign-container><div class=sign-title>تسجيل في النظام الآلي :</div><div class=sign-name>${$(
    "#REGIST_EMPLOYEE_NAME"
  ).val()}</div></div></div><br><br><br><br><div class=make-date><div class=make-date-container><div class=make-date-title>تاريخ الإعداد :</div><div class=make-date-value>${$(
    "#VIEW_MAKE_DATE"
  ).text()}</div></div><div class=make-date-container></div><div class=make-date-container></div></div></section>
  `;

  // VALIDATION 1: check if all fields are not filled:
  if (
    $("#CUST_NAME").val().length < 1 ||
    $("#CUST_CREDIT_LIMIT").val().length < 1 ||
    $("#CUST_NO").val().length < 1 ||
    $("#MAKE_EMPLOYEE_NAME").val().length < 1 ||
    $("#REVIEW_EMPLOYEE_NAME").val().length < 1 ||
    $("#REGIST_EMPLOYEE_NAME").val().length < 1
  ) {
    // PROGRESS 1: show fail message:
    showFailMessage("تأكد من إدخال البيانات بشكل صحيح!", 0);

    // PROGRESS 2: hide fail message (for startTime + 100):
    hideFailMessage(1000);
  }
  // VALIDATION 2: check if fields are filled:
  else {
    // PROGRESS 1: show loading window (for startTime):
    showLoadingWindow(1000);

    // PROGRESS 2: close form page and show result html (for startTime + 100):
    generateReport(INDEX_RESULT_HTML, 1100);

    // PROGRESS 3: show success message (for startTime + 200):
    showSuccessMessage("تم معالجة البيانات بنجاح، المستند جاهز للطباعة.", 1150);

    // PROGRESS 4: hide success message (for startTime + 300):
    hideSuccessMessage(2150);
  }
});
