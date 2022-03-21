"use strict";

/*
 * PRINT CUST COVER SCRIPT
 */

const PRINT_CUST_COVER_BTN = document.querySelector("#print_cust_cover_btn");
const CUST_MARKET = document.getElementById("CUST_MARKET");

// PRINT BUTTON FUNCTION:
PRINT_CUST_COVER_BTN.addEventListener("click", () => {
  //==========================================//
  // THE INDEX RESULT:
  let INDEX_RESULT_PAGE = `
<section id="RESULT_CONTENT">
<div class="p-t-2rem"></div>
        <table class="tg">
          <tbody>
            <tr>
              <td class="width-30 table-header">
                <div class="p-1rem font-s-h6">أسم العميل</div>
              </td>
              <td class="table-data font-s-h6 p-0">
                ${custNameAll.textContent.trim().replace(/\s+/g, " ")}
              </td>
            </tr>
            <tr>
              <td class="width-30 table-header">
                <div class="p-1rem font-s-h6">رقم العميل</div>
              </td>
              <td class="table-data font-s-h6 p-0">${CUST_NO.value}</td>
            </tr>
            <tr>
              <td class="width-30 table-header">
                <div class="p-1rem font-s-h6">المنفذ</div>
              </td>
              <td class="table-data font-s-h6 p-0">${CUST_MARKET.value}</td>
            </tr>
          </tbody>
        </table>
      </section>
  `;
  //==========================================//
  // check if all inputs are filled

  if (
    CUST_MARKET.value !== "" &&
    CUST_NO.value !== "" &&
    CUST_NAME.value !== ""
  ) {
    // 1. show loading window for 1500 s:
    document.querySelector("#LOADING_WIN").classList.remove("hide");
    document.querySelector("#LOADING_WIN_LAYOUT").classList.remove("hide");
    setTimeout(() => {
      document.querySelector("#LOADING_WIN").classList.add("hide");
      document.querySelector("#LOADING_WIN_LAYOUT").classList.add("hide");
    }, 1500);
    // 2. close main index page and show print window:
    setTimeout(() => {
      document.getElementById("INDEX_MAIN_PAGE").classList.add("hide");
      document.getElementById("INDEX_RESULT_PAGE").classList.remove("hide");
      document.getElementById("RESULT_ACTION_BUTTONS").classList.remove("hide");
      document.getElementById("INDEX_RESULT_PAGE").innerHTML =
        INDEX_RESULT_PAGE;
      document.body.style.backgroundColor = "#fff";
    }, 2000);
    // 3. show success message:
    setTimeout(function () {
      ALERT_BOX.textContent = "تم معالجة البيانات بنجاح، المستند جاهز .";
      ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
      ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
      ALERT_BOX.classList.remove("hide");
    }, 2500);
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
      document.querySelector(".bi-clipboard").classList.remove("hide");
      document.querySelector(".bi-clipboard-check").classList.add("hide");
    }, 4900);
  } else {
    ALERT_BOX.textContent = "تأكد من إدخال البيانات بشكل صحيح!";
    ALERT_BOX.style.backgroundColor = "rgb(243, 164, 164)";
    ALERT_BOX.style.border = "1px solid rgb(182, 84, 84)";
    ALERT_BOX.classList.remove("hide");
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
    }, 2000);
  }
});
