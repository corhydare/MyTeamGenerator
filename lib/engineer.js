const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, github, email, officeNumber, role = "Engineer") {
    super(name, id, email);
    this.github = github;
    this.role = role;
    this.officeNumber = `<img src="https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&theme=radical">`;
    this.school = `<a href="https://github.com/users/${github}"> ${github}'s current projects. </a>`;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
  getSchool() {
    return this.school;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Engineer;
