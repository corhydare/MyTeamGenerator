const Employee = require("../lib/employee");

test("employee initiated", () => {
  const expected = new Employee();
  expect(typeof expected).toBe("object");
});

test("name can be written", () => {
  const name = "Not Danila";
  const expected = new Employee(name);
  expect(expected.name).toBe(name);
});

test("id can be set", () => {
  const test = 9000;
  const expected = new Employee("Goku", test);
  expect(expected.id).toBe(test);
});

test("email can be set", () => {
  const test = "dan@sharklasers.com";
  const expected = new Employee("Goku", 123, test);
  expect(expected.email).toBe(test);
});

test("getName() function sets a name", () => {
  const test = "not Danila";
  const expected = new Employee(test);
  expect(expected.getName()).toBe(test);
});

test("getId() works", () => {
  const test = 9000;
  const expected = new Employee("Goku", test);
  expect(expected.getId()).toBe(test);
});

test("getEmail() works", () => {
  const test = "dan@sharklasers.com";
  const expected = new Employee("Goku", 123, test);
  expect(expected.getEmail()).toBe(test);
});

test("getRole() gives you a title", () => {
  const test = "Employee";
  const expected = new Employee("Not Danila", 123);
  expect(expected.getRole()).toBe(test);
});
