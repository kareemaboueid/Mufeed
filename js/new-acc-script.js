const CUST_CREDIT_LIMIT = document.querySelector("#CUST_CREDIT_LIMIT");
const VIEW_CREDIT_LIMIT = document.querySelector("#VIEW_CREDIT_LIMIT");
const CUST_CREDIT_LIMIT_CURRENCY = document.querySelector(
  "#CUST_CREDIT_LIMIT_CURRENCY"
);

const underTen = [
  "واحد",
  "إثنان",
  "ثلاثة",
  "أربعة",
  "خمسة",
  "ستة",
  "سبعة",
  "ثمانية",
  "تسعة",
];
const betweenTenAndTwinty = [
  "إحدى",
  "إثنا",
  "ثلاثة",
  "أربعة",
  "خمسة",
  "ستة",
  "سبعة",
  "ثمانية",
  "تسعة",
];
const multiOfTen = [
  "عشرة",
  "عشرون",
  "ثلاثون",
  "أربعون",
  "خمسون",
  "ستون",
  "سبعون",
  "ثمانون",
  "تسعون",
];
const multiOfHundred = [
  "مائة",
  "مائتين",
  "ثلاثمائة",
  "أربعمائة",
  "خمسمائة",
  "ستمائة",
  "سبعمائة",
  "ثمانمائة",
  "تسعمائة",
];
const multiOfThousand = [
  "ألف",
  "ألفان",
  "ثلاثة آلاف",
  "أربعة آلاف",
  "خمسة آلاف",
  "ستة آلاف",
  "سبعة آلاف",
  "ثمانية آلاف",
  "تسعة آلاف",
];

// convert number to words:

