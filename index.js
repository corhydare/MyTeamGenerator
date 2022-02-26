const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/ingineer");
const Intern = require("./lib/intern");

const inputtage = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ]);
};

const nohtingButPromises = () => {
  inputtage()
    .then((answers) => fs.writeFileSync("index.html", appendCard(answers)))
    .then(() => console.log("Mission complete"))
    .catch((err) => console.error(err));
};

nohtingButPromises();
