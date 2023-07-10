let display;
let equation;
let displayInnerHTML;
let equationInnerHTML;
let value_save;
let prev_result;

beforeEach(() => {
  display = undefined;
  equation = undefined;
  displayInnerHTML = undefined;
  equationInnerHTML = undefined;
  value_save = undefined;
  prev_result = undefined;
});

const load = () => {
  display = "HTMLElement";
  equation = "HTMLElement";
};

test("testing load function to ensure html elements used in the script are properly loaded", () => {
  load();
  expect(display).toBeDefined();
  expect(equation).toBeDefined();
});

const ce = (mockEquation) => {
  displayInnerHTML = "abdcefg";
  if (mockEquation == false) {
    displayInnerHTML = "";
  }
  return displayInnerHTML;
};

test("testing ce function if display will be wiped if equation is empty", () => {
  expect(ce("")).toBe("");
  expect(ce("1234")).toBe("abdcefg");
});

const setupForTestingCFunction = () => {
  displayInnerHTML = "112";
  equationInnerHTML = "113";
  value_save = 5;
  prev_result = 10;
};

const c = () => {
  displayInnerHTML = "";
  equationInnerHTML = "";
  value_save = null;
  prev_result = null;
};

test("testing c function if display, equation, value_save and prev_result is cleared", () => {
  expect(displayInnerHTML).not.toBeDefined();
  expect(equationInnerHTML).not.toBeDefined();
  expect(value_save).not.toBeDefined();
  expect(prev_result).not.toBeDefined();
  setupForTestingCFunction();
  expect(displayInnerHTML).toBeDefined();
  expect(equationInnerHTML).toBeDefined();
  expect(value_save).toBeDefined();
  expect(prev_result).toBeDefined();
  c();
  expect(displayInnerHTML).toBe("");
  expect(equationInnerHTML).toBe("");
  expect(value_save).toBeNull();
  expect(prev_result).toBeNull();
});

const remove_sth = () => {
  if (displayInnerHTML) {
    displayInnerHTML = displayInnerHTML.slice(0, displayInnerHTML.length - 1);
  }
  return displayInnerHTML;
};

test("testing remove_sth function if last char of display is cut off", () => {
  displayInnerHTML = "112";
  expect(remove_sth()).toBe("11");
});

test("testing remove_sth function if display is empty", () => {
  expect(remove_sth()).toBe(undefined);
});

const number = (num) => {
  return (displayInnerHTML += num);
};

test("testing number function to ensure that the output is right", () => {
  displayInnerHTML = "10";
  expect(number(1)).toBe("101");
});

const dot = () => {
  let content = displayInnerHTML;
  let got_dot = content.indexOf(".");

  if (got_dot == -1) {
    displayInnerHTML += ".";
  }
  return displayInnerHTML;
};

test("testing dot function if there is no dot yet", () => {
  displayInnerHTML = "11";
  expect(dot()).toBe("11.");
});

test("testing dot function if there already is a dot", () => {
  displayInnerHTML = "15.5";
  expect(dot()).toBe(displayInnerHTML);
});
