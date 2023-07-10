let display = null;
let equation = null;
let value_save = null;
let operation = null;
let operator = false;

const load = () => {
  display = document.getElementById("display");
  equation = document.getElementById("equation");
};

function ce() {
  if (equation.innerHTML == false) {
    display.innerHTML = "";
  }
}

function c() {
  display.innerHTML = "";
  equation.innerHTML = "";
  value_save = null;
  result = null;
}

function remove_sth() {
  if (display.innerHTML) {
    display.innerHTML = display.innerHTML.slice(
      0,
      display.innerHTML.length - 1
    );
  }
}

function number(num) {
  display.innerHTML += num;
}

function dot() {
  let content = display.innerHTML;
  let got_dot = content.indexOf(".");

  if (got_dot == -1) {
    display.innerHTML += ".";
  }
}

function operatorPressed(pressedOperator) {
  if (operator === false) {
    value_save = display.innerHTML;
    equation.innerHTML = display.innerHTML + pressedOperator;
    display.innerHTML = "";
    operator = true;
    operation = pressedOperator;
    return;
  }

  if (operator === true) {
    equation.innerHTML =
      equation.innerHTML.slice(0, equation.innerHTML.length - 1) +
      pressedOperator;
    operation = pressedOperator;
    return;
  }
}

function test() {
  let result;
  let value2 = null;
  let content = display.innerHTML;

  if (value_save != null && content) {
    try {
      value2 = parseFloat(content);
      value_save = parseFloat(value_save);
    } catch (error) {
      console.log(error.message);
    }
    equation.innerHTML += value2 + "=";

    switch (operation) {
      case "+":
        result = value_save + value2;
        break;
      case "-":
        result = value_save - value2;
        break;
      case "*":
        result = value_save * value2;
        break;
      case "/":
        result = value_save / value2;
        break;
    }
    equation.innerHTML += result;
    display.innerHTML = result;
    operator = false;
  }
}

window.addEventListener("load", () => load());
