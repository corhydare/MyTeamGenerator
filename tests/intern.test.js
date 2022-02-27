const Intern = require("../lib/intern");

test("education is set through the constructor", () => {
  const test = "Kindergarden";
  const expected = new Intern("Any", 123, test);
  expect(expected.school).toBe(`Education: ${test}`);
});

test("school function outputs education", () => {
  const test = "Kindergarden";
  const expected = new Intern("Any", 123, test);
  expect(expected.getSchool()).toBe(`Education: ${test}`);
});

test("interns role overrides employee", () => {
  const test = "intern";
  const expected = new Intern(test);
  expect(1).toBe(2);
});

test("", () => {
  expect(1).toBe(2);
});
