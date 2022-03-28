"use strict";

/*COPY MOVE CREDIT TEXT*/

// FUNCTION: click COPY_VIEW_CUST_NAME:
$("#COPY_VIEW_CUST_NAME").click(() => {
  // HTML: copy & confirm copy buttons:
  let copyBtn = $("#COPY_VIEW_CUST_NAME .bi-clipboard-fill");
  let confirmCopyBtn = $("#COPY_VIEW_CUST_NAME .bi-clipboard-check-fill");

  // VALIDATION 1: check if fields are not filled:
  if ($("#CUST_NAME").val().length < 1) {
    // PROGRESS 1: show fail message:
    showFailMessage("تأكد من إدخال البيانات بشكل صحيح!", 0);

    // PROGRESS 2: hide fail message:
    hideFailMessage(900);
  }
  // VALIDATION 2: check if all fields are filled:
  else {
    // ACTION: copy the #MOVE_CREDIT_TEXT_RESULT to the clipboard:
    navigator.clipboard.writeText($("#VIEW_CUST_NAME").text());

    // PROGRESS 1: show and hide success message:
    showSuccessMessage("تم نسخ الاسم بنجاح!", 0);
    hideSuccessMessage(900);

    // PROGRESS 2: confirm copy buttons:
    copyBtn.addClass("hide");
    confirmCopyBtn.removeClass("hide");
    setTimeout(() => {
      copyBtn.removeClass("hide");
      confirmCopyBtn.addClass("hide");
    }, 900);
  }
});
