// require fs
// require inquirier
const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
//https://www.npmjs.com/package/inquirer#questions
const questions = inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "title",
      message: "What's the title of your project name?",
    },
    {
      type: "input",
      name: "description",
      message: "Give us a short desciprion of your project.",
    },
    {
      type: "confirm",
      name: "license",
      message: "would you like to add a MIT license?",
      value: 
    },
  ])
  .then((data) => {
    writeToFile

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('')
}
// use the fs package

// function to initialize program
function init() {
  // use the inquirier package
}

// function call to initialize program
init();
