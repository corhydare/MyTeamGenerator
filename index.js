const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const {
  employChoice,
  employIndex,
  managerIndex,
  internIndex,
} = require("./lib/questions");

const htmlTemp = require("./src/htmlTemp");
let teamArray = [];

function bauss() {
  inquirer
    .prompt(employIndex.concat(managerIndex))
    .then(({ name, id, email, officeNumber, githubUsername }) => {
      let manager = new Manager(name, id, officeNumber, email, githubUsername);
      teamArray.push(manager);
      next();
    });
}

bauss();

function next() {
  inquirer.prompt(employChoice).then(({ selection }) => {
    switch (selection) {
      case "Engineer":
        moneybags();
        break;
      case "Intern":
        freshCoffee();
        break;
      case "Finish":
        htmlTemp(teamArray);
        break;
    }
  });
}

function moneybags() {
  inquirer.prompt(employIndex).then(({ name, id, email, githubUsername }) => {
    let engineer = new Engineer(name, id, githubUsername, email);
    teamArray.push(engineer);
    next();
  });
}

function freshCoffee() {
  inquirer
    .prompt(employIndex.concat(internIndex))
    .then(({ name, id, email, school, githubUsername }) => {
      let intern = new Intern(name, id, school, email, githubUsername);
      teamArray.push(intern);
      next();
    });
}
