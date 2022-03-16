"use strict";

// VARIABLES DATA

// 1) TASHEEL_APP:
const TASHEEL_APP_CHECK = document.getElementsByName("TASHEEL_APP_CHECK");
const TASHEEL_APP_VERFIY = document.querySelector("#TASHEEL_APP_VERFIY");

// 2) WARRANT_SUPPORT:
const WARRANT_SUPPORT_CHECK = document.getElementsByName("WARRANT_SUPPORT_CHECK");
const WARRANT_SUPPORT_VERFIY = document.querySelector("#WARRANT_SUPPORT_VERFIY");

// 3) CUST_TRADE_LOG:
const CUST_TRADE_LOG = document.getElementsByName("CUST_TRADE_LOG");
const CUST_TRADE_DATE_DAY = document.querySelector("#CUST_TRADE_LOG_EXPIRY_DATE-DAY");
const CUST_TRADE_DATE_MONTH = document.querySelector("#CUST_TRADE_LOG_EXPIRY_DATE-MONTH");
const CUST_TRADE_DATE_YEAR = document.querySelector("#CUST_TRADE_LOG_EXPIRY_DATE-YEAR");

// SELECT BUTTONS
const PRINT_INDEX_BTN = document.querySelector("#print_index_btn");

// if TASHEEL_APP_CHECK is checked, then show the true/false marks
const trueMark = `<i class="ri-check-line"></i>`;
const falseMark = `<i class="ri-close-fill"></i>`;
let resWin;

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
});
$("#CHECK_CUST_SAVED_TRUE").click(() => {
  $("#CUST_SAVED_NO").removeClass("hide");
});
// click on CHECK_CUST_SAVED_TRUE ot _FALSE to control CUST_SAVED_DATE:
$("#CHECK_CUST_SAVED_FALSE").click(() => {
  $("#CUST_SAVED_DATE").addClass("hide");
});
$("#CHECK_CUST_SAVED_TRUE").click(() => {
  $("#CUST_SAVED_DATE").removeClass("hide");
});

PRINT_INDEX_BTN.addEventListener("click", () => {
  resWin = window.open("", "", "fullscreen=no,height=200,width=500");
  resWin.document.write(`<!DOCTYPE html>
<html lang="ar" dir="rtl"><head><link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    /></head><body>ملف طلب تسهيلات: ${TASHEEL_APP_CHECK[0].checked
      ? trueMark + TASHEEL_APP_VERFIY.value
      : falseMark
    }</body></html>`);
});
