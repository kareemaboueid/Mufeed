"use strict";

/*PRINT BENEF_APP SCRIPT*/

// FUNCTION: click REQUEST_GENERATE_BTN:
$("#REQUEST_GENERATE_BTN").click(() => {
  // HTML: set the index result html:
  let INDEX_RESULT_HTML = `
  <section id="RESULT_CONTENT">
        <div class="page_head">
          <img alt="شركة السريع التجارية للأرضيات
          والمفروشات"src=../media/alsourayia-logo.png width=100px>
          <div></div>
        </div>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <span>التاريخ : </span>
              <span class="font-w-400 font-s-h7">
                ${$("#VIEW_REQUEST_DATE").text()}
              </span>
            </div>
          </div>
        </div>

        <h1 class="index-title">نموذج طلب إضافة مستفيد</h1>
        <br />

        <div class="container">
          <div class="row">
            <div class="col-12">
              <span class="font-s-h7">إسم مقدم الطلب : </span>
              <span class="font-w-400 font-s-h6">
                ${$("#REQUESTER_NAME").val().trim().replace(/\s+/g, " ")}
              </span>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-12">
              <span class="font-s-h7">البيــــــــــــــــــــان : </span>
              <span class="font-w-400 font-s-h6">
                ${$("#REQUESTER_STATMENT").val().trim().replace(/\s+/g, " ")}
              </span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <span class="font-w-700 font-grey">
              بيانات إضافة مستفيد جديد بالبنوك المحلية / الدولية:
              </span>
            </div>
          </div>
        </div>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="tg">
                <thead>
                  <tr>
                    <td class="table-data width-30 p-1rem">أسم المستفيد</td>
                    <td class="table-data">
                      <div class="table-data-flex font-w-400 font-s-h6">
                        ${$("#BENEFICIARY_NAME")
                          .val()
                          .trim()
                          .replace(/\s+/g, " ")}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-data width-30 p-1rem">عنوان المستفيد</td>
                    <td class="table-data">
                      <div class="table-data-flex font-w-400 font-s-h6">
                        ${
                          $("#BENEFICIARY_ADDRESS").val() == ""
                            ? "-"
                            : $("#BENEFICIARY_ADDRESS")
                                .val()
                                .trim()
                                .replace(/\s+/g, " ")
                        }
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-data width-30 p-1rem">عملة المستفيد</td>
                    <td class="table-data">
                      <div class="table-data-flex font-w-400 font-s-h6">
                        ${
                          $("#BENEFICIARY_CURRENCY").val() == ""
                            ? "-"
                            : $("#BENEFICIARY_CURRENCY").val()
                        }
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-data width-30 p-1rem">إسم بنك المستفيد</td>
                    <td class="table-data">
                      <div class="table-data-flex font-w-400 font-s-h6">
                        ${
                          $Name("BENEFICIARY_BANK_TYPE")[0].checked
                            ? $("#BENEFICIARY_BANK_NAME-LOCAL").val()
                            : $("#BENEFICIARY_BANK_NAME-FOREIGN").val()
                        }
                      </div>
                    </td>
                  </tr>
                  ${
                    $("#BENEFICIARY_ACCOUNT_NO").val() == ""
                      ? ""
                      : `<tr>
                    <td class="table-data width-30 p-1rem">
                      رقم حساب المستفيد
                    </td>
                    <td class="table-data">
                      <div class="table-data-flex font-w-400 font-s-h6">
                          ${$("#BENEFICIARY_ACCOUNT_NO").val()}
                      </div>
                    </td>
                  </tr>`
                  }
                  <tr>
                    <td class="table-data width-30 p-1rem">
                      رمز آيبان للمستفيد<br>IBAN Number
                    </td>
                    <td class="table-data">
                      <div class="table-data-flex font-w-700 font-s-h6 letter-s-1">
                        ${$("#BENEFICIARY_ACCOUNT_IBAN").val()}
                      </div>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <span class="font-s-h7">المحرر / </span
              ><span class="font-s-h6 font-w-400"
                >${$("#REQUESTER_NAME").val().trim().replace(/\s+/g, " ")}</span
              >
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-6">
              <span class="font-s-h7">التوقيع / </span>
            </div>
            <div class="col-5 flex justify-end">
              <span class="font-s-h7">يعتمد / </span>
            </div>
          </div>
        </div>
      </section>
  `;

  // VALIDATION 1: check if all fields are not filled:
  if (
    $("#REQUESTER_NAME").val() == "" ||
    $("#REQUESTER_STATMENT").val() == "" ||
    $("#BENEFICIARY_NAME").val() == "" ||
    ($("#BENEFICIARY_BANK_NAME-LOCAL").val() == "" &&
      $("#BENEFICIARY_BANK_NAME-FOREIGN").val() == "")
  ) {
    // PROGRESS 1: show fail message:
    showFailMessage("تأكد من إدخال البيانات بشكل صحيح!", 0);

    // PROGRESS 2: hide fail message (for startTime + 100):
    hideFailMessage(1000);
  }
  // IBAN number validation check on #BENEFICIARY_ACCOUNT_IBAN:
  else if (
    IBAN.isValid($("#BENEFICIARY_ACCOUNT_IBAN").val()) == false ||
    $("#BENEFICIARY_ACCOUNT_IBAN").val() == ""
  ) {
    // PROGRESS 1: show fail message:
    showFailMessage("رقم آيبان غير صحيح!", 0);

    // PROGRESS 2: hide fail message (for startTime + 100):
    hideFailMessage(1000);

    // PROGRESS 3: colorize #BENEFICIARY_ACCOUNT_IBAN border red:
    $("#BENEFICIARY_ACCOUNT_IBAN").css("border-color", "red");

    // PROGRESS 4: focus on #BENEFICIARY_ACCOUNT_IBAN input:
    $("#BENEFICIARY_ACCOUNT_IBAN").focus();
  }

  // VALIDATION 2: check if fields are filled:
  else {
    // PROGRESS 1: show loading window (for startTime):
    showLoadingWindow(1000);

    // PROGRESS 2: close form page and show result html (for startTime + 100):
    generateReport(INDEX_RESULT_HTML, 1100);

    // PROGRESS 3: show success message (for startTime + 200):
    showSuccessMessage("تم معالجة البيانات بنجاح، المستند جاهز للطباعة.", 1150);

    // PROGRESS 4: hide success message (for startTime + 300):
    hideSuccessMessage(2150);

    // PROGRESS 5: colorize #BENEFICIARY_ACCOUNT_IBAN border normal:
    $("#BENEFICIARY_ACCOUNT_IBAN").css("border-color", "hsl(0, 0%, 62%)");
  }
});

