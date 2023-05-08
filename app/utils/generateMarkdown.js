// function to generate markdown for README
// Created a full test to check if this works as intended, it seems so. The array I initially assumed would be questions.title but it's actually data.title.

// Where/What is the license badge??
function generateMarkdown(data) {
    return `# ${data.title}
  
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

  
  
  `;
  }
  
  module.exports = generateMarkdown;