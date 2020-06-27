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
      name: "dependencies",
      message:
        "Which dependencies should be installed to properly use the program?",
    },
    {
      type: "input",
      name: "test",
      message: "Add a link of of the tested site.",
    },
    {
      type: "input",
      name: "usage",
      message: "Tell us the usage of this application",
    },
    {
      type: "input",
      name: "contribution",
      message: "Who were your main contributers to this project?",
    },
    {
      type: "input",
      name: "description",
      message: "Give us a short desciprion of your project.",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Select a license of choice.",
      choices: [
        {
          name: "MIT",
          value: `![License](https://img.shields.io/badge/License-MIT-black.svg)
            
MIT License

Copyright (c) [2020] [Justin Ponthier]
      
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
          
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
          
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
        },
        {
          name: "Apache",
          value: `![License](https://img.shields.io/badge/License-Apache-black.svg)
            
Apache 2.0 License

Copyright [2020]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at


Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
        },
        {
          name: "GNU",
          value: `![License](https://img.shields.io/badge/License-GNU-black.svg)
            
[GNU License](https://choosealicense.com/licenses/gpl-3.0/#)`,
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
