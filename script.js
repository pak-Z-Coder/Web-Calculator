let numbers = document.getElementById("numbers").children;
let operators = document.getElementById("operators").children;
let screen = document.getElementById("screen");
let equalTo = document.getElementById("equal");
let string = [];
let operation = "";
let html = screen.innerText;

//Get string:
Array.from(numbers).forEach((element) => {
  element.addEventListener("click", function () {
    if (String(screen.innerHTML).length >= 774) {
    } else {
      recent = element.innerText;
      html += element.innerText;
      screen.innerText = html;
    }
  });
});
//Clear Screen:
clr = document.getElementById("clear");
clr.addEventListener("click", function () {
  screen.innerHTML = "";
  html = "";
  string = "";
});
//Backspace:
clr = document.getElementById("Backspace");
clr.addEventListener("click", function () {
  screen.innerText = screen.innerText.slice(0, -1);
  html = screen.innerText;
  
});
//Get Operator:
Array.from(operators).forEach((element) => {
  element.addEventListener("click", function () {
    if (String(screen.innerHTML).length >= 774) {
    } else {
      if (element == document.getElementById("clear")) {
      } else {
        operation = element.id;
        if (
          element == document.getElementById("sq") ||
          element == document.getElementById("sqrt")
        ) {
          if (operation == "sq") {
            screen.innerText = `square of ${html}`;
          } else if (operation == "sqrt") {
            screen.innerText = `sqrt of ${html}`;
          }
        } else {
          console.log(operation);
          html += ` ${element.id} `;
          screen.innerText = html;
        }
    }
  }});
});
//Operation:
equalTo.addEventListener("click", function () {

  if (operation == "sq") {
    screen.innerText = `${Number(html) * Number(html)}`;
  } else if (operation == "sqrt") {
    screen.innerText = `${Math.sqrt(Number(html))}`;
  }
  else{
    string=screen.innerText;
    screen.innerText = `${eval(string)}`;
  }
});
