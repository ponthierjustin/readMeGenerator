// function to generate markdown for README
function generateMarkdown(data) {
  const { username, email, title, description, license, dependencies, contribution, test, usage } = data;
  return `# ${title}

  ## Description 
  

  ${description}

  ## Table of Contents
 

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation


  Clone this repository: [Github Repo](https://github.com/${username}/${title})

  Install these dependencies: 
  
  npm install ${dependencies}

  


  ## Usage


  ${usage}

  ## Contributions


  ${contribution}

  ## Tests


  ${test}

  ## License


  ${license}


  ## Questions


  Send a short, but descriptive email:

  ${email}

  [Github Repo](https://github.com/${username})

`;
}

module.exports = generateMarkdown;
