"use strict";

// ckick COPY_VIEW_CUST_NAME and select and copy the whole customer name from VIEW_CUST_NAME text to clipboard:
function copyCustName() {
  const custNameAll = document.getElementById("VIEW_CUST_NAME");
  const custName2 = document.getElementById("VIEW_CUST_NAME2");
  const parenthesis1 = document.getElementById("parenthesis1");
  const parenthesis2 = document.getElementById("parenthesis2");
  const ALERT_BOX = document.getElementById("ALERT_BOX");

  // if custName1 and custName2 and custName3 and custName4 are empty then show the ALERT_BOX for 2800ms and then close it:
  if (custName2.textContent.length < 1) {
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
  // else if parenthesis1 and parenthesis2 contain class "hide" then copy the whole customer name from VIEW_CUST_NAME text to clipboard:
  else if (
    parenthesis1.classList.contains("hide") &&
    parenthesis2.classList.contains("hide")
  ) {
    navigator.clipboard.writeText(
      custNameAll.textContent
        .replace("(", " ")
        .replace(")", " ")
        .trim()
        .replace(/\s+/g, " ")
    );
    ALERT_BOX.textContent = "تم نسخ الاسم بنجاح!";
    ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
    ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
    ALERT_BOX.classList.remove("hide");
    document.querySelector(".bi-clipboard").classList.add("hide");
    document.querySelector(".bi-clipboard-check").classList.remove("hide");
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
      document.querySelector(".bi-clipboard").classList.remove("hide");
      document.querySelector(".bi-clipboard-check").classList.add("hide");
    }, 2800);
  }
  // else copy the whole customer name from VIEW_CUST_NAME text to clipboard:
  else {
    navigator.clipboard.writeText(
      custNameAll.textContent.trim().replace(/\s+/g, " ")
    );
    ALERT_BOX.textContent = "تم نسخ الاسم بنجاح!";
    ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
    ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
    ALERT_BOX.classList.remove("hide");
    document.querySelector(".bi-clipboard").classList.add("hide");
    document.querySelector(".bi-clipboard-check").classList.remove("hide");
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
      document.querySelector(".bi-clipboard").classList.remove("hide");
      document.querySelector(".bi-clipboard-check").classList.add("hide");
    }, 2800);
  }
}

$("#COPY_VIEW_CUST_NAME").click(copyCustName);
