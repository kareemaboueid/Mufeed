"use strict";

// click on ADD_SUFFIX_PARENS_BTN to add parentheses to CUST_NAME_SUFFIX.value:
// click on REMOVE_SUFFIX_PARENS_BTN to remove parentheses from CUST_NAME_SUFFIX.value:
// change state of VIEW_CUST_NAME text every 200 ms:
$("#ADD_SUFFIX_PARENS_BTN").click(function (e) {
  e.preventDefault();
  if ($("#CUST_NAME_SUFFIX").val().length > 0) {
    $("#CUST_NAME_SUFFIX").val(`(${$("#CUST_NAME_SUFFIX").val()})`);
    $("#ADD_SUFFIX_PARENS_BTN").addClass("hide");
    $("#REMOVE_SUFFIX_PARENS_BTN").removeClass("hide");
  }
});
$("#REMOVE_SUFFIX_PARENS_BTN").click(function (e) {
  e.preventDefault();
  if ($("#CUST_NAME_SUFFIX").val().length > 0) {
    $("#CUST_NAME_SUFFIX").val($("#CUST_NAME_SUFFIX").val().slice(1, -1));
    $("#REMOVE_SUFFIX_PARENS_BTN").addClass("hide");
    $("#ADD_SUFFIX_PARENS_BTN").removeClass("hide");
  }
});
setInterval(function () {
  let resText =
    $("select#CUST_NAME_START option:checked").val() +
    " " +
    $("#CUST_NAME").val() +
    " " +
    $("select#CUST_NAME_END option:checked").val() +
    " " +
    $("#CUST_NAME_SUFFIX").val();

  $("#VIEW_CUST_NAME").text(resText.trim().replace(/\s\s+/g, " "));
}, 200);
// ==========================================================================

// state of all cust checklist radio buttons:
$("#TASHEEL_APP_CHECK_FALSE").click(() => {
  $("#TASHEEL_APP_VERFIY").addClass("hide");
});
$("#TASHEEL_APP_CHECK_TRUE").click(() => {
  $("#TASHEEL_APP_VERFIY").removeClass("hide");
});
$("#WARRANT_SUPPORT_CHECK_FALSE").click(() => {
  $("#WARRANT_SUPPORT_VERFIY").addClass("hide");
});
$("#WARRANT_SUPPORT_CHECK_TRUE").click(() => {
  $("#WARRANT_SUPPORT_VERFIY").removeClass("hide");
});
$("#CUST_TRADE_LOG_FALSE").click(() => {
  $("#CUST_TRADE_LOG_VERFIY").addClass("hide");
});
$("#CUST_TRADE_LOG_TRUE").click(() => {
  $("#CUST_TRADE_LOG_VERFIY").removeClass("hide");
});
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
$("#MOVE_CREDIT_FALSE").click(() => {
  $("#MOVE_CREDIT_TEXT_CHECK_BOX").addClass("hide");
});
$("#MOVE_CREDIT_TRUE").click(() => {
  $("#MOVE_CREDIT_TEXT_CHECK_BOX").removeClass("hide");
});
// ==========================================================================

// change state of ACC_DOCS_TEXT text every 200 ms:
setInterval(function () {
  let resText = `${
    TASHEEL_APP_CHECK[0].checked
      ? "ملف طلب تسهيلات" + " " + TASHEEL_APP_VERFIY.value + " - "
      : "لا يوجد ملف طلب تسهيلات" + " -"
  }${
    WARRANT_SUPPORT_CHECK[0].checked
      ? "سند لأمر" + " " + WARRANT_SUPPORT_VERFIY.value
      : "لا يوجد سند لأمر"
  }${CUST_TRADE_LOG_CHECK[0].checked ? " - " + "سجل تجاري" : ""}${
    VAT_CERT_CHECK[0].checked
      ? " - " + "شهادة ضريبية"
      : " - " + "لا يوجد شهادة ضريبية"
  }${NATIONAL_ID_CHECK[0].checked ? " - " + "هوية وطنية" : ""}${
    FORIGN_ID_CHECK[0].checked ? " - " + "هوية أجنبي" : ""
  }${MOVE_CREDIT_CHECK[0].checked ? " - " + "إقرار نقل رصيد" : ""}${
    CUST_ATTORNEY_CHECK[0].checked ? " - " + "إثبات وكالة" : ""
  }${CUST_LICENSE_CHECK[0].checked ? " - " + "رخصة بلدية" : ""}${
    NATIONAL_ADDRESS_CHECK[0].checked ? " - " + "عنوان وطني" : ""
  }`;

  $("#ACC_DOCS_TEXT").text(resText.trim().replace(/\s\s+/g, " "));
}, 200);
// ==========================================================================

// click on ADD_OLD_SUFFIX_PARENS_BTN to add parentheses to OLD_CUST_NAME_SUFFIX.value:
// click on REMOVE_OLD_SUFFIX_PARENS_BTN to remove parentheses from OLD_CUST_NAME_SUFFIX.value:
// change state of VIEW_OLD_CUST_NAME text every 200 ms:
$("#ADD_OLD_SUFFIX_PARENS_BTN").click(function (e) {
  e.preventDefault();
  if ($("#OLD_CUST_NAME_SUFFIX").val().length > 0) {
    $("#OLD_CUST_NAME_SUFFIX").val(`(${$("#OLD_CUST_NAME_SUFFIX").val()})`);
    $("#ADD_OLD_SUFFIX_PARENS_BTN").addClass("hide");
    $("#REMOVE_OLD_SUFFIX_PARENS_BTN").removeClass("hide");
  }
});
$("#REMOVE_OLD_SUFFIX_PARENS_BTN").click(function (e) {
  e.preventDefault();
  if ($("#OLD_CUST_NAME_SUFFIX").val().length > 0) {
    $("#OLD_CUST_NAME_SUFFIX").val(
      $("#OLD_CUST_NAME_SUFFIX").val().slice(1, -1)
    );
    $("#REMOVE_OLD_SUFFIX_PARENS_BTN").addClass("hide");
    $("#ADD_OLD_SUFFIX_PARENS_BTN").removeClass("hide");
  }
});
setInterval(function () {
  let resText =
    $("select#OLD_CUST_NAME_START option:checked").val() +
    " " +
    $("#OLD_CUST_NAME").val() +
    " " +
    $("select#OLD_CUST_NAME_END option:checked").val() +
    " " +
    $("#OLD_CUST_NAME_SUFFIX").val();

  $("#VIEW_OLD_CUST_NAME").text(resText.trim().replace(/\s\s+/g, " "));
}, 200);
// ==========================================================================

// change state of MOVE_CREDIT_TEXT_RESULT text every 200 ms:
setInterval(function () {
  let resText =
    "نقل رصيد حساب عميل رقم" +
    " " +
    $("#OLD_CUST_NO").val() +
    " " +
    "بإسم" +
    " " +
    "(" +
    $("#VIEW_OLD_CUST_NAME").text() +
    ")" +
    " " +
    "إلى حساب عميل رقم" +
    " " +
    $("#CUST_NO").val() +
    " " +
    "بإسم" +
    " " +
    "(" +
    $("#VIEW_CUST_NAME").text() +
    ")" +
    " " +
    "بتعميد أ/ هشام ياسين";
  // ---------------

  $("#MOVE_CREDIT_TEXT_RESULT").text(resText.trim().replace(/\s\s+/g, " "));
}, 200);
// ==========================================================================
