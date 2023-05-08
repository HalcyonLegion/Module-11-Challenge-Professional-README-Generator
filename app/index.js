// Firstly, get the File System, Path, Inquirer and something to handle Markdown.
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for the user, other bits like the questions section and the table of contents can be handled in the other JS file.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's your project title?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description for your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide testing instructions:',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error ('Error creating README.md: ', err);
    } else {
        console.log('README.md was successfully created!');
    }
    });
}

// function to initialize program - generateMarkdown will have to return the data entered into the Array in the correct manner/order.
function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileName = 'README.md';
        const content = generateMarkdown(answers);
        writeToFile(fileName, content);
    });
}

// function call to initialize program - this is fine.
init();