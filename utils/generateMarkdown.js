// function to generate markdown for README
function generateMarkdown(data) {
  const { username, email, title, description, license } = data;
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


  ## Usage

  ## Contributions

  ## Tests

  ## License


  ## Questions
  ${email}
  [Github Repo]((https://github.com/${username})



`;
}

module.exports = generateMarkdown;
