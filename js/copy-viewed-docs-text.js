"use strict";

// every 100 ms ACC_DOCS_TEXT.textContent = "hello world":
setInterval(function () {
  $(
    "#ACC_DOCS_TEXT"
  ).text(`${TASHEEL_APP_CHECK[0].checked ? "ملف طلب تسهيلات" + " " + TASHEEL_APP_VERFIY.value + " -" : "لا يوجد ملف طلب تسهيلات" + " -"}${WARRANT_SUPPORT_CHECK[0].checked ? "سند لأمر" + " " + WARRANT_SUPPORT_VERFIY.value : "لا يوجد سند لأمر"}${CUST_TRADE_LOG_CHECK[0].checked ? " - " + "سجل تجاري" : ""}${VAT_CERT_CHECK[0].checked ? " - " + "شهادة ضريبية" : " - " + "لا يوجد شهادة ضريبية"}${NATIONAL_ID_CHECK[0].checked ? " - " + "هوية وطنية" : ""}${FORIGN_ID_CHECK[0].checked ? " - " + "هوية أجنبي" : ""}${MOVE_CREDIT_CHECK[0].checked ? " - " + "إقرار نقل رصيد" : ""}${CUST_ATTORNEY_CHECK[0].checked ? " - " + "إثبات وكالة" : ""}${CUST_LICENSE_CHECK[0].checked ? " - " + "رخصة بلدية" : ""}${NATIONAL_ADDRESS_CHECK[0].checked ? " - " + "عنوان وطني" : ""}
`);
}, 200);

// ckick COPY_ACC_DOCS_TEXT and select and copy the whole customer name from ACC_DOCS_TEXT text to clipboard:
function copyAccDocsText() {
  navigator.clipboard.writeText($("#ACC_DOCS_TEXT").text());

  ALERT_BOX.textContent = "تم نسخ نص مستندات فتح الحساب !";
  ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
  ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
  ALERT_BOX.classList.remove("hide");
  $("#COPY_ACC_DOCS_TEXT .bi-clipboard-fill").addClass("hide");
  $("#COPY_ACC_DOCS_TEXT .bi-clipboard-check-fill").removeClass("hide");

  setTimeout(function () {
    ALERT_BOX.style.backgroundColor = "none";
    ALERT_BOX.style.border = "none";
    ALERT_BOX.classList.add("hide");
    $("#COPY_ACC_DOCS_TEXT .bi-clipboard-fill").removeClass("hide");
    $("#COPY_ACC_DOCS_TEXT .bi-clipboard-check-fill").addClass("hide");
  }, 2800);
}

$("#COPY_ACC_DOCS_TEXT").click(copyAccDocsText);
