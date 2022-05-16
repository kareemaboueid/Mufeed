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
<section id=RESULT_CONTENT><div class=page_head><img alt="شركة السريع التجارية للأرضيات والمفروشات"src=../media/alsourayia-logo.png width=100px><div></div></div><h1 class="index-title">فهرس مستندات فتح حساب</h1><div><table class=tg><thead><tr><th class=table-header style=width:20%>رقم العميل<th class=table-header style=width:50%>إسم العميل<th class=table-header style=width:30%>قيمة الحد الإئتماني<tr><td class=table-data>${$(
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
  ).val()}</table></div><br><br><div><table class=tg><thead><tr><th class=table-header style=width:10%>م<th class=table-header style=width:50%>المستنــــــــــــــد<th class=table-header style=width:40%>الحالــــــــــــــة<br>( موجود - غير موجود )<tr><td class=table-header>1<td class=table-data>ملف طلب تسهيلات<td class=table-data><div class=table-data-flex>${
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
  }</table></div><br><br><div class=employees-signs>${
    $("#MAKE_EMPLOYEE_NAME").val() == ""
      ? ""
      : `<div class=sign-container><div class=sign-title>إعداد :</div><div class=sign-name>${$(
          "#MAKE_EMPLOYEE_NAME"
        ).val()}</div></div>`
  }${
    $("#REVIEW_EMPLOYEE_NAME").val() == ""
      ? ""
      : `<div class=sign-container><div class=sign-title>مراجعة :</div><div class=sign-name>${$(
          "#REVIEW_EMPLOYEE_NAME"
        ).val()}</div></div>`
  }${
    $("#REGIST_EMPLOYEE_NAME").val() == ""
      ? ""
      : `<div class=sign-container><div class=sign-title>تسجيل في النظام الآلي :</div><div class=sign-name>${$(
          "#REGIST_EMPLOYEE_NAME"
        ).val()}</div></div>`
  }</div><br><br><br><br><div class=make-date><div class=make-date-container><div class=make-date-title>تاريخ الإعداد :</div><div class=make-date-value>${$(
    "#VIEW_MAKE_DATE"
  ).text()}</div></div><div class=make-date-container></div><div class=make-date-container></div></div></section>
  `;

  // VALIDATION 1: check if all fields are not filled:
  if (
    $("#CUST_NAME").val().length < 1 ||
    $("#CUST_CREDIT_LIMIT").val().length < 1 ||
    $("#CUST_NO").val().length < 1
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

// FUNCTION: click RESET_FORM_BTN:
$("#RESET_FORM_BTN").click(() => {
  if (
    $("#ADD_SUFFIX_PARENS_BTN").hasClass("hide") ||
    $("#ADD_OLD_SUFFIX_PARENS_BTN").hasClass("hide")
  ) {
    $("#ADD_SUFFIX_PARENS_BTN").removeClass("hide");
    $("#REMOVE_SUFFIX_PARENS_BTN").addClass("hide");
    $("#ADD_OLD_SUFFIX_PARENS_BTN").removeClass("hide");
    $("#REMOVE_OLD_SUFFIX_PARENS_BTN").addClass("hide");
  }
  if ($("#CUST_PROJECT_CHECK").is(":checked")) {
    $("#CUST_PROJECT_CHECK").prop("checked", false);
  }
  if ($("#CUST_MARKET").prop("disabled", true)) {
    $("#CUST_MARKET").prop("disabled", false);
  }
  if (
    $Name("MOVE_CREDIT_CHECK")[0].checked == true ||
    $Name("CHECK_CUST_SAVED")[0].checked == true
  ) {
    $Name("MOVE_CREDIT_CHECK")[0].checked = false;
    $Name("MOVE_CREDIT_CHECK")[1].checked = true;
    $Name("CHECK_CUST_SAVED")[0].checked = false;
    $Name("CHECK_CUST_SAVED")[1].checked = true;
  }

  if (
    !$("#MOVE_CREDIT_IN_NO_BOX").hasClass("hide") ||
    !$("#MOVE_CREDIT_IN_NAME_BOX").hasClass("hide") ||
    !$("#MOVE_CREDIT_IN_RES_BOX").hasClass("hide") ||
    !$("#CUST_SAVED_NO").hasClass("hide") ||
    !$("#CUST_SAVED_DATE").hasClass("hide") ||
    !$("#VIEW_MAKE_DATE").hasClass("hide") ||
    $("#TASHEEL_APP_VERFIY").hasClass("hide") ||
    $("#WARRANT_SUPPORT_VERFIY").hasClass("hide") ||
    $("#CUST_TRADE_LOG_VERFIY").hasClass("hide") ||
    $("#VIEW_TRADE_DATE_EXP").hasClass("hide")
  ) {
    $("#MOVE_CREDIT_IN_NO_BOX").addClass("hide");
    $("#MOVE_CREDIT_IN_NAME_BOX").addClass("hide");
    $("#MOVE_CREDIT_IN_RES_BOX").addClass("hide");
    $("#CUST_SAVED_NO").addClass("hide");
    $("#CUST_SAVED_DATE").addClass("hide");
    $("#VIEW_MAKE_DATE").addClass("hide");
    $("#TASHEEL_APP_VERFIY").removeClass("hide");
    $("#WARRANT_SUPPORT_VERFIY").removeClass("hide");
    $("#CUST_TRADE_LOG_VERFIY").removeClass("hide");
    $("#VIEW_TRADE_DATE_EXP").removeClass("hide");
  }
});

// FUNCTION: click PRINT_EMPTY_PAGE_BTN:
$("#PRINT_EMPTY_PAGE_BTN").click(() => {
  // HTML: set the index result html:
  let INDEX_RESULT_HTML = `
