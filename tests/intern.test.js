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
  const test = "Intern";
  const expected = new Intern(test);
  expect(expected.getRole()).toBe(test);
});
