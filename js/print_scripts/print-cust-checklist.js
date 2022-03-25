"use strict";

/*
 * PRINT INDEX SCRIPT
 */

// FUNCTIONS ==================
// print number with commas for every 3 digits:
function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
// ========================================================================

// THE MAIN SCRIPT BUTTON: PRINT_INDEX_BTN
const PRINT_INDEX_BTN = document.querySelector("#print_index_btn");
// ========================================================================
// CUSTOMER DATA VARIABLES:
// CUSTOMER_NAME:
const CUST_NAME = document.querySelector("#CUST_NAME");
const custNameAll = document.getElementById("VIEW_CUST_NAME");
//CREDIT_LIMIT:
const CUST_CREDIT_LIMIT = document.getElementById("CUST_CREDIT_LIMIT");
const CUST_CREDIT_LIMIT_CURRENCY = document.getElementById(
  "CUST_CREDIT_LIMIT_CURRENCY"
);
// CUSTOMER_NO:
const CUST_NO = document.getElementById("CUST_NO");
//=========================================================================
// 1) TASHEEL_APP:
const TASHEEL_APP_CHECK = document.getElementsByName("TASHEEL_APP_CHECK");
const TASHEEL_APP_VERFIY = document.querySelector("#TASHEEL_APP_VERFIY");
// 2) WARRANT_SUPPORT:
const WARRANT_SUPPORT_CHECK = document.getElementsByName(
  "WARRANT_SUPPORT_CHECK"
);
const WARRANT_SUPPORT_VERFIY = document.querySelector(
  "#WARRANT_SUPPORT_VERFIY"
);
// 3) CUST_TRADE_LOG:
const CUST_TRADE_LOG_CHECK = document.getElementsByName("CUST_TRADE_LOG_CHECK");
const CUST_TRADE_DATE_EXP = document.querySelector("#CUST_TRADE_DATE_EXP");
// 4) VAT_CERT:
const VAT_CERT_CHECK = document.getElementsByName("VAT_CERT_CHECK");
// 5) NATIONAL_ID_CHECK:
const NATIONAL_ID_CHECK = document.getElementsByName("NATIONAL_ID_CHECK");
// 6) FORIGN_ID_CHECK:
const FORIGN_ID_CHECK = document.getElementsByName("FORIGN_ID_CHECK");
// 7) MOVE_CREDIT_CHECK:
const MOVE_CREDIT_CHECK = document.getElementsByName("MOVE_CREDIT_CHECK");
// 8) CUST_ATTORNEY_CHECK:
const CUST_ATTORNEY_CHECK = document.getElementsByName("CUST_ATTORNEY_CHECK");
// 9) CUST_LICENSE_CHECK:
const CUST_LICENSE_CHECK = document.getElementsByName("CUST_LICENSE_CHECK");
// 10) NATIONAL_ADDRESS_CHECK:
const NATIONAL_ADDRESS_CHECK = document.getElementsByName(
  "NATIONAL_ADDRESS_CHECK"
);
// 11) CHECK_CUST_SAVED:
const CHECK_CUST_SAVED = document.getElementsByName("CHECK_CUST_SAVED");
// 12) MAKE_DATE:
const MAKE_DATE = document.getElementById("MAKE_DATE");
// 13) EMPLOYEE_NAME:
const MAKE_EMPLOYEE_NAME = document.getElementById("MAKE_EMPLOYEE_NAME");
const REVIEW_EMPLOYEE_NAME = document.getElementById("REVIEW_EMPLOYEE_NAME");
const REGIST_EMPLOYEE_NAME = document.getElementById("REGIST_EMPLOYEE_NAME");
// ========================================================================
// true/false marks
const ALERT_BOX = document.getElementById("ALERT_BOX");
const trueMark = `<i class="bi bi-check2"></i>`;
const falseMark = `<i class="bi bi-x"></i>`;
// ========================================================================

