"use strict";

/*COPY MOVE CREDIT TEXT*/

// FUNCTION: click COPY_MOVE_CREDIT_TEXT_RESULT:
$("#COPY_MOVE_CREDIT_TEXT_RESULT").click(() => {
  // HTML: copy & confirm copy buttons:
  let copyBtn = $("#MOVE_CREDIT_TEXT_RESULT_BOX .bi-clipboard-fill");
  let confirmCopyBtn = $(
    "#MOVE_CREDIT_TEXT_RESULT_BOX .bi-clipboard-check-fill"
  );

  // VALIDATION 1: check if fields are not filled:
  if (
    $("#OLD_CUST_NO").val().length < 1 ||
    $("#CUST_NO").val().length < 1 ||
    $("#OLD_CUST_NAME").val().length < 1 ||
    $("#CUST_NAME").val().length < 1
  ) {
    // PROGRESS 1: show fail message:
    showFailMessage("تأكد من إدخال البيانات بشكل صحيح!", 0);

    // PROGRESS 2: hide fail message:
    hideFailMessage(900);
  }
  // VALIDATION 2: check if all fields are filled:
  else {
    // ACTION: copy the #MOVE_CREDIT_TEXT_RESULT to the clipboard:
    navigator.clipboard.writeText($("#MOVE_CREDIT_TEXT_RESULT").text());

    // PROGRESS 1: show and hide success message:
    showSuccessMessage("تم نسخ بيان نقل الرصيد !", 0);
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
