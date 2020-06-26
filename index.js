// require fs
// require inquirier
const fs = require('fs');
const inquirer = require('inquirer');



// array of questions for user
//https://www.npmjs.com/package/inquirer#questions
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'userName',
        message: 'what is your username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'what is your project name?',
    },
    {
        type: 'input',
        name: 'shortDesc',
        message: 'add a short desciprion of your project',
    },
    {
        type: 'confirm',
        name: 'mLicense',
        message: 'would you like to add a MIT license?',
    },
])
.then(data => {
    console.info(data);
});

// function to write README file
function writeToFile(fileName, data) {
}
// use the fs package

// function to initialize program
function init() {

    // use the inquirier package

}

// function call to initialize program
init();
