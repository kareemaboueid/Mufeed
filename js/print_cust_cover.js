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
<table
      style="
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
        width: 665px;
      "
      class="tg"
    >
      <colgroup>
        <col style="width: 188px" />
        <col style="width: 477px" />
      </colgroup>
      <thead>
        <tr>
          <th
            style="
              background-color: #ffffff;
              border-color: #000000;
              border-style: solid;
              border-width: 1px;
              color: #000000;
              font-family: inherit;
              font-size: 26px;
              font-weight: bold;
              overflow: hidden;
              padding: 18px 20px;
              text-align: center;
              vertical-align: middle;
              word-break: normal;
            "
          >
            اسم العميل
          </th>
          <th
            style="
              background-color: #ffffff;
              border-color: #000000;
              border-style: solid;
              border-width: 1px;
              color: #000000;
              font-family: inherit;
              font-size: 26px;
              font-weight: bold;
              overflow: hidden;
              padding: 18px 20px;
              text-align: center;
              vertical-align: middle;
              word-break: normal;
            "
          >
            ${custNameAll.textContent.replace("(", " ").replace(")",
    "").trim().replace(/\s+/g, " ")}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style="
              background-color: #ffffff;
              border-color: #000000;
              border-style: solid;
              border-width: 1px;
              color: #000000;
              font-family: inherit;
              font-size: 26px;
              font-weight: bold;
              overflow: hidden;
              padding: 18px 20px;
              text-align: center;
              vertical-align: middle;
              word-break: normal;
            "
          >
            رقم العميل
          </td>
          <td
            style="
              background-color: #ffffff;
              border-color: #000000;
              border-style: solid;
              border-width: 1px;
              color: #000000;
              font-family: inherit;
              font-size: 26px;
              font-weight: bold;
              overflow: hidden;
              padding: 18px 20px;
              text-align: center;
              vertical-align: middle;
              word-break: normal;
            "
          >
            ${CUST_NO.value}
          </td>
        </tr>
        <tr>
          <td
            style="
              background-color: #ffffff;
              border-color: #000000;
              border-style: solid;
              border-width: 1px;
              color: #000000;
              font-family: inherit;
              font-size: 26px;
              font-weight: bold;
              overflow: hidden;
              padding: 18px 20px;
              text-align: center;
              vertical-align: middle;
              word-break: normal;
            "
          >
            المنفذ
          </td>
          <td
            style="
              background-color: #ffffff;
              border-color: #000000;
              border-style: solid;
              border-width: 1px;
              color: #000000;
              font-family: inherit;
              font-size: 26px;
              font-weight: bold;
              overflow: hidden;
              padding: 18px 20px;
              text-align: center;
              vertical-align: middle;
              word-break: normal;
            "
          >
            ${CUST_MARKET.value}
          </td>
        </tr>
      </tbody>
    </table>
  `;
  //==========================================//
  // check if all inputs are filled

  if (CUST_MARKET.value !== "" && CUST_NO.value !== "" && CUST_NAME.value !== "") {
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
      document.getElementById("INDEX_RESULT_PAGE").innerHTML = INDEX_RESULT_PAGE;
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
