const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, officeNumber, email, role = "Manager") {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Manager;
