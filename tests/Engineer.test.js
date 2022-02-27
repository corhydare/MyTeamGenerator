const Engineer = require("../lib/Engineer");

test("Github username works with links and images", () => {
  const test = "corhydare";
  const expected = new Engineer("Not Danila", 123, test);
  expect(expected.github).toBe(test);
});

test("getRole() will be Engineer instead of Employee", () => {
  const test = "Engineer";
  const expected = new Engineer("Not Danila", 123, "corhydare");
  expect(expected.getRole()).toBe(test);
});

test("getGithub() works just as well", () => {
  const test = "corhydare";
  const expected = new Engineer("Not Danila", 123, test);
  expect(expected.getGithub()).toBe(test);
});
