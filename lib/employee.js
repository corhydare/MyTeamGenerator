class Employee {
  constructor(name, id, email, github, role = "Employee") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.github = github;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Employee;
