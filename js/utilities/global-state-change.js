"use strict";

/*GLOBAL STATE CHANGE*/

// GLOBAL - VARIABLE: set the update state rate:
const updateStateRate = 200;

// GLOBAL - VARIABLE: get generated dow date: day & month & year:
const nowDay = new Date().getDate();
const nowMonth = new Date().getMonth() + 1;
const nowYear = new Date().getFullYear();

// GLOBAL - FUNCTION: get 2 numbers as two digits:
const padtwo = num => (num < 10 ? `0${num}` : num);

// GLOBAL - FUNCTION: convert latin numbers to arabic numbers and export it:
const latinToArNum = number => {
  let arNumOpj = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "/": "/",
  };
  let arNumStr = "";
  for (let i = 0; i < number.length; i++) arNumStr += arNumOpj[number[i]];
  return arNumStr;
};

// GLOBAL - FUNCTION: print number of only 8 digits as a date format:
const formatDate = date => {
  // check if entered number length is 8:
  let dateParts = date.split("");
  let dateGregHij = "";
  // split date into 3 parts, each with 2 digits, between each part is a slash:
  let dateFormat =
    dateParts[4] +
    dateParts[5] +
    dateParts[6] +
    dateParts[7] +
    "/" +
    dateParts[2] +
    dateParts[3] +
    "/" +
    dateParts[0] +
    dateParts[1];
  // check if date is hijri or gregorian:
  dateParts[4] === "1" && dateParts[5] === "4"
    ? (dateGregHij = "هـ")
    : (dateGregHij = "م");

  // if dateParts[0] and dateParts[1] make the days greater than 31, return an error:
  // if dateParts[2] and dateParts[3] make the month greater than 12, return an error:
  if (
    (dateParts[0] === "3" && dateParts[1] > 1) ||
    (dateParts[2] === "1" && dateParts[3] > 2)
  ) {
    return "تأكد من إدخال التاريخ بشكل صحيح";
  }
  // if entered date is between 1 and 8 inform user that it's being processing:
  else if (date.length > 0 && date.length < 8) {
    return "جاري المعالجة . . .";
  }
  // return date in gregorian or hijri format:
  else if (date.length === 8) {
    return latinToArNum(dateFormat) + " " + dateGregHij;
  }
  // if entered number length is not 8:
  else {
    return "تأكد من إدخال التاريخ بشكل صحيح";
  }
};
// ==========================================================
