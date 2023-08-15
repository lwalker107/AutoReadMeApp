// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const MD = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHub',
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
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like to use?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to handle dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know to about contributing to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you want to run the applications tests?',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Provide the screenshot link of your deployed application: ',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please provide a link to your deployed application: ',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', MD({...inquirerResponses}));
    });
// Function call to initialize app
init();
