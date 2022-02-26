const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, school, email, role = "Intern") {
    super(name, id, email, role);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
