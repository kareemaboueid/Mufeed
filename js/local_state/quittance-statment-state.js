"use strict";

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
