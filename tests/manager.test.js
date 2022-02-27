const Manager = require("../lib/manager");

test("manager overrides employee", () => {
  const test = "Manager";
  const expected = new Manager(test);
  expect(expected.role).toBe(test);
});

test("getRole() gets values from constructor", () => {
  const test = "Manager";
  const expected = new Manager(test);
  expect(expected.getRole()).toBe(test);
});

test("office number is populated", () => {
  const test = 123;
  const expected = new Manager("Any", "Any", test);
  expect(expected.officeNumber).toBe(`Office number: ${test}`);
});

test("get function recieves office nhumber", () => {
  const test = 123;
  const expected = new Manager("Any", "Any", test);
  expect(expected.getOfficeNumber()).toBe(`Office number: ${test}`);
});
