const Engineer = require("../lib/Engineer");

test("Github username works with links and images", () => {
  const testValue = "corhydare";
  const e = new Engineer("Not Danila", 1, testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() will be Engineer instead of Employee", () => {
  const testValue = "Engineer";
  const e = new Engineer("Not Danila", 1, "corhydare");
  expect(e.getRole()).toBe(testValue);
});

test("getGithub() works just as well", () => {
  const testValue = "corhydare";
  const e = new Engineer("Not Danila", 1, testValue);
  expect(e.getGithub()).toBe(testValue);
});
