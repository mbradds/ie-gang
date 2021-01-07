function checkIE() {
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  return isIE;
}

function warnHTML(message, type = "alert", title = false) {
  let warning = "";
  if (type == "alert" && title) {
    warning = `<section class="alert alert-warning"><h3> ${title}
      </h3>
      ${message} 
      </section>`;
  } else if (type == "alert" && !title) {
    warning = `<section class="alert alert-warning"><p>${message}</p></section>`;
  } else if (type == "panel") {
    if (title == false) {
      title = "Add a panel title to ieWarn()!";
    }
    warning = `<section class="panel panel-warning">
      <header class="panel-heading">
       <h5 class="panel-title">${title}</h5>
      </header>
      <div class="panel-body">
       <p>${message}</p>
      </div>
    </section>`;
  }
  return warning;
}

function ieWarn({ message = "", type = "alert", title = "Old Browser" }) {
  let warnDiv = document.getElementById("ie-warning");
  let ie = checkIE();
  ie = true;
  if (warnDiv && ie) {
    warnDiv.innerHTML = warnHTML(message, type, title);
  }
}

export { ieWarn as default };
