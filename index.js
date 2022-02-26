const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/ingineer");
const Intern = require("./lib/intern");

const {
  employChoice,
  employIndex,
  managerIndex,
  engineerIndex,
  internIndex,
} = require("./lib/questions");
