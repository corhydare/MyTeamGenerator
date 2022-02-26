const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, school, email, role = "Intern") {
    super(name, id, email);
    this.school = `Education: ${school}`;
    this.role = role;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Intern;
