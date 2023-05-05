// Firstly, get the File System, Path, Inquirer and something to handle Markdown.
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's your project title?",
    },
    {
        type: 'input'
        name: 'description'
        message: 'Provide a brief description for your project:'
    },

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();