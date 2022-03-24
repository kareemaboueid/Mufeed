"use strict";

// click on ADD_SUFFIX_PARENS_BTN to add parentheses to CUST_NAME_SUFFIX.value:
$("#ADD_SUFFIX_PARENS_BTN").click(function (e) {
  e.preventDefault();
  if ($("#CUST_NAME_SUFFIX").val().length > 0) {
    $("#CUST_NAME_SUFFIX").val(`(${$("#CUST_NAME_SUFFIX").val()})`);
    $("#ADD_SUFFIX_PARENS_BTN").addClass("hide");
    $("#REMOVE_SUFFIX_PARENS_BTN").removeClass("hide");
  }
});

// click on REMOVE_SUFFIX_PARENS_BTN to remove parentheses from CUST_NAME_SUFFIX.value:
$("#REMOVE_SUFFIX_PARENS_BTN").click(function (e) {
  e.preventDefault();
  if ($("#CUST_NAME_SUFFIX").val().length > 0) {
    $("#CUST_NAME_SUFFIX").val($("#CUST_NAME_SUFFIX").val().slice(1, -1));
    $("#REMOVE_SUFFIX_PARENS_BTN").addClass("hide");
    $("#ADD_SUFFIX_PARENS_BTN").removeClass("hide");
  }
});

// change state of VIEW_CUST_NAME text every 200 ms:
setInterval(function () {
  let resText =
    $("select#CUST_NAME_START option:checked").val() +
    " " +
    $("#CUST_NAME").val() +
    " " +
    $("select#CUST_NAME_END option:checked").val() +
    " " +
    $("#CUST_NAME_SUFFIX").val();

  // remove line breaks from VIEW_CUST_NAME text:
  $("#VIEW_CUST_NAME").text(resText.trim().replace(/\s\s+/g, " "));
}, 200);
// =====================================================

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
// click on CHECK_CUST_SAVED_TRUE or _FALSE to control CUST_SAVED_NO:
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
// click on MOVE_CREDIT_TEXT_CHECK_TRUE or _FALSE to control OLD_CUST_NO_BOX and OLD_CUST_NAME_BOX:
$("#MOVE_CREDIT_TEXT_CHECK_FALSE").click(() => {
  $("#OLD_CUST_NO_BOX").addClass("hide");
  $("#OLD_CUST_NAME_BOX").addClass("hide");
  $("#MOVE_CREDIT_TEXT_RESULT_BOX").addClass("hide");
});
$("#MOVE_CREDIT_TEXT_CHECK_TRUE").click(() => {
  $("#OLD_CUST_NO_BOX").removeClass("hide");
  $("#OLD_CUST_NAME_BOX").removeClass("hide");
  $("#MOVE_CREDIT_TEXT_RESULT_BOX").removeClass("hide");
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

// click on ADD_OLD_SUFFIX_PARENS_BTN to add parentheses to OLD_CUST_NAME_SUFFIX.value:
$("#ADD_OLD_SUFFIX_PARENS_BTN").click(function (e) {
  e.preventDefault();
  if ($("#OLD_CUST_NAME_SUFFIX").val().length > 0) {
    $("#OLD_CUST_NAME_SUFFIX").val(`(${$("#OLD_CUST_NAME_SUFFIX").val()})`);
    $("#ADD_OLD_SUFFIX_PARENS_BTN").addClass("hide");
    $("#REMOVE_OLD_SUFFIX_PARENS_BTN").removeClass("hide");
  }
});

// click on REMOVE_OLD_SUFFIX_PARENS_BTN to remove parentheses from OLD_CUST_NAME_SUFFIX.value:
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

// change state of VIEW_OLD_CUST_NAME text every 200 ms:
setInterval(function () {
  let resText =
    $("select#OLD_CUST_NAME_START option:checked").val() +
    " " +
    $("#OLD_CUST_NAME").val() +
    " " +
    $("select#OLD_CUST_NAME_END option:checked").val() +
    " " +
    $("#OLD_CUST_NAME_SUFFIX").val();

  // remove line breaks from VIEW_OLD_CUST_NAME text:
  $("#VIEW_OLD_CUST_NAME").text(resText.trim().replace(/\s\s+/g, " "));
}, 200);
// =====================================================
