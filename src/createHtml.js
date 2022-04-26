
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateCards(employees) {
    let cards = []
    for (let i = 0; i < employees.length; i++) {
        const employeesArray = employees[i];
        switch (employeesArray.getRole()) {
            case 'Manager':
                const manager = new Manager(employeesArray.name, employeesArray.id, employeesArray.email, employeesArray.officeNumber);
                cards.push(generateManagerCard(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(employeesArray.name, employeesArray.id, employeesArray.email, employeesArray.github);
                cards.push(generateEngineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(employeesArray.name, employeesArray.id, employeesArray.email, employeesArray.school);
                cards.push(generateInternCard(intern));
                break;
        }
    }
    return cards.join(``)
}

let generateManagerCard = (Manager) => {
    return `
        <!--Manager-->
        <div class="col-12 col-sm-6 col-lg-4 mb-3" style="max-width: 22rem;">
            <div class="card bg-info">
                <div class="card-header">
                    <h2>${Manager.getName()}</h2>
                    <h3><i class="fa fa-user-plus"></i>${Manager.getRole()}</h3>
                </div>
                <div class="card-body bg-body">
                    <ul class="card text">
                        <li>ID: ${Manager.getId()}</li>
                        <li>Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                        <li>Office Number: <a href="tel:${Manager.getOfficeNumber()}">${Manager.getOfficeNumber()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `
};

let generateEngineerCard = (Engineer) => {
    return `
     <!--Engineer-->
         <div class="col-12 col-sm-6 col-lg-4 mb-3" style="max-width: 22rem;">
             <div class="card bg-info">
                 <div class="card-header">
                     <h2>${Engineer.getName()}</h2>
                     <h3><i class="fa fa-user"></i> ${Engineer.getRole()}</h3>
                 </div>
                 <div class="card-body bg-body">
                     <ul class="card text">
                         <li>ID: ${Engineer.getId()}</li>
                         <li>Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                         <li>Github: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
                     </ul>
                 </div>
             </div>
         </div>`
};

let generateInternCard = (Intern) => {
    return `
    <div class="col-12 col-sm-6 col-lg-4 mb-3" style="max-width: 22rem;">
        <div class="card bg-info">
                <div class="card-header">
                    <h2>${Intern.getName()}</h2>
                    <h3><i class="fa fa-graduation-cap"></i>${Intern.getRole()}</h3>
                </div>
                <div class="card-body bg-body">
                    <ul class="card text">
                        <li>ID: ${Intern.getId()}</li>
                        <li>Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                        <li>School: ${Intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>`
};

function createHtml(employees) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./resets.css"/>
    <link rel="stylesheet" href="./style.css"/>
</head>

<body>
    <!-- header -->
    <header class="jumbotron jumbotron-fluid">
        My team
    </header>
    <section class="row justify-content-center">
    ${generateCards(employees)}
    </section>
</body>
</html>
    `
}


module.exports = createHtml;

