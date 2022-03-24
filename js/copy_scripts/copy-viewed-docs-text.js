"use strict";

// ckick COPY_ACC_DOCS_TEXT and select and copy the whole customer name from ACC_DOCS_TEXT text to clipboard:
function copyAccDocsText() {
  navigator.clipboard.writeText($("#ACC_DOCS_TEXT").text());

  ALERT_BOX.textContent = "تم نسخ نص مستندات فتح الحساب !";
  ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
  ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
  ALERT_BOX.classList.remove("hide");
  $("#COPY_ACC_DOCS_TEXT .bi-clipboard-fill").addClass("hide");
  $("#COPY_ACC_DOCS_TEXT .bi-clipboard-check-fill").removeClass("hide");

  setTimeout(function () {
    ALERT_BOX.style.backgroundColor = "none";
    ALERT_BOX.style.border = "none";
    ALERT_BOX.classList.add("hide");
    $("#COPY_ACC_DOCS_TEXT .bi-clipboard-fill").removeClass("hide");
    $("#COPY_ACC_DOCS_TEXT .bi-clipboard-check-fill").addClass("hide");
  }, 2800);
}

$("#COPY_ACC_DOCS_TEXT").click(copyAccDocsText);
