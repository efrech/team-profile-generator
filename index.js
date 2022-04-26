// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//employees array
const employees = [];
//team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createHtml = require('./src/createHtml');


// user input
const questionManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team manager\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter an email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'officeNumber',
        },
        {
            type: 'list',
            message: 'Select the employee role you would like to create next',
            choices: ["Engineer", "Intern", "all done"],
            name: 'nextRole',
        }
    ])
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
        employees.push(manager)
        switch(managerAnswers.nextRole) {
            case 'Engineer':
                questionEngineer();
                break;
            case 'Intern':
                questionIntern();
                break;
            default:
                writeToFile('dist/index.html', createHtml(employees))
        }
    });
};

const questionCompany = [
    {
        type: 'input',
        message: 'What is the company name?',
        name: 'company',
    }
];


const questionEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineer\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter an email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the Github user name',
            name: 'github',
        },
        {
            type: 'list',
            message: 'Select the employee role you would like to create next',
            choices: ["Engineer", "Intern", "all done"],
            name: 'nextRole',
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
        employees.push(engineer)
        switch(engineerAnswers.nextRole) {
            case 'Engineer':
                questionEngineer();
                break;
            case 'Intern':
                questionIntern();
                break;
            default:
                writeToFile('dist/index.html', createHtml(employees))
        }
    });
};

const questionIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the intern\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the intern ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter an email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the school name?',
            name: 'school',
        },
        {
            type: 'list',
            message: 'Select the employee role you would like to create next',
            choices: ["Engineer", "Intern", "all done"],
            name: 'nextRole',
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
        employees.push(intern)
        switch(internAnswers.nextRole) {
            case 'Engineer':
                questionEngineer();
                break;
            case 'Intern':
                questionIntern();
                break;
            default:
                writeToFile('dist/index.html', createHtml(employees))
        }
    })
};

questionManager();

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log('new team file generated')
    })
}
