"use strict";

// generate date dow day / month / year:
const nowDay = new Date().getDate();
const nowMonth = new Date().getMonth() + 1;
const nowYear = new Date().getFullYear();

// print number of 2 digits as two digits:
const padtwo = num => {
  return num < 10 ? `0${num}` : num;
};

// convert latin numbers to arabic numbers and export it:
const latinToArNum = number => {
  let arNumOpj = {
    0: "٠",
    1: "١",
    2: "٢",
    3: "٣",
    4: "٤",
    5: "٥",
    6: "٦",
    7: "٧",
    8: "٨",
    9: "٩",
    "/": "/",
  };
  let arNumStr = "";
  for (let i = 0; i < number.length; i++) {
    arNumStr += arNumOpj[number[i]];
  }
  return arNumStr;
};

// print number of only 8 digits as a date format:
const formatDate = date => {
  // check if entered number length is 8:
  let dateParts = date.split("");
  let dateGregHij = "";
  // split date into 3 parts, each with 2 digits, between each part is a slash:
  let dateFormat =
    dateParts[4] +
    dateParts[5] +
    dateParts[6] +
    dateParts[7] +
    "/" +
    dateParts[2] +
    dateParts[3] +
    "/" +
    dateParts[0] +
    dateParts[1];
  // check if date is hijri or gregorian:
  dateParts[4] === "1" && dateParts[5] === "4"
    ? (dateGregHij = "هـ")
    : (dateGregHij = "م");

  // if dateParts[0] and dateParts[1] make the days greater than 31, return an error:
  // if dateParts[2] and dateParts[3] make the month greater than 12, return an error:
  if (
    (dateParts[0] === "3" && dateParts[1] > 1) ||
    (dateParts[2] === "1" && dateParts[3] > 2)
  ) {
    return "تأكد من إدخال التاريخ بشكل صحيح";
  }
  // if entered date is between 1 and 8 inform user that it's being processing:
  else if (date.length > 0 && date.length < 8) {
    return "جاري المعالجة . . .";
  }
  // return date in gregorian or hijri format:
  else if (date.length === 8) {
    return latinToArNum(dateFormat) + " " + dateGregHij;
  }
  // if entered number length is not 8:
  else {
    return "تأكد من إدخال التاريخ بشكل صحيح";
  }
};
// ==========================================================

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
  $("#VIEW_TRADE_DATE_EXP").addClass("hide");
});
$("#CUST_TRADE_LOG_TRUE").click(() => {
  $("#CUST_TRADE_LOG_VERFIY").removeClass("hide");
  $("#VIEW_TRADE_DATE_EXP").removeClass("hide");
});
$("#CHECK_CUST_SAVED_FALSE").click(() => {
  $("#CUST_SAVED_NO").addClass("hide");
  $("#CUST_SAVED_DATE").addClass("hide");
  $("#VIEW_MAKE_DATE").addClass("hide");
});
$("#CHECK_CUST_SAVED_TRUE").click(() => {
  $("#CUST_SAVED_NO").removeClass("hide");
  $("#CUST_SAVED_DATE").removeClass("hide");
  $("#VIEW_MAKE_DATE").removeClass("hide");
});
$("#MOVE_CREDIT_FALSE").click(() => {
  $("#MOVE_CREDIT_TEXT_CHECK_BOX").addClass("hide");
});
$("#MOVE_CREDIT_TRUE").click(() => {
  $("#MOVE_CREDIT_TEXT_CHECK_BOX").removeClass("hide");
});
// ==========================================================================

// change state of VIEW_MAKE_DATE and VIEW_TRADE_DATE_EXP text every 200 ms:
setInterval(function () {
  // if #MAKE_DATE is empty, return now date. else return #MAKE_DATE value:
  $($("#VIEW_MAKE_DATE")).text(
    $("#MAKE_DATE").val() == ""
      ? formatDate(padtwo(nowDay) + padtwo(nowMonth) + nowYear)
      : formatDate($("#MAKE_DATE").val())
  );

  // VIEW_TRADE_DATE_EXP text = #TRADE_DATE_EXP value:
  $($("#VIEW_TRADE_DATE_EXP")).text(
    formatDate($("#CUST_TRADE_DATE_EXP").val())
  );
}, 200);

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
    "نقل رصيد حساب عميل رقم:" +
    " " +
    $("#OLD_CUST_NO").val() +
    " " +
    "بإسم" +
    " " +
    "(" +
    $("#VIEW_OLD_CUST_NAME").text() +
    ")" +
    " " +
    "إلى حساب عميل رقم:" +
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