// FUNCTION: click PRINT_EMPTY_PAGE_BTN:
$("#PRINT_EMPTY_PAGE_BTN").click(() => {
  // HTML: set the index result html:
  let INDEX_RESULT_HTML = `
<section id="RESULT_CONTENT">
        <div class="page_head">
          <img alt="شركة السريع التجارية للأرضيات
          والمفروشات"src=../media/alsourayia-logo.png width=100px>
          <div></div>
        </div>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <span>التاريخ : </span>
              <span class="font-w-400 font-s-h7 font-grey">
                .........../.........../...........
              </span>
            </div>
          </div>
        </div>

        <h1 class="index-title">نموذج طلب إضافة مستفيد</h1>
        <br />

        <div class="container">
          <div class="row">
            <div class="col-12">
              <span class="font-s-h7">إسم مقدم الطلب : </span>
              <span class="font-w-400 font-s-h7 font-grey">
                ................................................................................................................................................................................
              </span>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-12">
              <span class="font-s-h7">البيــــــــــــــــــــان : </span>
              <span class="font-w-400 font-s-h7 font-grey">
                ................................................................................................................................................................................<br /><br />.....................................................................................................................................................................................................................
              </span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <span class="font-w-700 font-grey">
                بيانات إضافة مستفيد جديد بالبنوك المحلية / الدولية:
              </span>
            </div>
          </div>
        </div>
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="tg">
                <thead>
                  <tr>
                    <td class="table-data width-30 p-1rem">أسم المستفيد</td>
                    <td class="table-data">
                      <div class="font-w-400 font-s-h6"></div>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-data width-30 p-1rem">عنوان المستفيد</td>
                    <td class="table-data">
                      <div class="font-w-400 font-s-h6"></div>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-data width-30 p-1rem">عملة المستفيد</td>
                    <td class="table-data">
                      <div class="font-w-400 font-s-h6"></div>
                    </td>
                  </tr>
                  <tr>
                    <td class="table-data width-30 p-1rem">إسم بنك المستفيد</td>
                    <td class="table-data">
                      <div class="font-w-400 font-s-h6"></div>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-data width-30 p-1rem">
                      رقم حساب المستفيد
                    </td>
                    <td class="table-data">
                      <div class="font-w-400 font-s-h6"></div>
                    </td>
                  </tr>

                  <tr>
                    <td class="table-data width-30 p-1rem">
                      رمز آيبان للمستفيد<br />IBAN Number
                    </td>
                    <td class="table-data">
                      <div class="font-w-700 font-s-h6 letter-s-1"></div>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <span class="font-s-h7">المحرر / </span
              ><span class="font-w-400 font-s-h7 font-grey"
                >.................................................</span
              >
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-6">
              <span class="font-s-h7">التوقيع / </span>
            </div>
            <div class="col-5 flex justify-end">
              <span class="font-s-h7">يعتمد / </span>
            </div>
          </div>
        </div>
      </section>
  `;

  // PROGRESS 2: close form page and show result html (for startTime + 100):
  generateReport(INDEX_RESULT_HTML, 0);

  setTimeout(() => {
    window.print();
  }, 50);

  setTimeout(() => {
    $("#INDEX_MAIN_PAGE").removeClass("hide");
    $("#INDEX_RESULT_PAGE").addClass("hide");
    $("#RESULT_ACTION_BUTTONS").addClass("hide");
    $("#INDEX_RESULT_PAGE").html("");
    $("body").css("background-color", "var(--sec-color-200)");
  }, 55);
});
