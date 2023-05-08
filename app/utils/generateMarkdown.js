// function to generate markdown for README
// Created a full test to check if this works as intended, it seems so. The array I initially assumed would be questions.title but it's actually data.title.

// Where/What is the license badge?? Tried adding going to test now.
function generateMarkdown(data) {
    return `# ${data.title}

  ![](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-green)
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this project, please reach out to us at ${data.email} or check out my GitHub profile for more [${data.githubUsername}](https://github.com/${data.githubUsername}).
  `;
  }
  
  module.exports = generateMarkdown;