"use strict";

// CUST_NAME_START on keyup, VIEW_CUST_NAME content update:
$("#CUST_NAME_START").change(function (e) {
  $("#VIEW_CUST_NAME1").text($("select#CUST_NAME_START option:checked").val());
});

// CUST_NAME on keyup, VIEW_CUST_NAME content update:
$("#CUST_NAME").keyup(function (e) {
  $("#VIEW_CUST_NAME2").text($("#CUST_NAME").val());
});

// CUST_NAME_END on keyup, VIEW_CUST_NAME content update:
$("#CUST_NAME_END").change(function (e) {
  $("#VIEW_CUST_NAME3").text($("select#CUST_NAME_END option:checked").val());
});

// CUST_NAME_SUFFIX on keyup, VIEW_CUST_NAME content update:
$("#CUST_NAME_SUFFIX").keyup(function (e) {
  $("#VIEW_CUST_NAME4").text($("#CUST_NAME_SUFFIX").val());
});

// when click on ADD_() button, add parenthesis around CUST_NAME_SUFFIX:
$("#add_parenthesis").click(function (e) {
  e.preventDefault();
  $("#parenthesis1").toggleClass("hide");
  $("#parenthesis2").toggleClass("hide");
});
