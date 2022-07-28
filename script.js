let numbers = document.getElementById("numbers").children;
let operators = document.getElementById("operators").children;
let screen = document.getElementById("screen");
let equalTo = document.getElementById("equal");
let digits = "";
let digits1 = "";
let operation = "";
let html = screen.innerHTML;

//Get Digits:
Array.from(numbers).forEach((element) => {
  element.addEventListener("click", function () {
    if (String(screen.innerHTML).length >= 774) {
    } else {
      
      recent = element.innerHTML;
      html += element.innerHTML;
      screen.innerHTML = html;
      digits = digits.concat(element.innerText);
    }
  });
});
//Clear Screen:
clr = document.getElementById("clear");
clr.addEventListener("click", function () {
  screen.innerHTML = "";
  html = "";
  digits= "";
});
//Backspace:
clr = document.getElementById("Backspace");
clr.addEventListener("click", function () {
  
  screen.innerHTML = html;
  screen.innerText = screen.innerText.slice(0, -1);
  html=screen.innerHTML
  console.log(screen.innerText);
  digits = screen.innerText.replace(" ", "");
  
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
            screen.innerHTML = `square of ${digits}`;
          } else if (operation == "sqrt") {
            screen.innerHTML = `sqrt of ${digits}`;
          }
        } else {
          console.log(operation);
          html += element.innerHTML;
          screen.innerHTML = html;
        }
        if (digits1 == "") {
          digits1 = digits;
        }
        digits = "";
      }
    }
  });
});
//Operation:
equalTo.addEventListener("click", function () {
  if (operation == "+") {
    screen.innerHTML = `${Number(digits1) + Number(digits)} `;
  } else if (operation == "-") {
    screen.innerHTML = `${Number(digits1) - Number(digits)} `;
  } else if (operation == "*") {
    screen.innerHTML = `${Number(digits1) * Number(digits)} `;
  } else if (operation == "/") {
    screen.innerHTML = `${Number(digits1) / Number(digits)}`;
  } else if (operation == "sq") {
    screen.innerText = `${Number(digits1) * Number(digits1)}`;
    console.log(operation);
  } else if (operation == "sqrt") {
    console.log(digits1);
    screen.innerText = `${Math.sqrt(Number(digits1))}`;
    console.log(operation);
  }
  digits = "";
  digits1 = "";
});
