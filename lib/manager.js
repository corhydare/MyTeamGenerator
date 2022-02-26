const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, officeNumber, email, school, github, role = "Manager") {
    super(name, id, email);
    this.role = role;
    this.officeNumber = `Office number: ${officeNumber}`;
    this.github = github;
    this.school = school = "";
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
  getSchool() {
    return this.school;
  }
}

module.exports = Manager;
