const htmlTemp = require("../src/htmlTemp");
const fs = require("fs");
const path = require("path");

test("writing the file", () => {
  const test = templateCard(<html></html>);
  expect(1).toBe(2);
});
