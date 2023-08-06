// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const MD = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
+
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ''
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(question).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', MD({...inquirerResponses}));
    });
// Function call to initialize app
init();
