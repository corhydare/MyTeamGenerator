const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, officeNumber, email, github, role = "Manager") {
    super(name, id, email);
    this.role = role;
    this.officeNumber = officeNumber;
    this.github = github;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return this.role;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Manager;
