// require fs
// require inquirier
const fs = require('fs');
const inquirer = require('inquirer');



/* 
inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?',
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  }); */
// array of questions for user
//https://www.npmjs.com/package/inquirer#questions
const questions = inquirer.prompt([
    {
        name: 'userName',
        message: 'what is your username',
    },
])
.then(answers => {
    console.info('username:', answers.userName);
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
