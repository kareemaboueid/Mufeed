"use strict";
// STATE OF DATA ACCORDING TO THE CHECKBOXES:
// click on TASHEEL_APP_CHECK_TRUE ot _FALSE to control TASHEEL_APP_VERFIY:
$("#TASHEEL_APP_CHECK_FALSE").click(() => {
  $("#TASHEEL_APP_VERFIY").addClass("hide");
});
$("#TASHEEL_APP_CHECK_TRUE").click(() => {
  $("#TASHEEL_APP_VERFIY").removeClass("hide");
});
// click on WARRANT_SUPPORT_CHECK_TRUE ot _FALSE to control WARRANT_SUPPORT_VERFIY:
$("#WARRANT_SUPPORT_CHECK_FALSE").click(() => {
  $("#WARRANT_SUPPORT_VERFIY").addClass("hide");
});
$("#WARRANT_SUPPORT_CHECK_TRUE").click(() => {
  $("#WARRANT_SUPPORT_VERFIY").removeClass("hide");
});
// click on CUST_TRADE_LOG_TRUE ot _FALSE to control CUST_TRADE_LOG_VERFIY:
$("#CUST_TRADE_LOG_FALSE").click(() => {
  $("#CUST_TRADE_LOG_VERFIY").addClass("hide");
});
$("#CUST_TRADE_LOG_TRUE").click(() => {
  $("#CUST_TRADE_LOG_VERFIY").removeClass("hide");
});
// click on CHECK_CUST_SAVED_TRUE ot _FALSE to control CUST_SAVED_NO:
$("#CHECK_CUST_SAVED_FALSE").click(() => {
  $("#CUST_SAVED_NO").addClass("hide");
  $("#CUST_SAVED_DATE").addClass("hide");
  $("#MAKE_DATE_NOTE").addClass("hide");
});
$("#CHECK_CUST_SAVED_TRUE").click(() => {
  $("#CUST_SAVED_NO").removeClass("hide");
  $("#CUST_SAVED_DATE").removeClass("hide");
  $("#MAKE_DATE_NOTE").removeClass("hide");
});
// =====================================================

// STATE OF VIEW_CUST_NAME text:
// CUST_NAME_START on keyup, VIEW_CUST_NAME content update:
$("#CUST_NAME_START").change(function (e) {
  $("#VIEW_CUST_NAME1").text($("select#CUST_NAME_START option:checked").val());
});
// CUST_NAME on keyup, VIEW_CUST_NAME content update:
$("#CUST_NAME").keyup(function (e) {
  $("#VIEW_CUST_NAME2").text($("#CUST_NAME").val());
});
// CUST_NAME_END on keyup, VIEW_CUST_NAME content update:
$("#CUST_NAME_END").change(function (e) {
  $("#VIEW_CUST_NAME3").text($("select#CUST_NAME_END option:checked").val());
});
// CUST_NAME_SUFFIX on keyup, VIEW_CUST_NAME content update:
$("#CUST_NAME_SUFFIX").keyup(function (e) {
  $("#VIEW_CUST_NAME4").text($("#CUST_NAME_SUFFIX").val());
});
// when click on ADD_() button, add parenthesis around CUST_NAME_SUFFIX:
$("#add_parenthesis").click(function (e) {
  e.preventDefault();
  $("#parenthesis1").toggleClass("hide");
  $("#parenthesis2").toggleClass("hide");
});
// =====================================================

// click on every radio button to flash the ACC_DOCS_TEXT background color:
const ACC_DOCS_TEXTFlashBackColor = () => {
  $("#ACC_DOCS_TEXT_BOX").css("background-color", "#00bc9c");
  setTimeout(function () {
    $("#ACC_DOCS_TEXT_BOX").css("background-color", "transparent");
  }, 200);
};

document
  .getElementsByName("TASHEEL_APP_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("WARRANT_SUPPORT_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("CUST_TRADE_LOG_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("VAT_CERT_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("NATIONAL_ID_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("FORIGN_ID_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("MOVE_CREDIT_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("CUST_ATTORNEY_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("CUST_LICENSE_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("NATIONAL_ADDRESS_CHECK")[0]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("TASHEEL_APP_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("WARRANT_SUPPORT_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("CUST_TRADE_LOG_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("VAT_CERT_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("NATIONAL_ID_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("FORIGN_ID_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("MOVE_CREDIT_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("CUST_ATTORNEY_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("CUST_LICENSE_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
document
  .getElementsByName("NATIONAL_ADDRESS_CHECK")[1]
  .addEventListener("click", ACC_DOCS_TEXTFlashBackColor);
// =====================================================
