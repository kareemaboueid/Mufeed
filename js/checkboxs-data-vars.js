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
});
$("#CHECK_CUST_SAVED_TRUE").click(() => {
  $("#CUST_SAVED_NO").removeClass("hide");
  $("#CUST_SAVED_DATE").removeClass("hide");
});
