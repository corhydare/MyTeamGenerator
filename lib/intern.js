const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, school, email, officeNumber, role = "Intern") {
    super(name, id, email);
    this.school = `Education: ${school}`;
    this.role = role;
    this.officeNumber = officeNumber = "Find me in the break room";
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.role;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Intern;