let convertToWords = num => {
  let str = num.toString();
  let result = "";

  // check if number is negative || zero || length greater than 12
  if (str.length > 12 || str[0] === "0") {
    result = "نتيجة غير معروفة!";
  }
  // ------------------

  // else if number < 10:
  else if (str.length === 1) {
    result = underTen[str - 1];
  }
  // ------------------

  // else if number = 10:
  else if (str.length === 2) {
    // else if number > 10 and < 20:
    // [11, 12, 13, 14, 15, 16, 17, 18, 19]
    if (str[0] === "1" && str[1] !== "0") {
      result = betweenTenAndTwinty[str[1] - 1] + " عشرة";
    }
    // else if number > multi of 20 and < 100:
    // [20, 30, 40, 50, 60, 70, 80, 90]
    else if (str[0] >= "1" && str[1] === "0") {
      result = multiOfTen[str[0] - 1];
    }
    // else if number > multi of 20 and < 100:
    // [21, 22, 23, 24, 25, 26, 27, 28, 29, ... , 99]
    else if (str[0] > "1" && str[1] !== "0") {
      result = underTen[str[1] - 1] + " و " + multiOfTen[str[0] - 1];
    }
  }
  // ------------------

  // else if number => 100:
  else if (str.length === 3) {
    // if number is multi of 100
    // [100, 200, 300, 400, 500, 600, 700, 800, 900]:
    if (str[0] !== "0" && str[1] === "0" && str[2] === "0") {
      result = multiOfHundred[str[0] - 1];
    }
    // if number is not multi of 100 and multi of 10
    // [110, 120, 130, 140, 150, 160, 170, 180, 190]:
    else if (str[0] !== "0" && str[1] !== "0" && str[2] === "0") {
      result = multiOfHundred[str[0] - 1] + " و " + multiOfTen[str[1] - 1];
    }
    // if number is not multi of 100 and not multi of 10 and < 20 and > 10
    // [411, 112, 113, 114, 115, 116, 117, 118, 119]:
    else if (str[0] !== "0" && str[1] === "1" && str[2] !== "0") {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة";
    }
    // if number is not multi of 100 and not multi of 10 and < 10:
    // [101, 102, 103, 104, 105, 106, 107, 108, 109]:
    else if (
      str[0] !== "0" &&
      str[1] < "1" &&
      str[1] === "0" &&
      str[2] !== "0"
    ) {
      result = multiOfHundred[str[0] - 1] + " و " + underTen[str[2] - 1];
    }
    // else number by number:
    else if (str[0] !== "0" && str[1] !== "0" && str[2] !== "0") {
      result =
        multiOfHundred[str[0] - 1] +
        " " +
        underTen[str[2] - 1] +
        " و " +
        multiOfTen[str[1] - 1];
    }
  }
  // ------------------

  // else if number >= 1000:
  else if (str.length === 4) {
    // if number > 1000 and not multi of 100 and multi of 10 and < 10:
    // [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009]:
    if (str[0] !== "0" && str[1] === "0" && str[2] === "0" && str[3] !== "0") {
      result = multiOfThousand[str[0] - 1] + " و " + underTen[str[3] - 1];
    }
    // if number > 1000 and not multi of 100 and multi of 10:
    // [1010, 1020, 1030, 1040, 1050, 1060, 1070, 1080, 1090]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] === "0"
    ) {
      result = multiOfThousand[str[0] - 1] + " و " + multiOfTen[str[2] - 1];
    }
    // if number > 1000 and not multi of 100 and not multi of 10 and < 20 and > 10
    // [1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] === "1" &&
      str[3] !== "0"
    ) {
      result =
        multiOfThousand[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[3] - 1] +
        " عشرة";
    }
    // if number > 1000 and not multi of 100 and not multi of 10 and < 20:
    // [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] > "1" &&
      str[3] !== "0"
    ) {
      result =
        multiOfThousand[str[0] - 1] +
        " و " +
        underTen[str[3] - 1] +
        " و " +
        multiOfTen[str[2] - 1];
    }

    // if number is multi of 1000:
    // [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]:
    if (str[0] !== "0" && str[1] === "0" && str[2] === "0" && str[3] === "0") {
      result = multiOfThousand[str[0] - 1];
    }
    // if number > 1000 and multi of 100:
    // [1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900]:
    else if (
      str[0] !== "0" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0"
    ) {
      result = multiOfThousand[str[0] - 1] + " و " + multiOfHundred[str[1] - 1];
    }
    // if number > 1000 and multi of 100 and multi of 10:
    // [1110, 1120, 1130, 1140, 1150, 1160, 1170, 1180, 1190]:
    else if (
      str[0] !== "0" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] === "0"
    ) {
      result =
        multiOfThousand[str[0] - 1] +
        " و " +
        multiOfHundred[str[1] - 1] +
        " و " +
        multiOfTen[str[2] - 1];
    }
    // if number > 1000 and multi of 100 and not multi of 10 and < 20 and > 10:
    // [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119]:
    else if (
      str[0] !== "0" &&
      str[1] !== "0" &&
      str[2] === "1" &&
      str[3] !== "0"
    ) {
      result =
        multiOfThousand[str[0] - 1] +
        " و " +
        multiOfHundred[str[1] - 1] +
        " و " +
        betweenTenAndTwinty[str[3] - 1] +
        " عشرة";
    }
    // if number > 1000 and multi of 100 and not multi of 10:
    // [1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109]:
    else if (
      str[0] !== "0" &&
      str[1] !== "0" &&
      str[2] < "1" &&
      str[2] === "0" &&
      str[3] !== "0"
    ) {
      result =
        multiOfThousand[str[0] - 1] +
        " و " +
        multiOfHundred[str[1] - 1] +
        " و " +
        underTen[str[3] - 1];
    }
    // if number > 1000 and multi of 100 and multi of 10 and < 10:
    // [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129]:
    else if (
      str[0] !== "0" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] !== "0"
    ) {
      result =
        multiOfThousand[str[0] - 1] +
        " و " +
        multiOfHundred[str[1] - 1] +
        " و " +
        underTen[str[3] - 1] +
        " و " +
        multiOfTen[str[2] - 1];
    }
  }
  // ------------------
  // else if number > 10000:
  else if (str.length === 5) {
    // if number > 10000:
    // [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000]:
    if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] === "0"
    ) {
      result = multiOfTen[str[0] - 1] + " آلاف";
    }
    // if number > 10000 and not multi of 1000 and multi of 100 and < 10:
    // [10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] !== "0"
    ) {
      result = multiOfTen[str[0] - 1] + " آلاف" + " و " + underTen[str[4] - 1];
    }
    // if number > 10000 and not multi of 1000 and multi of 100 and multi of 10:
    // [10010, 10020, 10030, 10040, 10050, 10060, 10070, 10080, 10090]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] === "0"
    ) {
      result =
        multiOfTen[str[0] - 1] + " آلاف" + " و " + multiOfTen[str[3] - 1];
    }
    // if number > 10000 and not multi of 1000 and multi of 100 and < 20 and > 10:
    // [10011, 10012, 10013, 10014, 10015, 10016, 10017, 10018, 10019]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] === "1" &&
      str[4] !== "0"
    ) {
      result =
        multiOfTen[str[0] - 1] +
        " آلاف" +
        " و " +
        betweenTenAndTwinty[str[4] - 1] +
        " عشرة";
    }
    // if number > 10000 and not multi of 1000 and multi of 100 and > 20:
    // [10021, 10022, 10023, 10024, 10025, 10026, 10027, 10028, 10029]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] > "1" &&
      str[4] !== "0"
    ) {
      result =
        multiOfTen[str[0] - 1] +
        " آلاف" +
        " و " +
        underTen[str[4] - 1] +
        " و " +
        multiOfTen[str[3] - 1];
    }
    // if number > 10000 and not multi of 1000 and multi of 100:
    // [10100, 10200, 10300, 10400, 10500, 10600, 10700, 10800, 10900]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] === "0"
    ) {
      result =
        multiOfTen[str[0] - 1] + " آلاف" + " و " + multiOfHundred[str[2] - 1];
    }
    // if number > 10000 and not multi of 1000 and multi of 100 and multi of 10:
    // [10110, 10120, 10130, 10140, 10150, 10160, 10170, 10180, 10190]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] === "0"
    ) {
      result =
        multiOfTen[str[0] - 1] +
        " آلاف" +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        multiOfTen[str[3] - 1];
    }
    // if number > 10000 and not multi of 1000 and multi of 100 and < 10:
    // [10101, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] !== "0"
    ) {
      result =
        multiOfTen[str[0] - 1] +
        " آلاف" +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        underTen[str[4] - 1];
    }
    // if number > 10000 and not multi of 1000 and multi of 100 and < 20 and > 10:
    // [10111, 10112, 10113, 10114, 10115, 10116, 10117, 10118, 10119]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] === "1" &&
      str[4] !== "0"
    ) {
      result =
        multiOfTen[str[0] - 1] +
        " آلاف" +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        betweenTenAndTwinty[str[4] - 1] +
        " عشرة";
    }
    // if number > 10000 and not multi of 1000 and multi of 100 and > 20:
    // [10121, 10122, 10123, 10124, 10125, 10126, 10127, 10128, 10129]:
    else if (
      str[0] !== "0" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] > "1" &&
      str[4] !== "0"
    ) {
      result =
        multiOfTen[str[0] - 1] +
        " آلاف" +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        underTen[str[4] - 1] +
        " و " +
        multiOfTen[str[3] - 1];
    }
    // if number > 10000 and multi of 1000 and multi of 100 and multi of 10:
    // [11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] === "0"
    ) {
      result = betweenTenAndTwinty[str[1] - 1] + " عشرة " + " ألف";
    }
    // if number > 10000 and multi of 1000 and multi of 100 and < 10:
    // [11001, 11002, 11003, 11004, 11005, 11006, 11007, 11008, 11009]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] !== "0"
    ) {
      result =
        betweenTenAndTwinty[str[1] - 1] +
        " عشرة " +
        " ألف " +
        " و " +
        underTen[str[4] - 1];
    }
    // if number > 10000 and multi of 1000 and multi of 100 and < 20 and > 10:
    // [11011, 11012, 11013, 11014, 11015, 11016, 11017, 11018, 11019]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "1" &&
      str[4] !== "0"
    ) {
      result =
        betweenTenAndTwinty[str[1] - 1] +
        " عشرة " +
        " ألف " +
        " و " +
        betweenTenAndTwinty[str[4] - 1] +
        " عشرة";
    }
    // if number > 10000 and multi of 1000 and not multi of 100 and multi of 10:
    // [11010, 11020, 11030, 11040, 11050, 11060, 11070, 11080, 11090]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] === "0"
    ) {
      result =
        betweenTenAndTwinty[str[1] - 1] +
        " عشرة " +
        " ألف " +
        " و " +
        multiOfTen[str[3] - 1];
    }
    // if number > 10000 and multi of 1000 and multi of 100 and multi of 10:
    // [11110, 11120, 11130, 11140, 11150, 11160, 11170, 11180, 11190]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] === "0"
    ) {
      result =
        betweenTenAndTwinty[str[1] - 1] +
        " عشرة " +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        multiOfTen[str[3] - 1];
    }

    // if number > 10000 and multi of 1000 and multi of 100 and > 20:
    // [11021, 11022, 11023, 11024, 11025, 11026, 11027, 11028, 11029]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] > "1" &&
      str[4] !== "0"
    ) {
      result =
        betweenTenAndTwinty[str[1] - 1] +
        " عشرة " +
        " ألف " +
        " و " +
        underTen[str[4] - 1] +
        " و " +
        multiOfTen[str[3] - 1];
    }
    // if number > 10000 and multi of 1000 and < 100 and multi of 10:
    // [11100,11200,11300,11400,11500,11600,11700,11800,11900]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] === "0"
    ) {
      result =
        betweenTenAndTwinty[str[1] - 1] +
        " عشرة " +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1];
    }
    // if number > 10000 and multi of 1000 and multi of 100 and < 10:
    // [11101, 11102, 11103, 11104, 11105, 11106, 11107, 11108, 11109]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] !== "0"
    ) {
      result =
        betweenTenAndTwinty[str[1] - 1] +
        " عشرة " +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        underTen[str[4] - 1];
    }
    // if number > 10000 and multi of 1000 and multi of 100 and < 20 and > 10:
    // [11111, 11112, 11113, 11114, 11115, 11116, 11117, 11118, 11119]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] === "1" &&
      str[4] !== "0"
    ) {
      result =
        betweenTenAndTwinty[str[1] - 1] +
        " عشرة " +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        betweenTenAndTwinty[str[4] - 1] +
        " عشرة";
    }
    // if number > 10000 and multi of 1000 and multi of 100 and > 20:
    // [11121, 11122, 11123, 11124, 11125, 11126, 11127, 11128, 11129]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] > "1" &&
      str[4] !== "0"
    ) {
      result =
        betweenTenAndTwinty[str[1] - 1] +
        " عشرة " +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        underTen[str[4] - 1] +
        " و " +
        multiOfTen[str[3] - 1];
    }
    // if number > 20999 and not multi of 1000 and not multi of 100 and < 10:
    // [21000, 31000, 41000, 51000, 61000, 71000, 81000, 91000,..., 99000]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] === "0"
    ) {
      result = underTen[str[1] - 1] + " و " + multiOfTen[str[0] - 1] + " ألف";
    }
    // if number > 20999 and not multi of 1000 and not multi of 100 and < 10:
    // [21001, 31001, 41001, 51001, 61001, 71001, 81001, 91001,..., 99001]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] !== "0"
    ) {
      result =
        underTen[str[1] - 1] +
        " و " +
        multiOfTen[str[0] - 1] +
        " ألف " +
        " و " +
        underTen[str[4] - 1];
    }
    // if number > 20999 and not multi of 1000 and not multi of 100 and < 20 and > 10:
    // [21011, 31011, 41011, 51011, 61011, 71011, 81011, 91011,..., 99011]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "1" &&
      str[4] !== "0"
    ) {
      result =
        underTen[str[1] - 1] +
        " و " +
        multiOfTen[str[0] - 1] +
        " ألف " +
        " و " +
        betweenTenAndTwinty[str[4] - 1] +
        " عشرة";
    }

    // if number > 20999 and not multi of 1000 and not multi of 100 and > 20:
    // [21121, 31121, 41121, 51121, 61121, 71221, 81221, 91221,..., 99220]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] > "1" &&
      str[4] !== "0"
    ) {
      result =
        underTen[str[1] - 1] +
        " و " +
        multiOfTen[str[0] - 1] +
        " ألف " +
        " و " +
        underTen[str[4] - 1] +
        " و " +
        multiOfTen[str[3] - 1];
    }
    // if number > 20999 and not multi of 1000 and not multi of 100 and multi of 10:
    // [21010, 31020, 41030, 51040, 61050, 71060, 81070, 91080,..., 99090]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] === "0"
    ) {
      result =
        underTen[str[1] - 1] +
        " و " +
        multiOfTen[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfTen[str[3] - 1];
    }
    // if number > 20999 and not multi of 1000 and multi of 100:
    // [21100, 31200, 41300, 51400, 61500, 71600, 81700, 91800,..., 99200]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] === "0"
    ) {
      result =
        underTen[str[1] - 1] +
        " و " +
        multiOfTen[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1];
    }
    // if number > 20999 and not multi of 1000 and multi of 100 and < 10:
    // [21101, 31201, 41301, 51401, 61501, 71601, 81701, 91801,..., 99210]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] !== "0"
    ) {
      result =
        underTen[str[1] - 1] +
        " و " +
        multiOfTen[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        underTen[str[4] - 1];
    }
    // if number > 20999 and not multi of 1000 and multi of 100 and < 20 and > 10:
    // [21111, 31211, 41311, 51411, 61511, 71611, 81711, 91811,..., 99220]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] === "1" &&
      str[4] !== "0"
    ) {
      result =
        underTen[str[1] - 1] +
        " و " +
        multiOfTen[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        betweenTenAndTwinty[str[4] - 1] +
        " عشرة";
    }
    // if number > 20999 and not multi of 1000 and multi of 100 and > 20:
    // [21121, 31221, 41321, 51421, 61521, 71621, 81721, 91821,..., 99220]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] > "1" &&
      str[4] !== "0"
    ) {
      result =
        underTen[str[1] - 1] +
        " و " +
        multiOfTen[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        underTen[str[4] - 1] +
        " و " +
        multiOfTen[str[3] - 1];
    }
    // if number > 20999 and not multi of 1000 and multi of 100 and multi of 10:
    // [21010, 31020, 41030, 51040, 61050, 71060, 81070, 91080,..., 99090]:
    else if (
      str[0] > "1" &&
      str[1] !== "0" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] === "0"
    ) {
      result =
        underTen[str[1] - 1] +
        " و " +
        multiOfTen[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[2] - 1] +
        " و " +
        multiOfTen[str[3] - 1];
    }
  }
  // ------------------
  // else if number > 10000:
  else if (str.length === 6) {
    // if number > 100000:
    // [100000, 200000, 300000, 400000, 500000, 600000, 700000]:
    if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] === "0" &&
      str[5] === "0"
    ) {
      result = multiOfHundred[str[0] - 1] + " ألف";
    }
    // if number > 100000 and not multi of 10000 and not multi of 1000 and not multi of 100 < 10:
    // [100001, 200001, 300001, 400001, 500001, 600001, 700001, 800001, 900001]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] === "0" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] + " ألف " + " و " + underTen[str[5] - 1];
    }
    // if number > 100000 and not multi of 10000 and not multi of 1000 and not multi of 100 and < 20 and > 10:
    // [100011, 200011, 300011, 400011]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] === "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " ألف " +
        " و " +
        betweenTenAndTwinty[str[5] - 1] +
        " عشرة";
    }
    // if number > 100000 and not multi of 10000 and not multi of 1000 and not multi of 100 and > 20:
    // [100121, 200121, 300121, 400121, 500121, 600121, 700121, 800121, 900121]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] > "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " ألف " +
        " و " +
        underTen[str[5] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and not multi of 10000 and not multi of 1000 and not multi of 100 and multi of 10:
    // [100010, 200010, 300010, 400010]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] !== "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] + " ألف " + " و " + multiOfTen[str[4] - 1];
    }
    // if number > 100000 and not multi of 10000 and not multi of 1000 and multi of 100:
    // [100100, 200100, 300100, 400100, 500100, 600100, 700100, 800100, 900100]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] === "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1];
    }
    // if number > 100000 and not multi of 10000 and not multi of 1000 and multi of 100 and < 10:
    // [100101, 200101, 300101, 400101, 500101, 600101, 700101, 800101, 900101]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] === "0" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        underTen[str[5] - 1];
    }
    // if number > 100000 and not multi of 10000 and not multi of 1000 and multi of 100 and < 20 and > 10:
    // [100111, 200111, 300111, 400111, 500111, 600111, 700111, 800111, 900111]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] === "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        betweenTenAndTwinty[str[5] - 1] +
        " عشرة";
    }
    // if number > 100000 and not multi of 10000 and not multi of 1000 and multi of 100 and > 20:
    // [100121, 200121, 300121, 400121, 500121, 600121, 700121, 800121, 900121]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] > "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        underTen[str[5] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and not multi of 10000 and not multi of 1000 and multi of 100 and multi of 10:
    // [100010, 200010, 300010, 400010]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] !== "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and not multi of 10000 and multi of 1000:
    // [101000, 102000, 103000, 104000, 105000, 106000, 107000, 108000, 109000]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] === "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] + " و " + underTen[str[2] - 1] + " ألف ";
    }
    // if number > 100000 and not multi of 10000 and multi of 1000 and < 10:
    // [101001, 102001, 103001, 104001, 105001, 106001, 107001, 108001, 109001]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] === "0" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        underTen[str[2] - 1] +
        " ألف " +
        " و " +
        underTen[str[5] - 1];
    }
    // if number > 100000 and not multi of 10000 and multi of 1000 and < 20 and > 10:
    // [101011, 102011, 103011, 104011, 105001, 106001, 107011, 108011, 109011]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] === "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        underTen[str[2] - 1] +
        " ألف " +
        " و " +
        betweenTenAndTwinty[str[5] - 1] +
        " عشرة";
    }
    // if number > 100000 and not multi of 10000 and multi of 1000 and > 20:
    // [101021, 102021, 103021, 104021, 105021, 106021, 107021, 108021, 109021]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] > "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        underTen[str[2] - 1] +
        " ألف " +
        " و " +
        underTen[str[5] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and not multi of 10000 and multi of 1000 and multi of 10:
    // [101010, 102010, 103010, 1040010, 1050210, 1060210, 1070210, 1080210, 1090210]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] !== "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        underTen[str[2] - 1] +
        " ألف " +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and not multi of 10000 and multi of 1000 multi of 100:
    // [101100, 102100, 103110, 104110, 105110, 106110, 107110, 108110, 109110]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] === "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        underTen[str[2] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1];
    }
    // if number > 100000 and not multi of 10000 and multi of 1000 multi of 100 and < 10:
    // [101101, 102101, 103111, 104101, 105111, 106101, 107101, 108101, 109101]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] === "0" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        underTen[str[2] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        underTen[str[5] - 1];
    }
    // if number > 100000 and not multi of 10000 and multi of 1000 multi of 100 and < 20 and > 10:
    // [101111, 102111, 103101, 104101, 105111, 106101, 107101, 108101, 109101]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] === "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        underTen[str[2] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        betweenTenAndTwinty[str[5] - 1] +
        " عشرة";
    }
    // if number > 100000 and not multi of 10000 and multi of 1000 multi of 100 and > 20:
    // [101121, 102121, 103101, 104101, 105121, 106101, 107101, 108101, 109101]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] > "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        underTen[str[2] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        underTen[str[5] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and not multi of 10000 and multi of 1000 multi of 100 and multi of 10:
    // [101010, 102010, 103010, 1040010, 1050210, 1060210, 1070210, 1080210, 1090210]:
    else if (
      str[0] === "1" &&
      str[1] === "0" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] !== "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        underTen[str[2] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and multi of 10000:
    // [110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] === "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] + " و " + multiOfTen[str[1] - 1] + " ألف ";
    }
    // if number > 100000 and multi of 10000 and < 10:
    // [110001, 120001, 130001, 140001, 150001, 160001, 170001, 180001, 190001]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] === "0" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        multiOfTen[str[1] - 1] +
        " ألف " +
        " و " +
        underTen[str[5] - 1];
    }
    // if number > 100000 and multi of 10000 and < 20 and > 10:
    // [110111, 120111, 130111, 140111, 150111, 160111, 170111, 180111, 190111]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] === "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        multiOfTen[str[1] - 1] +
        " ألف " +
        " و " +
        betweenTenAndTwinty[str[5] - 1] +
        " عشرة";
    }
    // if number > 100000 and multi of 10000 and > 20:
    // [110121, 120121, 130121, 140121, 150121, 160121, 170121, 180121, 190121]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] > "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        multiOfTen[str[1] - 1] +
        " ألف " +
        " و " +
        underTen[str[5] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and multi of 10000 and multi of 10:
    // [110110, 120110, 130110, 140110, 150110, 160110, 170110, 180110, 190110]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] === "0" &&
      str[4] !== "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        multiOfTen[str[1] - 1] +
        " ألف " +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and multi of 10000 and multi of 100:
    // [110100, 120100, 130100, 140100, 150100, 160100, 170100, 180100, 190100]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] === "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        multiOfTen[str[1] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1];
    }
    // if number > 100000 and multi of 10000 and multi of 100 and multi of 10:
    // [110101, 120101, 130101, 140101, 150101, 160101, 170101, 180101, 190101]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] !== "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        multiOfTen[str[1] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 100000 and multi of 10000 and multi of 100 and multi of 10 and < 20:
    // [110111, 120111, 130111, 140111, 150111, 160111, 170111, 180111, 190111]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] === "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        multiOfTen[str[1] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        betweenTenAndTwinty[str[5] - 1] +
        " عشرة";
    }
    // if number > 100000 and multi of 10000 and multi of 100 and multi of 10 and > 20:
    // [110121, 120121, 130121, 140121, 150121, 160121, 170121, 180121, 190121]:
    else if (
      str[0] === "1" &&
      str[1] !== "0" &&
      str[2] === "0" &&
      str[3] !== "0" &&
      str[4] > "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        multiOfTen[str[1] - 1] +
        " ألف " +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        underTen[str[5] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and not multi of 100 and not multi of 10:
    // [111000, 112000, 113000, 114000, 115000, 116000, 117000, 118000, 119000]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] === "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف";
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and not multi of 100 and < 10:
    // [111001, 112001, 113001, 114001, 115001, 116001, 117001, 118001, 119001]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] === "0" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف" +
        " و " +
        underTen[str[5] - 1];
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and not multi of 100 and > 10 and < 20:
    // [111011, 112011, 113011, 114011, 115011, 116011, 117011, 118011, 119011]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] === "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف" +
        " و " +
        betweenTenAndTwinty[str[5] - 1] +
        " عشرة";
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and not multi of 100 and > 10 and > 20:
    // [111021, 112021, 113021, 114021, 115021, 116021, 117021, 118021, 119021]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] > "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف" +
        " و " +
        underTen[str[5] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and not multi of 100 and multi of 10:
    // [111010, 112010, 113010, 114010, 115010, 116010, 117010, 118010, 119010]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] === "0" &&
      str[4] !== "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف" +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and not multi of 100:
    // [111100, 112100, 113100, 114100, 115100, 116100, 117100, 118100, 119100]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] === "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف" +
        " و " +
        multiOfHundred[str[3] - 1];
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and multi of 100 and < 10:
    // [111101, 112101, 113201, 114301, 115301, 116401, 117501, 118601, 119701]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] === "0" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف" +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        underTen[str[5] - 1];
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and multi of 100 and > 10 and < 20:
    // [111111, 112111, 113311, 114411, 115411, 116511, 117611, 118711, 119811]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] === "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف" +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        betweenTenAndTwinty[str[5] - 1] +
        " عشرة";
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and multi of 100 and > 10 and > 20:
    // [111121, 112121, 113321, 114421, 115421, 116521, 117621, 118721, 119821]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] > "1" &&
      str[5] !== "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف" +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        underTen[str[5] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }
    // if number > 110999 and not multi of 10000 and not multi of 1000 and multi of 100 and multi of 10:
    // [111110, 112110, 113210, 114310, 115410, 116410, 117510, 118610, 119810]:
    else if (
      str[0] !== "0" &&
      str[1] === "1" &&
      str[2] !== "0" &&
      str[3] !== "0" &&
      str[4] !== "0" &&
      str[5] === "0"
    ) {
      result =
        multiOfHundred[str[0] - 1] +
        " و " +
        betweenTenAndTwinty[str[2] - 1] +
        " عشرة" +
        " ألف" +
        " و " +
        multiOfHundred[str[3] - 1] +
        " و " +
        multiOfTen[str[4] - 1];
    }

    // if number > 10000 and not multi of 1000 and multi of 100 and multi of 10:
    // [10010, 10020, 10030, 10040, 10050, 10060, 10070, 10080, 10090]:
    // if number > 10000 and not multi of 1000 and multi of 100 and < 20 and > 10:
    // [10011, 10012, 10013, 10014, 10015, 10016, 10017, 10018, 10019]:
    // if number > 10000 and not multi of 1000 and multi of 100 and > 20:
    // [10021, 10022, 10023, 10024, 10025, 10026, 10027, 10028, 10029]:
    // if number > 10000 and not multi of 1000 and multi of 100:
    // [10100, 10200, 10300, 10400, 10500, 10600, 10700, 10800, 10900]:
    // if number > 10000 and not multi of 1000 and multi of 100 and multi of 10:
    // [10110, 10120, 10130, 10140, 10150, 10160, 10170, 10180, 10190]:
    // if number > 10000 and not multi of 1000 and multi of 100 and < 10:
    // [10101, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109]:
    // if number > 10000 and not multi of 1000 and multi of 100 and < 20 and > 10:
    // [10111, 10112, 10113, 10114, 10115, 10116, 10117, 10118, 10119]:
    // if number > 10000 and not multi of 1000 and multi of 100 and > 20:
    // [10121, 10122, 10123, 10124, 10125, 10126, 10127, 10128, 10129]:
    // if number > 10000 and multi of 1000 and multi of 100 and multi of 10:
    // [11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000]:
    // if number > 10000 and multi of 1000 and multi of 100 and < 10:
    // [11001, 11002, 11003, 11004, 11005, 11006, 11007, 11008, 11009]:
    // if number > 10000 and multi of 1000 and multi of 100 and < 20 and > 10:
    // [11011, 11012, 11013, 11014, 11015, 11016, 11017, 11018, 11019]:
    // if number > 10000 and multi of 1000 and not multi of 100 and multi of 10:
    // [11010, 11020, 11030, 11040, 11050, 11060, 11070, 11080, 11090]:
    // if number > 10000 and multi of 1000 and multi of 100 and multi of 10:
    // [11110, 11120, 11130, 11140, 11150, 11160, 11170, 11180, 11190]:
    // if number > 10000 and multi of 1000 and multi of 100 and > 20:
    // [11021, 11022, 11023, 11024, 11025, 11026, 11027, 11028, 11029]:
    // if number > 10000 and multi of 1000 and < 100 and multi of 10:
    // [11100,11200,11300,11400,11500,11600,11700,11800,11900]:
    // if number > 10000 and multi of 1000 and multi of 100 and < 10:
    // [11101, 11102, 11103, 11104, 11105, 11106, 11107, 11108, 11109]:
    // if number > 10000 and multi of 1000 and multi of 100 and < 20 and > 10:
    // [11111, 11112, 11113, 11114, 11115, 11116, 11117, 11118, 11119]:
    // if number > 10000 and multi of 1000 and multi of 100 and > 20:
    // [11121, 11122, 11123, 11124, 11125, 11126, 11127, 11128, 11129]:
    // if number > 20999 and not multi of 1000 and not multi of 100 and < 10:
    // [21000, 31000, 41000, 51000, 61000, 71000, 81000, 91000,..., 99000]:
    // if number > 20999 and not multi of 1000 and not multi of 100 and < 10:
    // [21001, 31001, 41001, 51001, 61001, 71001, 81001, 91001,..., 99001]:
    // if number > 20999 and not multi of 1000 and not multi of 100 and < 20 and > 10:
    // [21011, 31011, 41011, 51011, 61011, 71011, 81011, 91011,..., 99011]:
    // if number > 20999 and not multi of 1000 and not multi of 100 and > 20:
    // [21121, 31121, 41121, 51121, 61121, 71221, 81221, 91221,..., 99220]:
    // if number > 20999 and not multi of 1000 and not multi of 100 and multi of 10:
    // [21010, 31020, 41030, 51040, 61050, 71060, 81070, 91080,..., 99090]:
    // if number > 20999 and not multi of 1000 and multi of 100:
    // [21100, 31200, 41300, 51400, 61500, 71600, 81700, 91800,..., 99200]:
    // if number > 20999 and not multi of 1000 and multi of 100 and < 10:
    // [21101, 31201, 41301, 51401, 61501, 71601, 81701, 91801,..., 99210]:
    // if number > 20999 and not multi of 1000 and multi of 100 and < 20 and > 10:
    // [21111, 31211, 41311, 51411, 61511, 71611, 81711, 91811,..., 99220]:
    // if number > 20999 and not multi of 1000 and multi of 100 and > 20:
    // [21121, 31221, 41321, 51421, 61521, 71621, 81721, 91821,..., 99220]:
    // if number > 20999 and not multi of 1000 and multi of 100 and multi of 10:
    // [21010, 31020, 41030, 51040, 61050, 71060, 81070, 91080,..., 99090]:
  }

  // return result
  return result + " " + CUST_CREDIT_LIMIT_CURRENCY.value;
};

// type the number and get the result in view_credit_limit paragraph:
CUST_CREDIT_LIMIT.addEventListener("keyup", function () {
  VIEW_CREDIT_LIMIT.innerHTML = convertToWords(this.value);
});
