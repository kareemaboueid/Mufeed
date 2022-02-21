// "use strict";

// // global Modal selectors
// const modalOverlay = document.querySelector("#modalOverlay");
// const modalWindow = document.querySelector("#modalWindow");
// const modalWindow_closeButton = document.querySelector("#modalCloseButton");
// const modalWindow_submitButton = document.querySelector(
//     "#modalWindow-submitButton"
// );
// const CUST_ACC_BREIF = document.querySelector("#CUST_ACC_BREIF");
// function openModalFunction() {
//     modalOverlay.classList.toggle("hide");
//     modalWindow.classList.toggle("hide");
// }
// // open create acc modal:
// CUST_ACC_BREIF.addEventListener("click", openModalFunction());
// modalWindow_closeButton.addEventListener("click", openModalFunction());
// // ==========================================================================

// // html temps
// const GLOBAL_HEADER_OPEN = `
// <!DOCTYPE html>
// <html lang="ar" dir="rtl">

// <head>
//   <!-- primary tags -->
//   <meta charset="UTF-8">
//   <title>Mufeed Report</title>
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width,initial-scale=1">
// </head>
// <body style="margin-top: 50px;">
// `;

// const GLOBAL_HEADER_CLOSE = `
// </body>
// </html>
// `;
// // ==========================================================================

// // Main Functions
// const CUST_ACC_BREIF_submitButton = document.querySelector(
//     "#CUST_ACC_BREIF-submitButton"
// );

// CUST_ACC_BREIF_submitButton.addEventListener("click", e => {
//     e.preventDefault();
//     const CUST_NAME = document.querySelector("#CUST_NAME").value;
//     const CUST_NO = document.querySelector("#CUST_NO").value;
//     const CUST_MARKET = document.querySelector("#CUST_MARKET").value;
//     const ready = window.open("", "_blank");
//     ready.document.write(`${GLOBAL_HEADER_OPEN}
//     <table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 665px" class="tg"><colgroup><col style="width: 188px"><col style="width: 477px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#000000;border-style:solid;border-width:1px;color:#000000;font-family:inherit;font-size:26px;font-weight:bold;overflow:hidden;padding:18px 20px;text-align:center;vertical-align:middle;word-break:normal">اسم العميل</th><th style="background-color:#ffffff;border-color:#000000;border-style:solid;border-width:1px;color:#000000;font-family:inherit;font-size:26px;font-weight:bold;overflow:hidden;padding:18px 20px;text-align:center;vertical-align:middle;word-break:normal">${CUST_NAME}</th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#000000;border-style:solid;border-width:1px;color:#000000;font-family:inherit;font-size:26px;font-weight:bold;overflow:hidden;padding:18px 20px;text-align:center;vertical-align:middle;word-break:normal">رقم العميل</td><td style="background-color:#ffffff;border-color:#000000;border-style:solid;border-width:1px;color:#000000;font-family:inherit;font-size:26px;font-weight:bold;overflow:hidden;padding:18px 20px;text-align:center;vertical-align:middle;word-break:normal">${CUST_NO}</td></tr><tr><td style="background-color:#ffffff;border-color:#000000;border-style:solid;border-width:1px;color:#000000;font-family:inherit;font-size:26px;font-weight:bold;overflow:hidden;padding:18px 20px;text-align:center;vertical-align:middle;word-break:normal">المنفذ</td><td style="background-color:#ffffff;border-color:#000000;border-style:solid;border-width:1px;color:#000000;font-family:inherit;font-size:26px;font-weight:bold;overflow:hidden;padding:18px 20px;text-align:center;vertical-align:middle;word-break:normal">${CUST_MARKET}</td></tr></tbody></table>
//     ${GLOBAL_HEADER_CLOSE}`);
//     ready.window.print();
//     ready.window.close();
// });
