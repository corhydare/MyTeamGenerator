const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, github, email, role = "Engineer") {
    super(name, id, email);
    this.github = github;
    this.role = role;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
