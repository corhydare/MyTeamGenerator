const Employee = require("../lib/employee");

test("employee initiated", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("name can be written", () => {
  const name = "Not Danila";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("id can be set", () => {
  const testValue = 9000;
  const e = new Employee("Goku", testValue);
  expect(e.id).toBe(testValue);
});

test("email can be set", () => {
  const testValue = "dan@sharklasers.com";
  const e = new Employee("Goku", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("getName() function sets a name", () => {
  const testValue = "not Danila";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("getId() works", () => {
  const testValue = 9000;
  const e = new Employee("Goku", testValue);
  expect(e.getId()).toBe(testValue);
});

test("getEmail() works", () => {
  const testValue = "dan@sharklasers.com";
  const e = new Employee("Goku", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() gives you a title", () => {
  const testValue = "Employee";
  const e = new Employee("Not Danila", 1);
  expect(e.getRole()).toBe(testValue);
});
