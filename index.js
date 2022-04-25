// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'in a few words, what is the main purpose of this project?',
        name: 'purpose',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Are there any testing instructions?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Would you like to include a mock-up? if so, please enter the file name of the image as saved in the assets/images folder',
        name: 'mockup',
    },
    {
        type: 'input',
        message: 'if any, what are the contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'list',
        message: 'Select a license for your project:',
        choices: ['MIT', 'APACHE_2.0', 'GPLv3', 'BSD_3', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubuser',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Document created!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data))
    }).catch((err) => {
        if (err) throw err;
    })
}

// Function call to initialize app
init();