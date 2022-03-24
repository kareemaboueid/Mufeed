"use strict";

// ckick COPY_VIEW_CUST_NAME and select and copy the whole customer name from VIEW_CUST_NAME text to clipboard:
function copyCustName() {
  // if custName1 and custName2 and custName3 and custName4 are empty then show the ALERT_BOX for 2800ms and then close it:
  if ($("#CUST_NAME").val().length < 1) {
    ALERT_BOX.textContent = "يجب إدخال اسم العميل بشكل صحيح حتى يتم النسخ!";
    ALERT_BOX.style.backgroundColor = "rgb(243, 164, 164)";
    ALERT_BOX.style.border = "1px solid rgb(182, 84, 84)";
    ALERT_BOX.classList.remove("hide");
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
    }, 2800);
  }
  // else copy the whole customer name from VIEW_CUST_NAME text to clipboard:
  else {
    navigator.clipboard.writeText($("#VIEW_CUST_NAME").text());
    ALERT_BOX.textContent = "تم نسخ الاسم بنجاح!";
    ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
    ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
    ALERT_BOX.classList.remove("hide");
    $("#COPY_VIEW_CUST_NAME .bi-clipboard-fill").addClass("hide");
    $("#COPY_VIEW_CUST_NAME .bi-clipboard-check-fill").removeClass("hide");
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
      $("#COPY_VIEW_CUST_NAME .bi-clipboard-fill").removeClass("hide");
      $("#COPY_VIEW_CUST_NAME .bi-clipboard-check-fill").addClass("hide");
    }, 2800);
  }
}

$("#COPY_VIEW_CUST_NAME").click(copyCustName);