// PRINT BUTTON FUNCTION:
PRINT_INDEX_BTN.addEventListener("click", () => {
  //==========================================//
  // THE INDEX RESULT:
  let INDEX_RESULT_PAGE = `
  <section id="RESULT_CONTENT">
    <div class="page_head">
      <img
        width="100px"
        src="../media/alsourayia-logo.png"
        alt="شركة السريع التجارية للأرضيات والمفروشات"
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
            <th class="table-header" style="width: 30%">قيمة الحد الإئتماني</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table-data">${CUST_NO.value}</td>
            <td class="table-data">
              ${
                $("#parenthesis1").hasClass("hide") &&
                $("#parenthesis2").hasClass("hide")
                  ? custNameAll.textContent
                      .replace("(", "")
                      .replace(")", "")
                      .trim()
                      .replace(/\s+/g, " ")
                  : custNameAll.textContent.trim().replace(/\s+/g, " ")
              }
            </td>
            <td class="table-data">
              ${numberWithCommas(CUST_CREDIT_LIMIT.value)} ${
    CUST_CREDIT_LIMIT_CURRENCY.value
  }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <br />
    <div>
      <table class="tg">
        <thead>
          <tr>
            <th class="table-header" style="width: 10%">م</th>
            <th class="table-header" style="width: 50%">
              المستنــــــــــــــد
            </th>
            <th class="table-header" style="width: 40%">
              الحالــــــــــــــة <br />
              ( موجود - غير موجود )
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table-header">1</td>
            <td class="table-data">ملف طلب تسهيلات</td>
            <td class="table-data">
              <div class="table-data-flex">
                ${
                  TASHEEL_APP_CHECK[0].checked
                    ? trueMark + TASHEEL_APP_VERFIY.value
                    : falseMark
                }
              </div>
            </td>
          </tr>
          <tr>
            <td class="table-header">2</td>
            <td class="table-data">أصل سند لأمر</td>
            <td class="table-data">
              <div class="table-data-flex">
                ${
                  WARRANT_SUPPORT_CHECK[0].checked
                    ? trueMark + WARRANT_SUPPORT_VERFIY.value
                    : falseMark
                }
              </div>
            </td>
          </tr>
          <tr>
            <td class="table-header">3</td>
            <td class="table-data">السجل التجاري</td>
            <td class="table-data">
              ${CUST_TRADE_LOG_CHECK[0].checked ? trueMark : falseMark}
            </td>
          </tr>
          <tr>
            <td class="table-header">4</td>
            <td class="table-data">شهادة التسجيل في ضريبة القيمة المضافة</td>
            <td class="table-data">
              ${VAT_CERT_CHECK[0].checked ? trueMark : falseMark}
            </td>
          </tr>
          <tr>
            <td class="table-header">5</td>
            <td class="table-data">هوية سعودي</td>
            <td class="table-data">
              ${NATIONAL_ID_CHECK[0].checked ? trueMark : falseMark}
            </td>
          </tr>
          <tr>
            <td class="table-header">6</td>
            <td class="table-data">هوية أجنبي</td>
            <td class="table-data">
              ${FORIGN_ID_CHECK[0].checked ? trueMark : falseMark}
            </td>
          </tr>
          <tr>
            <td class="table-header">7</td>
            <td class="table-data">إقرار نقل رصيد</td>
            <td class="table-data">
              ${MOVE_CREDIT_CHECK[0].checked ? trueMark : falseMark}
            </td>
          </tr>
          <tr>
            <td class="table-header">8</td>
            <td class="table-data">إثبات وكالة</td>
            <td class="table-data">
              ${CUST_ATTORNEY_CHECK[0].checked ? trueMark : falseMark}
            </td>
          </tr>
          <tr>
            <td class="table-header">9</td>
            <td class="table-data">رخصة نشاط تجاري</td>
            <td class="table-data">
              ${CUST_LICENSE_CHECK[0].checked ? trueMark : falseMark}
            </td>
          </tr>
          <tr>
            <td class="table-header">10</td>
            <td class="table-data">عنوان وطني</td>
            <td class="table-data">
              ${NATIONAL_ADDRESS_CHECK[0].checked ? trueMark : falseMark}
            </td>
          </tr>
          <tr>
            <td class="table-header">11</td>
            <td class="table-data">تاريخ إنتهاء السجل التجاري</td>
            <td class="table-data">
            ${
              CUST_TRADE_DATE_EXP.value == "" ||
              CUST_TRADE_LOG_CHECK[1].checked == true
                ? "-"
                : $("#VIEW_TRADE_DATE_EXP").text()
            }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <br />
    <div class="employees-signs">
      <div class="sign-container">
        <div class="sign-title">إعداد :</div>
        <div class="sign-name">${MAKE_EMPLOYEE_NAME.value}</div>
      </div>
      <div class="sign-container">
        <div class="sign-title">مراجعة :</div>
        <div class="sign-name">${REVIEW_EMPLOYEE_NAME.value}</div>
      </div>
      <div class="sign-container">
        <div class="sign-title">تسجيل في النظام الآلي :</div>
        <div class="sign-name">${REGIST_EMPLOYEE_NAME.value}</div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="make-date">
      <div class="make-date-container">
        <div class="make-date-title">تاريخ الإعداد :</div>
        <div class="make-date-value">
          ${$("#VIEW_MAKE_DATE").text()}
          </div>
      </div>
      <div class="make-date-container"></div>
      <div class="make-date-container"></div>
    </div>
  </section>
  `;
  //==========================================//
  // check if all inputs are filled

  if (
    CUST_NAME.value !== "" &&
    CUST_CREDIT_LIMIT.value !== "" &&
    CUST_NO.value !== "" &&
    MAKE_EMPLOYEE_NAME.value !== "" &&
    REVIEW_EMPLOYEE_NAME.value !== "" &&
    REGIST_EMPLOYEE_NAME.value !== ""
  ) {
    // 1. show loading window for 1500 s:
    document.querySelector("#LOADING_WIN").classList.remove("hide");
    document.querySelector("#LOADING_WIN_LAYOUT").classList.remove("hide");
    setTimeout(() => {
      document.querySelector("#LOADING_WIN").classList.add("hide");
      document.querySelector("#LOADING_WIN_LAYOUT").classList.add("hide");
    }, 1500);
    // 2. close main index page and show print window:
    setTimeout(() => {
      document.getElementById("INDEX_MAIN_PAGE").classList.add("hide");
      document.getElementById("INDEX_RESULT_PAGE").classList.remove("hide");
      document.getElementById("RESULT_ACTION_BUTTONS").classList.remove("hide");
      document.getElementById("INDEX_RESULT_PAGE").innerHTML =
        INDEX_RESULT_PAGE;
      document.body.style.backgroundColor = "#fff";
    }, 2000);
    // 3. show success message:
    setTimeout(function () {
      ALERT_BOX.textContent = "تم معالجة البيانات بنجاح، المستند جاهز للطباعة.";
      ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
      ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
      ALERT_BOX.classList.remove("hide");
    }, 2500);
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
    }, 4900);
  } else {
    ALERT_BOX.textContent = "تأكد من إدخال البيانات بشكل صحيح!";
    ALERT_BOX.style.backgroundColor = "rgb(243, 164, 164)";
    ALERT_BOX.style.border = "1px solid rgb(182, 84, 84)";
    ALERT_BOX.classList.remove("hide");
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
    }, 2000);
  }
});

