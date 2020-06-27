// require fs
// require inquirier
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
      type: "checkbox",
      name: "license",
      message: "would you like to add a license?",
      choices: [
        {
          name: "MIT",
          value:
            'MIT License Copyright (c) [2020]'   + '\n ' +   'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:' + '\n ' + 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.'   + '\n ' +    ' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
        },
          {
              name: "MITBadge",
              value: "(https://img.shields.io/badge/License-MIT-black.svg)"
      },
      ],
    },
  ])
  .then((data) => writeToFile(`README/${data.title}.md`, data));
{
}
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), "utf-8", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
}
// use the fs package

// function to initialize program
function init() {
  // use the inquirier package
}

// function call to initialize program
init();
