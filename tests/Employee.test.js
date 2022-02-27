const Employee = require("../lib/employee");

test("employee is a constructor object", () => {
  const expected = new Employee();
  expect(typeof expected).toBe("object");
});

test("name can be written", () => {
  const test = "Any";
  const expected = new Employee(test);
  expect(expected.name).toBe(test);
});

test("id can be set", () => {
  const test = 9000;
  const expected = new Employee("Any", test);
  expect(expected.id).toBe(test);
});

test("email can be set", () => {
  const test = "sharklasers.com";
  const expected = new Employee("Any", 123, test);
  expect(expected.email).toBe(test);
});

test("getName() function sets a name", () => {
  const test = "Any";
  const expected = new Employee(test);
  expect(expected.getName()).toBe(test);
});

test("getId() works", () => {
  const test = 9000;
  const expected = new Employee("Any", test);
  expect(expected.getId()).toBe(test);
});

test("getEmail() works", () => {
  const test = "sharklasers.com";
  const expected = new Employee("Any", 123, test);
  expect(expected.getEmail()).toBe(test);
});

test("getRole() gives you a title", () => {
  const test = "Employee";
  const expected = new Employee(test);
  expect(expected.getRole()).toBe(test);
});
