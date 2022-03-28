"use strict";

/*COPY VIEWED DOCS TEXT*/

// FUNCTION: click COPY_ACC_DOCS_TEXT:
$("#COPY_ACC_DOCS_TEXT").click(() => {
  // HTML: copy & confirm copy buttons:
  let copyBtn = $("#COPY_ACC_DOCS_TEXT .bi-clipboard-fill");
  let confirmCopyBtn = $("#COPY_ACC_DOCS_TEXT .bi-clipboard-check-fill");

  // ACTION: copy the #MOVE_CREDIT_TEXT_RESULT to the clipboard:
  navigator.clipboard.writeText($("#ACC_DOCS_TEXT").text());

  // PROGRESS 1: show and hide success message:
  showSuccessMessage("تم نسخ نص مستندات فتح الحساب !", 0);
  hideSuccessMessage(900);

  // PROGRESS 2: confirm copy buttons:
  copyBtn.addClass("hide");
  confirmCopyBtn.removeClass("hide");
  setTimeout(() => {
    copyBtn.removeClass("hide");
    confirmCopyBtn.addClass("hide");
  }, 900);
});
