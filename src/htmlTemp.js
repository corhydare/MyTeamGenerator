const fs = require("fs");
const path = require("path");

function templateCard(employees) {
  return employees
    .map((employee) => {
      return ` <article class="card">
        <a href="https://github.com/${employee.getGithub()}">
            <picture class="thumbnail">
                <img src="https://github.com/${employee.getGithub()}.png?size=100" alt="${employee.getRole()}">
            </picture>
        </a>
        <div class="card-content">
            <h2>${employee.getName()}}</h2><br>
            <h2>${employee.getRole()}</h2>
            <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a> </p>
            <p>${employee.getOfficeNumber()}</p>
            <p>ID: ${employee.getId()}</p>
        </div>
</article>`;
    })
    .join("\n");
}

function indexTemplate(employeesALL) {
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css.css">
    <title>Someone else's team</title>
</head>

<body>
    <header class="masthead clear">
        <div class="centered">

            <div class="site-branding">
                <h1 class="site-title">Welcome to the team</h1>
            </div>
        </div>
    </header>

    <main class="main-area">

        <div class="centered">

            <section class="cards" id="box">
                ${employeesALL}

            </section>

        </div>

    </main>
</body>

</html>
    `;
}

function htmlTemp(employees) {
  const employeesALL = templateCard(employees);
  const html = indexTemplate(employeesALL);

  fs.writeFile(path.join(__dirname, "../dist/", "index.html"), html, (err) => {
    if (err) throw err;
    console.log("Something happened");
  });
}

module.exports = htmlTemp;