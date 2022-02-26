const fs = require("fs");
const path = require("path");

function templateCard(employees) {
  return employees
    .map((Employee) => {
      return ` 
    <article class="card">
     <a href="https://github.com/${Employee.getGithub()}">
        <picture class="thumbnail">
        <img src="https://github.com/${Employee.getGithub()}.png?size=100" alt="${Employee.getRole()}">
        </picture>
    </a>
    <div class="card-content">
        <h2>Name: ${Employee.getName()}</h2><br>
        <h2>${Employee.getRole()}</h2>
        <p>Employee ID: ${Employee.getId()}</p>
        <p>Email: <a href="mailto:${Employee.getEmail()}">${Employee.getEmail()}</a> </p>
        <p>${Employee.getOfficeNumber()}</p>
        <p>${Employee.getSchool()}</p>
    </div>
    </article>
    `;
    })
    .join("\n");
}

function indexTemplate(makeCards) {
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
                ${makeCards}

            </section>

        </div>

    </main>
</body>

</html>
    `;
}

function htmlTemp(employees) {
  const makeCards = templateCard(employees);
  const finalPage = indexTemplate(makeCards);

  fs.writeFile(
    path.join(__dirname, "../dist/", "index.html"),
    finalPage,
    (err) => {
      if (err) throw err;
      console.warn("Something happaned");
    }
  );
}

module.exports = htmlTemp;
