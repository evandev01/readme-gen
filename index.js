const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    }, {
        type: "input",
        name: "description",
        message: "Please enter a description of your project."
    }, {
        type: "input",
        name: "installation",
        message: "Please enter instructions for installation."
    }, {
        type: "input",
        name: "usage",
        message: "Please enter instructions for usage."
    }, {
        type: "checkbox",
        name: "license",
        message: "Please enter license.",
        choices: ["MIT", "Apache", "GNU", "MPL"]
    }, {
        type: "input",
        name: "contributing",
        message: "Please enter contributing information."
    }, {
        type: "input",
        name: "tests",
        message: "Please enter tests information."
    }, {
        type: "input",
        name: "questions",
        message: "Do you have any questions?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + '.md', data, function(err){
        if(err){
            console.log(err)}}) 
}

// function to initialize program
async function  init () {
    const response = await inquirer.prompt(questions);
    writeToFile("README.md", generateMarkdown(response));
}

// function call to initialize program
init();