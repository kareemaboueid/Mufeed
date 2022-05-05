"use strict";

/*GLOBAL BUTTONS*/

// FUNCTION: get elements by name:
const $Name = name => document.getElementsByName(name);

// FUNCTION: open modal window:
const openModalWindow = (modalTitle, modalContent) => {
  // open modal window by removing hide class:
  $("#LOADING_WIN_LAYOUT").removeClass("hide");
  $("#MODAL_WINDOW").removeClass("hide");
  // set modal window title:
  $("#MODAL_TITLE").text(modalTitle);
  // set modal window content:
  $("#MODAL_CONTENT").html(modalContent);
};

// FUNCTION: close modal window:
const closeModalWindow = () => {
  // close modal window by adding hide class:
  $("#LOADING_WIN_LAYOUT").addClass("hide");
  $("#MODAL_WINDOW").addClass("hide");
  // clear modal window title:
  $("#MODAL_TITLE").text("");
  // clear modal window content:
  $("#MODAL_CONTENT").html("");
};

// FUNCTION: close modal window:
$("#MODAL_CLOSE_BTN").click(() => {
  closeModalWindow();
});

// FUNCTION: show loading window:
const showLoadingWindow = time => {
  $("#LOADING_WIN").removeClass("hide");
  $("#LOADING_WIN_LAYOUT").removeClass("hide");
  setTimeout(() => {
    $("#LOADING_WIN").addClass("hide");
    $("#LOADING_WIN_LAYOUT").addClass("hide");
  }, time);
};

// FUNCTION: close form page and show result:
const generateReport = (data, time) => {
  setTimeout(() => {
    $("#INDEX_MAIN_PAGE").addClass("hide");
    $("#INDEX_RESULT_PAGE").removeClass("hide");
    $("#RESULT_ACTION_BUTTONS").removeClass("hide");
    $("#INDEX_RESULT_PAGE").html(data);
    $("body").css("background-color", "#fff");
  }, time);
};

// FUNCTION: show success message:
const showSuccessMessage = (msg, time) => {
  setTimeout(() => {
    $("#ALERT_BOX").text(msg);
    $("#ALERT_BOX").css("background-color", "rgb(164, 243, 200)");
    $("#ALERT_BOX").css("border", "1px solid rgb(84, 182, 97)");
    $("#ALERT_BOX").removeClass("hide");
  }, time);
};

// FUNCTION: hide success message:
const hideSuccessMessage = time => {
  setTimeout(() => {
    $("#ALERT_BOX").css("background-color", "none");
    $("#ALERT_BOX").css("border", "none");
    $("#ALERT_BOX").addClass("hide");
  }, time);
};
// ====================================================

// FUNCTION: show fail message:
const showFailMessage = (msg, time) => {
  setTimeout(() => {
    $("#ALERT_BOX").text(msg);
    $("#ALERT_BOX").css("background-color", "rgb(243, 164, 164)");
    $("#ALERT_BOX").css("border", "1px solid rgb(182, 84, 84)");
    $("#ALERT_BOX").removeClass("hide");
  }, time);
};

// FUNCTION: hide fail message:
const hideFailMessage = time => {
  setTimeout(function () {
    $("#ALERT_BOX").css("background-color", "none");
    $("#ALERT_BOX").css("border", "none");
    $("#ALERT_BOX").addClass("hide");
  }, time);
};
// ====================================================

// FUNCTION: click RESULT_CONTENT_CLOSE_BUTTON:
$("#RESULT_CONTENT_CLOSE_BUTTON").click(() => {
  $("#INDEX_MAIN_PAGE").removeClass("hide");
  $("#INDEX_RESULT_PAGE").addClass("hide");
  $("#RESULT_ACTION_BUTTONS").addClass("hide");
  $("#INDEX_RESULT_PAGE").html("");
  $("body").css("background-color", "var(--sec-color-200)");
});
