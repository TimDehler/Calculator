var display = null;
var equation = null;
var value_save = null;
var operation = null;
var operator = false;

function load() {
  display = document.getElementById("display");
  equation = document.getElementById("equation");
}

function ce() {
  display.innerHTML = "";
}

function c() {
  display.innerHTML = "";
  equation.innerHTML = "";
  value_save = null;
}

function remove_sth() {
  if (display.innerHTML) {
    display.innerHTML = display.innerHTML.slice(
      0,
      display.innerHTML.length - 1
    );
  } else if (equation.innerHTML) {
    equation.innerHTML = equation.innerHTML.slice(
      0,
      equation.innerHTML.length - 1
    );
    value_save = null;
    operator = false;
  }
}

function number(num) {
  display.innerHTML += num;
}

function dot() {
  var content = display.innerHTML;
  var got_dot = content.indexOf(".");

  if (got_dot == -1) {
    display.innerHTML += ".";
  }
}

function add() {
  if (operator == true) {
    equation.innerHTML = equation.innerHTML.slice(
      0,
      equation.innerHTML.length - 1
    );
    value_save = null;
    display.innerHTML = equation.innerHTML;
    equation.innerHTML = "";
    operator = false;
    add();
  } else if (operator == false) {
    if (display.innerHTML) {
      if (value_save == null) {
        value_save = parseFloat(display.innerHTML);
        equation.innerHTML += display.innerHTML + "+";
      } else {
        equation.innerHTML = "(" + equation.innerHTML + ") +";
      }
      display.innerHTML = "";
      operation = 0;
    } else if (equation.innerHTML) {
      equation.innerHTML =
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + " / ";
      operation = 0;
    }
    operator = true;
  }
}

function sub() {
  if (operator == true) {
    equation.innerHTML = equation.innerHTML.slice(
      0,
      equation.innerHTML.length - 1
    );
    value_save = null;
    display.innerHTML = equation.innerHTML;
    equation.innerHTML = "";
    operator = false;
    sub();
  } else if (operator == false) {
    if (display.innerHTML) {
      if (value_save == null) {
        value_save = parseFloat(display.innerHTML);
        equation.innerHTML += display.innerHTML + "-";
      } else {
        equation.innerHTML = "(" + equation.innerHTML + ") -";
      }
      display.innerHTML = "";
      operation = 1;
    } else if (equation.innerHTML) {
      equation.innerHTML =
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + " / ";
      operation = 1;
    }
    operator = true;
  }
}

function mult() {
  if (operator == true) {
    equation.innerHTML = equation.innerHTML.slice(
      0,
      equation.innerHTML.length - 1
    );
    value_save = null;
    display.innerHTML = equation.innerHTML;
    equation.innerHTML = "";
    operator = false;
    mult();
  } else if (operator == false) {
    if (display.innerHTML) {
      if (value_save == null) {
        value_save = parseFloat(display.innerHTML);
        equation.innerHTML += display.innerHTML + " x ";
      } else {
        equation.innerHTML = "(" + equation.innerHTML + ") x ";
      }
      display.innerHTML = "";
      operation = 2;
    } else if (equation.innerHTML) {
      equation.innerHTML =
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + " / ";
      operation = 2;
    }
    operator = true;
  }
}

function divide() {
  if (operator == true) {
    equation.innerHTML = equation.innerHTML.slice(
      0,
      equation.innerHTML.length - 1
    );
    value_save = null;
    display.innerHTML = equation.innerHTML;
    equation.innerHTML = "";
    operator = false;
    divide();
  } else if (operator == false) {
    if (display.innerHTML) {
      if (value_save == null) {
        value_save = parseFloat(display.innerHTML);
        equation.innerHTML += display.innerHTML + " / ";
      } else {
        equation.innerHTML = "(" + equation.innerHTML + ") / ";
      }
      display.innerHTML = "";
      operation = 3;
    } else if (equation.innerHTML) {
      equation.innerHTML =
        equation.innerHTML.slice(0, equation.innerHTML.length - 1) + " / ";
      operation = 3;
    }
    operator = true;
  }
}

function result() {
  var value2 = null;
  var content = display.innerHTML;
  var result = null;

  if (value_save != null && content) {
    value2 = parseFloat(content);
    equation.innerHTML += value2 + " = ";

    switch (operation) {
      case 0:
        result = value_save + value2;
        break;
      case 1:
        result = value_save - value2;
        break;
      case 2:
        result = value_save * value2;
        break;
      case 3:
        if (value2 != 0) {
          result = value_save / value2;
        } else {
          alert("Dividing by zero not possible");
        }
        break;
    }
    equation.innerHTML += result;
    display.innerHTML = result;
    value_save = result;
  }
}
