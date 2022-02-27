const Index = require("../index");
const fs = require("fs");
const path = require("path");

test("No constructors to test", () => {
  const test = "Any";
  const expected = test;
  expect(expected).toBe(test);
});
