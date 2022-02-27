const Intern = require("../lib/intern");

test("education is set through the constructor", () => {
  const test = "Kindergarden";
  const expected = new Intern("Not Danila", 123, test);
  expect(1).toBe(2);
});
