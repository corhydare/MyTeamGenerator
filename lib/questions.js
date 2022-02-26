const inquire = {
  employChoice: [
    {
      type: "list",
      message: "What is your role?",
      name: "userChoice",
      choices: ["Engineer", "Intern", "Complete"],
    },
  ],
  employIndex: [
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Your ID number:",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter a valid email:",
      name: "email",
    },
    {
      type: "input",
      message: "GitHub Username:",
      name: "githubUsername",
    },
  ],
  managerIndex: [
    {
      type: "input",
      message: "Office Number",
      name: "officeNumber",
    },
  ],

  engineerIndex: [
    {
      type: "input",
      message: "GitHub Username:",
      name: "githubUsername",
    },
  ],

  internIndex: [
    {
      type: "input",
      message: "What school did you go to?",
      name: "school",
    },
  ],
};

module.exports = inquire;
