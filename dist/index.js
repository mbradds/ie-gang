"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var justWhy = function () {
  function checkIE() {
    // Internet Explorer 6-11
    var isIE =
    /*@cc_on!@*/
    false || !!document.documentMode;
    return isIE;
  }

  function warnHTML(message) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "alert";
    var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var warning = "";

    if (type == "alert" && title) {
      warning = "<section class=\"alert alert-warning\"><h3> ".concat(title, "\n        </h3>\n        ").concat(message, " \n        </section>");
    } else if (type == "alert" && !title) {
      warning = "<section class=\"alert alert-warning\"><p>".concat(message, "</p></section>");
    } else if (type == "panel") {
      if (title == false) {
        title = "Add a panel title to ieWarn()!";
      }

      warning = "<section class=\"panel panel-warning\">\n        <header class=\"panel-heading\">\n         <h5 class=\"panel-title\">".concat(title, "</h5>\n        </header>\n        <div class=\"panel-body\">\n         <p>").concat(message, "</p>\n        </div>\n      </section>");
    }

    return warning;
  }

  function ieWarn(_ref) {
    var _ref$message = _ref.message,
        message = _ref$message === void 0 ? "" : _ref$message,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? "alert" : _ref$type,
        _ref$title = _ref.title,
        title = _ref$title === void 0 ? "Old Browser" : _ref$title,
        _ref$applyIE = _ref.applyIE,
        applyIE = _ref$applyIE === void 0 ? false : _ref$applyIE;

    try {
      var warnDiv = document.getElementById("ie-warning");
      var ie = checkIE();

      if (applyIE) {
        ie = true;
      }

      if (warnDiv && ie) {
        warnDiv.innerHTML = warnHTML(message, type, title);
      }
    } catch (err) {
      console.log("Error: cant warn user about IE");
    }
  }

  return {
    ieWarn: ieWarn
  };
}();

exports["default"] = justWhy;
