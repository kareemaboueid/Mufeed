"use strict";

/*LOCAL STATE CHANGE - BANK_BENEFICIARY_ADD_REQUEST page*/

// LOCAL - change state of VIEW_REQUEST_DATE text every 200 ms:
setInterval(() => {
  $("#VIEW_REQUEST_DATE").text(
    $("#REQUEST_DATE").val() == ""
      ? // if #MAKE_DATE is empty, return now date.
        formatDate(padtwo(nowDay) + padtwo(nowMonth) + nowYear)
      : // else return #MAKE_DATE value
        formatDate($("#REQUEST_DATE").val())
  );
}, updateStateRate);

// LOCAL - Change state of all radio buttons for checklist:
$("#BENEFICIARY_BANK_TYPE_LOCAL").click(() => {
  $("#BENEFICIARY_BANK_NAME-LOCAL").removeClass("hide");
  $("#BENEFICIARY_BANK_NAME-FOREIGN").addClass("hide");
});
$("#BENEFICIARY_BANK_TYPE_FOREIGN").click(() => {
  $("#BENEFICIARY_BANK_NAME-LOCAL").addClass("hide");
  $("#BENEFICIARY_BANK_NAME-FOREIGN").removeClass("hide");
});