// RESULT_CONTENT_CLOSE_BUTTON
document
  .getElementById("RESULT_CONTENT_CLOSE_BUTTON")
  .addEventListener("click", () => {
    document.getElementById("INDEX_MAIN_PAGE").classList.remove("hide");
    document.getElementById("INDEX_RESULT_PAGE").classList.add("hide");
    document.getElementById("RESULT_ACTION_BUTTONS").classList.add("hide");
    document.getElementById("INDEX_RESULT_PAGE").innerHTML = "";
    document.body.style.backgroundColor = "var(--sec-color-200)";
  });

// Reset Button
document.getElementById("reset_form_btn").addEventListener("click", () => {
  // reset all inputs:
  CUST_NAME.value = "";
  custNameAll.textContent = "";
  CUST_CREDIT_LIMIT.value = "";
  CUST_NO.value = "";
  CUST_TRADE_DATE_EXP.value = "";
  MAKE_DATE.value = "";
  // show alert box:
  ALERT_BOX.textContent = "تم مسح جميع حقول الإدخال!";
  ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
  ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
  ALERT_BOX.classList.remove("hide");
  setTimeout(function () {
    ALERT_BOX.style.backgroundColor = "none";
    ALERT_BOX.style.border = "none";
    ALERT_BOX.classList.add("hide");
  }, 2800);
});
