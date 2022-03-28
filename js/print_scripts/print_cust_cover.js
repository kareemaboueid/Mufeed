"use strict";

/*PRINT CUST COVER SCRIPT*/

// VARIABLE: get html elements:
const CUST_MARKET = document.getElementById("CUST_MARKET");
const CUST_PROJECT_CHECK = document.getElementById("CUST_PROJECT_CHECK");

// FUNCTION: click CUST_PROJECT_CHECK:
CUST_PROJECT_CHECK.addEventListener("click", () => {
  // if user select project acc -> disable other markets.
  if (CUST_PROJECT_CHECK.checked == true) {
    CUST_MARKET.disabled = true;
  } else {
    CUST_MARKET.disabled = false;
  }
});

// FUNCTION: click PRINT_CUST_COVER_BTN:
$("#PRINT_CUST_COVER_BTN").click(() => {
  // HTML: set the index result html:
  let INDEX_RESULT_HTML = `
<section id=RESULT_CONTENT><div class=p-t-2rem></div><table class=tg><tr><td class="table-header width-30"><div class="font-s-h4 p-1rem">أسم العميل</div><td class="font-s-h4 p-0 table-data">${
    $("#parenthesis1").hasClass("hide") && $("#parenthesis2").hasClass("hide")
      ? $("#VIEW_CUST_NAME")
          .text()
          .replace("(", "")
          .replace(")", "")
          .trim()
          .replace(/\s+/g, " ")
      : $("#VIEW_CUST_NAME").text().trim().replace(/\s+/g, " ")
  }<tr><td class="table-header width-30"><div class="font-s-h4 p-1rem">رقم العميل</div><td class="p-0 table-data font-s-h3">${$(
    "#CUST_NO"
  ).val()}<tr><td class="table-header width-30"><div class="font-s-h4 p-1rem">المنفذ</div><td class="p-0 table-data font-s-h3">${
    CUST_MARKET.disabled == true
      ? "قسم المشاريع والتصدير"
      : $("#CUST_MARKET").val()
  }</table></section>
  `;

  // VALIDATION 1: check if all fields are not filled:
  if (
    (CUST_MARKET.disabled !== true && CUST_MARKET.value.length < 1) ||
    $("#CUST_NO").val().length < 1 ||
    $("#CUST_NAME").val().length < 1
  ) {
    // PROGRESS 1: show fail message:
    showFailMessage("تأكد من إدخال البيانات بشكل صحيح!", 0);

    // PROGRESS 2: hide fail message (for startTime + 100):
    hideFailMessage(1000);
  }
  // VALIDATION 2: check if fields are filled:
  else {
    // PROGRESS 1: show loading window (for startTime):
    showLoadingWindow(1000);

    // PROGRESS 2: close form page and show result html (for startTime + 100):
    generateReport(INDEX_RESULT_HTML, 1100);

    // PROGRESS 3: show success message (for startTime + 200):
    showSuccessMessage("تم معالجة البيانات بنجاح، المستند جاهز للطباعة.", 1150);

    // PROGRESS 4: hide success message (for startTime + 300):
    hideSuccessMessage(2150);
  }
});