<section id="RESULT_CONTENT">
        <div class="page_head">
          <img
            alt="شركة السريع التجارية للأرضيات والمفروشات"
            src="../media/alsourayia-logo.png"
            width="100px"
          />
          <div></div>
        </div>
        <h4 class="index-title">فهرس مستندات فتح حساب</h4>
        <div>
          <table class="tg">
            <thead>
              <tr>
                <th class="table-header" style="width: 20%">رقم العميل</th>
                <th class="table-header" style="width: 50%">إسم العميل</th>
                <th class="table-header" style="width: 30%">
                  قيمة الحد الإئتماني
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="table-data p-1-5rem"></td>
                <td class="table-data p-1-5rem"></td>
                <td class="table-data p-1-5rem"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br /><br />
        <div>
          <table class="tg">
            <thead>
              <tr>
                <th class="table-header" style="width: 10%">م</th>
                <th class="table-header" style="width: 50%">
                  المستنــــــــــــــد
                </th>
                <th class="table-header" style="width: 40%">
                  الحالــــــــــــــة<br />( موجود - غير موجود )
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="table-header">1</td>
                <td class="table-data">ملف طلب تسهيلات</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">2</td>
                <td class="table-data">أصل سند لأمر</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">3</td>
                <td class="table-data">السجل التجاري</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">4</td>
                <td class="table-data">
                  شهادة التسجيل في ضريبة القيمة المضافة
                </td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">5</td>
                <td class="table-data">هوية سعودي</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">6</td>
                <td class="table-data">هوية أجنبي</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">7</td>
                <td class="table-data">إقرار نقل رصيد</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">8</td>
                <td class="table-data">إثبات وكالة</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">9</td>
                <td class="table-data">رخصة نشاط تجاري</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">10</td>
                <td class="table-data">عنوان وطني</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
              <tr>
                <td class="table-header">11</td>
                <td class="table-data">تاريخ إنتهاء السجل التجاري</td>
                <td class="table-data p-1-5rem"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br /><br />
        <div class="employees-signs">
          <div class="sign-container">
            <div class="sign-title">إعداد :</div>
            <div class="sign-name"></div>
          </div>
          <div class="sign-container">
            <div class="sign-title">مراجعة :</div>
            <div class="sign-name"></div>
          </div>
          <div class="sign-container">
            <div class="sign-title">تسجيل في النظام الآلي :</div>
            <div class="sign-name"></div>
          </div>
        </div>
        <br /><br /><br /><br />
        <div class="make-date">
          <div class="make-date-container">
            <div class="make-date-title">تاريخ الإعداد :</div>
            <div class="make-date-value"></div>
          </div>
          <div class="make-date-container"></div>
          <div class="make-date-container"></div>
        </div>
      </section>
  `;

  // PROGRESS 2: close form page and show result html (for startTime + 100):
  generateReport(INDEX_RESULT_HTML, 0);

  setTimeout(() => {
    window.print();
  }, 50);

  setTimeout(() => {
    $("#INDEX_MAIN_PAGE").removeClass("hide");
    $("#INDEX_RESULT_PAGE").addClass("hide");
    $("#RESULT_ACTION_BUTTONS").addClass("hide");
    $("#INDEX_RESULT_PAGE").html("");
    $("body").css("background-color", "var(--sec-color-200)");
  }, 55);
});
