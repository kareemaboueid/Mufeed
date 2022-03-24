"use strict";

// ckick COPY_MOVE_CREDIT_TEXT_RESULT and select and copy the whole customer name from MOVE_CREDIT_TEXT_RESULT text to clipboard:
function copyMoveCreditText() {
  if (
    $("#OLD_CUST_NO").val().length < 1 ||
    $("#CUST_NO").val().length < 1 ||
    $("#OLD_CUST_NAME").val().length < 1 ||
    $("#CUST_NAME").val().length < 1
  ) {
    ALERT_BOX.textContent = "يجب إدخال بيانات العميل القديم حتى يتم النسخ!";
    ALERT_BOX.style.backgroundColor = "rgb(243, 164, 164)";
    ALERT_BOX.style.border = "1px solid rgb(182, 84, 84)";
    ALERT_BOX.classList.remove("hide");
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
    }, 2800);
  } else {
    navigator.clipboard.writeText($("#MOVE_CREDIT_TEXT_RESULT").text());

    ALERT_BOX.textContent = "تم نسخ بيان نقل الرصيد !";
    ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
    ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
    ALERT_BOX.classList.remove("hide");
    $("#MOVE_CREDIT_TEXT_RESULT_BOX .bi-clipboard-fill").addClass("hide");
    $("#MOVE_CREDIT_TEXT_RESULT_BOX .bi-clipboard-check-fill").removeClass(
      "hide"
    );

    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
      $("#MOVE_CREDIT_TEXT_RESULT_BOX .bi-clipboard-fill").removeClass("hide");
      $("#MOVE_CREDIT_TEXT_RESULT_BOX .bi-clipboard-check-fill").addClass(
        "hide"
      );
    }, 2800);
  }
}

$("#COPY_MOVE_CREDIT_TEXT_RESULT").click(copyMoveCreditText);
