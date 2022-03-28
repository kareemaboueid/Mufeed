"use strict";

/*RESET FORM BUTTON*/

// FUNCTION: click RESET_FORM_BTN:
$("#RESET_FORM_BTN").click(() => {
  $("#CUST_NO").val("");
  $("#CUST_NAME").val("");
  $("#CUST_CREDIT_LIMIT").val("");
  $("#VIEW_CUST_NAME").text("");

  $("#CUST_NAME_START").val("");
  $("#CUST_NAME_END").val("");
  $("#CUST_NAME_SUFFIX").val("");

  $("#OLD_CUST_NAME").val("");
  $("#OLD_CUST_NO").val("");
  $("#OLD_CUST_NAME_START").val("");
  $("#OLD_CUST_NAME_END").val("");
  $("#OLD_CUST_NAME_SUFFIX").val("");

  $("#CUST_TRADE_DATE_EXP").val("");
  $("#MAKE_DATE").val("");

  $("#CUST_CREDIT_LIMIT_CURRENCY").selectedIndex = 0;
  $("#CUST_MARKET").selectedIndex = 0;
  $("#TASHEEL_APP_VERFIY").selectedIndex = 0;
  $("#WARRANT_SUPPORT_VERFIY").selectedIndex = 0;

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

  $Name("TASHEEL_APP_CHECK")[0].checked = false;
  $Name("TASHEEL_APP_CHECK")[0].checked = true;
  $Name("TASHEEL_APP_CHECK")[1].checked = false;
  $Name("WARRANT_SUPPORT_CHECK")[0].checked = true;
  $Name("WARRANT_SUPPORT_CHECK")[1].checked = false;
  $Name("CUST_TRADE_LOG_CHECK")[0].checked = true;
  $Name("CUST_TRADE_LOG_CHECK")[1].checked = false;
  $Name("VAT_CERT_CHECK")[0].checked = true;
  $Name("VAT_CERT_CHECK")[1].checked = false;
  $Name("NATIONAL_ID_CHECK")[0].checked = true;
  $Name("NATIONAL_ID_CHECK")[1].checked = false;
  $Name("FORIGN_ID_CHECK")[0].checked = true;
  $Name("FORIGN_ID_CHECK")[1].checked = false;
  $Name("CUST_ATTORNEY_CHECK")[0].checked = true;
  $Name("CUST_ATTORNEY_CHECK")[1].checked = false;
  $Name("CUST_LICENSE_CHECK")[0].checked = true;
  $Name("CUST_LICENSE_CHECK")[1].checked = false;
  $Name("NATIONAL_ADDRESS_CHECK")[0].checked = true;
  $Name("NATIONAL_ADDRESS_CHECK")[1].checked = false;

  // confirmation
  showSuccessMessage("تم مسح جميع حقول الإدخال!", 0);
  hideSuccessMessage(900);
});
