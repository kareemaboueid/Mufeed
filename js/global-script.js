"use strict";

// FUNCTION: click DOCS_AND_STATEMENTS link to open modal window:
$("#DOCS_AND_STATEMENTS").click(() => {
  openModalWindow(
    $("#DOCS_AND_STATEMENTS").text(),
    // modal content: other links to open a page:
    `
    <div class="container flex f-column justify-start items-stretch gap-1rem">
      <div class="row">
        <div class="col-4">
          <a
          class="mufeed_service-link card"
          href="./pages/bank-beneficiary-add-request.html"
          title="ذهاب الى صفحة نموذج طلب إضافة مستفيد بنكي"
          >
            <i class="bi bi-file-person-fill line-h-1 font-s-h4"></i>
            <h3 class="mufeed_service-title font-s-h6">
              نموذج طلب إضافة مستفيد بنكي
            </h3>
          </a>
        </div>
        <div class="col-4">
          <a
          class="mufeed_service-link card"
          href="./pages/quittance-statment.html"
          title="ذهاب الى صفحة بيان مخالصة مالية"
          >
            <i class="bi bi-cash-coin line-h-1 font-s-h4"></i>
            <h3 class="mufeed_service-title font-s-h6">
              بيان مخالصة مالية
            </h3>
          </a>
        </div>
      </div>
    </div>
    `
  );
});
