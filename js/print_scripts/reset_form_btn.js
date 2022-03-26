"use strict";

// Reset Button
document.getElementById("reset_form_btn").addEventListener("click", () => {
  /* 1. Reset:
  CUST_NAME
  CUST_NO
  VIEW_CUST_NAME
  CUST_NAME_START
  CUST_NAME_END
  CUST_NAME_SUFFIX
  ADD_SUFFIX_PARENS_BTN
  REMOVE_SUFFIX_PARENS_BTN
  */
  CUST_NAME.value = "";
  CUST_NO.value = "";
  VIEW_CUST_NAME.textContent = "";

  $("#OLD_CUST_NAME").val("");
  $("#OLD_CUST_NO").val("");
  $("#OLD_CUST_NAME_START").val("");
  $("#OLD_CUST_NAME_END").val("");
  $("#OLD_CUST_NAME_SUFFIX").val("");

  $("#CUST_NAME_START").val("");
  $("#CUST_NAME_END").val("");
  $("#CUST_NAME_SUFFIX").val("");
  if (
    $("#ADD_SUFFIX_PARENS_BTN").hasClass("hide") ||
    $("#ADD_OLD_SUFFIX_PARENS_BTN").hasClass("hide")
  ) {
    $("#ADD_SUFFIX_PARENS_BTN").removeClass("hide");
    $("#REMOVE_SUFFIX_PARENS_BTN").addClass("hide");
    $("#ADD_OLD_SUFFIX_PARENS_BTN").removeClass("hide");
    $("#REMOVE_OLD_SUFFIX_PARENS_BTN").addClass("hide");
  }

  /* 2. Reset:
  CUST_CREDIT_LIMIT
  CUST_CREDIT_LIMIT_CURRENCY
  CUST_MARKET
  CUST_PROJECT_CHECK
  */
  CUST_CREDIT_LIMIT.value = "";
  CUST_CREDIT_LIMIT_CURRENCY.selectedIndex = 0;
  CUST_MARKET.selectedIndex = 0;
  TASHEEL_APP_VERFIY.selectedIndex = 0;
  WARRANT_SUPPORT_VERFIY.selectedIndex = 0;
  CUST_TRADE_DATE_EXP.value = "";
  MAKE_DATE.value = "";
  if ($("#CUST_PROJECT_CHECK").is(":checked")) {
    $("#CUST_PROJECT_CHECK").prop("checked", false);
  }
  // if CUST_MARKET is disabled, enable it
  if (CUST_MARKET.disabled) {
    CUST_MARKET.disabled = false;
  }

  /* 3. Reset:
  TASHEEL_APP_CHECK
  WARRANT_SUPPORT_CHECK
  CUST_TRADE_LOG_CHECK
  VAT_CERT_CHECK
  NATIONAL_ID_CHECK
  FORIGN_ID_CHECK
  CUST_ATTORNEY_CHECK
  CUST_LICENSE_CHECK
  */
  TASHEEL_APP_CHECK[0].checked = true;
  TASHEEL_APP_CHECK[1].checked = false;
  WARRANT_SUPPORT_CHECK[0].checked = true;
  WARRANT_SUPPORT_CHECK[1].checked = false;
  CUST_TRADE_LOG_CHECK[0].checked = true;
  CUST_TRADE_LOG_CHECK[1].checked = false;
  VAT_CERT_CHECK[0].checked = true;
  VAT_CERT_CHECK[1].checked = false;
  NATIONAL_ID_CHECK[0].checked = true;
  NATIONAL_ID_CHECK[1].checked = false;
  FORIGN_ID_CHECK[0].checked = true;
  FORIGN_ID_CHECK[1].checked = false;
  CUST_ATTORNEY_CHECK[0].checked = true;
  CUST_ATTORNEY_CHECK[1].checked = false;
  CUST_LICENSE_CHECK[0].checked = true;
  CUST_LICENSE_CHECK[1].checked = false;
  NATIONAL_ADDRESS_CHECK[0].checked = true;
  NATIONAL_ADDRESS_CHECK[1].checked = false;

  /* 4. Reset:
  MOVE_CREDIT_CHECK
  CHECK_CUST_SAVED
  */
  if (
    MOVE_CREDIT_CHECK[0].checked == true ||
    CHECK_CUST_SAVED[0].checked == true
  ) {
    MOVE_CREDIT_CHECK[0].checked = false;
    MOVE_CREDIT_CHECK[1].checked = true;
    CHECK_CUST_SAVED[0].checked = false;
    CHECK_CUST_SAVED[1].checked = true;
  }

  /* 5. Reset:
  MOVE_CREDIT_IN_NO_BOX
  MOVE_CREDIT_IN_NAME_BOX
  MOVE_CREDIT_IN_RES_BOX
  CUST_SAVED_NO
  CUST_SAVED_DATE
  VIEW_MAKE_DATE
  TASHEEL_APP_VERFIY
  WARRANT_SUPPORT_VERFIY
  CUST_TRADE_LOG_VERFIY
  VIEW_TRADE_DATE_EXP
  */
  if (
    !$("#MOVE_CREDIT_IN_NO_BOX").hasClass("hide") ||
    !$("#MOVE_CREDIT_IN_NAME_BOX").hasClass("hide") ||
    !$("#MOVE_CREDIT_IN_RES_BOX").hasClass("hide") ||
    !$("#CUST_SAVED_NO").hasClass("hide") ||
    !$("#CUST_SAVED_DATE").hasClass("hide") ||
    !$("#VIEW_MAKE_DATE").hasClass("hide") ||
    TASHEEL_APP_VERFIY.classList.contains("hide") ||
    WARRANT_SUPPORT_VERFIY.classList.contains("hide") ||
    $("#CUST_TRADE_LOG_VERFIY").hasClass("hide") ||
    $("#VIEW_TRADE_DATE_EXP").hasClass("hide")
  ) {
    $("#MOVE_CREDIT_IN_NO_BOX").addClass("hide");
    $("#MOVE_CREDIT_IN_NAME_BOX").addClass("hide");
    $("#MOVE_CREDIT_IN_RES_BOX").addClass("hide");
    $("#CUST_SAVED_NO").addClass("hide");
    $("#CUST_SAVED_DATE").addClass("hide");
    $("#VIEW_MAKE_DATE").addClass("hide");
    TASHEEL_APP_VERFIY.classList.remove("hide");
    WARRANT_SUPPORT_VERFIY.classList.remove("hide");
    $("#CUST_TRADE_LOG_VERFIY").removeClass("hide");
    $("#VIEW_TRADE_DATE_EXP").removeClass("hide");
  }

  /* 6. Reset:
  show alert box:
  */
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
