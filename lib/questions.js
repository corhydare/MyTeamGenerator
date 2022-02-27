const choiceArray = ["Engineer", "Intern", "Finish"];

const inquire = {
  employChoice: [
    {
      type: "list",
      message: "What is your role?",
      name: "selection",
      choices: choiceArray,
      default: "Finish",
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
      message: "GitHub Username:",
      name: "githubUsername",
    },
    {
      type: "input",
      message: "Please enter a valid email:",
      name: "email",
    },
    {
      type: "input",
      message: "Your ID number:",
      name: "id",
    },
  ],
  managerIndex: [
    {
      type: "input",
      message: "Office Number",
      name: "officeNumber",
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
