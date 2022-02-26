const inquirer = require("inquirer");
const fs = require("fs");
const { Console } = require("console");
const { title } = require("process");

const appendCard = ({ name, img, type, email, url, eid, office, title }) =>
  `
  <article class="card">
                    <a href="${url}">
                        <picture class="thumbnail">
                            <img src="https://github.com/${img}.png" alt="${type}">
                        </picture>
                    </a>
                    <div class="card-content">
                        <h2>${name}</h2><br>
                        <h2>${title}</h2>
                        <p>Email: <a href="mailto:${email}">${email}</a> </p>
                        <p>${office}</p>
                        <p>${eid}</p>
                    </div>
  </article>
`;

const inputtage = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ]);
};

const nohtingButPromises = () => {
  inputtage()
    .then((answers) => fs.writeFileSync("index.html", appendCard(answers)))
    .then(() => console.log("Mission complete"))
    .catch((err) => console.error(err));
};

nohtingButPromises();
