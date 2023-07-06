let display = null;
let equation = null;
let value_save = null;
let operation = null;
let prev_result = null;
let operator = false;

function load() {
  display = document.getElementById("display");
  equation = document.getElementById("equation");
}

function ce() {
  if (equation.innerHTML == false) {
    display.innerHTML = "";
  }
}

function c() {
  display.innerHTML = "";
  equation.innerHTML = "";
  value_save = null;
  prev_result = null;
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

function add() {
  if (operator == true) {
    operator = false;
    add();
  } else if (operator == false) {
    if (display.innerHTML) {
      if (value_save == null && prev_result == null) {
        value_save = parseFloat(display.innerHTML);
        equation.innerHTML += display.innerHTML + "+";
      } else if (prev_result != null && operator == false) {
        equation.innerHTML = prev_result + "+";
      } else if (prev_result != null && operator == true) {
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + "+";
      }
      display.innerHTML = "";
      operation = 0;
    } else if (equation.innerHTML) {
      equation.innerHTML =
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + "+";
      operation = 0;
    }
    operator = true;
  }
}

function sub() {
  if (operator == true) {
    operator = false;
    sub();
  } else if (operator == false) {
    if (display.innerHTML) {
      if (value_save == null && prev_result == null) {
        value_save = parseFloat(display.innerHTML);
        equation.innerHTML += display.innerHTML + "-";
      } else if (prev_result != null && operator == false) {
        equation.innerHTML = prev_result + "-";
      } else if (prev_result != null && operator == true) {
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + "-";
      }
      display.innerHTML = "";
      operation = 1;
    } else if (equation.innerHTML) {
      equation.innerHTML =
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + "-";
      operation = 1;
    }
    operator = true;
  }
}

function mult() {
  if (operator == true) {
    operator = false;
    mult();
  } else if (operator == false) {
    if (display.innerHTML) {
      if (value_save == null && prev_result == null) {
        value_save = parseFloat(display.innerHTML);
        equation.innerHTML += display.innerHTML + "*";
      } else if (prev_result != null && operator == false) {
        equation.innerHTML = prev_result + " * ";
      } else if (prev_result != null && operator == true) {
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + "*";
      }
      display.innerHTML = "";
      operation = 2;
    } else if (equation.innerHTML) {
      equation.innerHTML =
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + "*";
      operation = 2;
    }
    operator = true;
  }
}

function divide() {
  if (operator == true) {
    operator = false;
    divide();
  } else if (operator == false) {
    if (display.innerHTML) {
      if (value_save == null && prev_result == null) {
        value_save = parseFloat(display.innerHTML);
        equation.innerHTML += display.innerHTML + "/";
      } else if (prev_result != null && operator == false) {
        equation.innerHTML = prev_result + "/";
      } else if (prev_result != null && operator == true) {
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + "/";
      }
      display.innerHTML = "";
      operation = 3;
    } else if (equation.innerHTML) {
      equation.innerHTML =
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + "/";
      operation = 3;
    }
    operator = true;
  }
}

function result() {
  let value2 = null;
  let content = display.innerHTML;

  if (value_save != null && content) {
    value2 = parseFloat(content);
    equation.innerHTML += value2 + "=";

    switch (operation) {
      case 0:
        prev_result = value_save + value2;
        break;
      case 1:
        prev_result = value_save - value2;
        break;
      case 2:
        prev_result = value_save * value2;
        break;
      case 3:
        if (value2 != 0) {
          prev_result = value_save / value2;
        } else {
          alert("Dividing by zero not possible");
        }
        break;
    }
    equation.innerHTML += prev_result;
    display.innerHTML = prev_result;
    value_save = prev_result;
    operator = false;
  }
}
