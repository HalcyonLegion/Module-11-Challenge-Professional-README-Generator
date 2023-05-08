// function to generate markdown for README
// Created a full test to check if this works as intended, it seems so. The array I initially assumed would be questions.title but it's actually data.title.
function generateMarkdown(data) {
    return `# ${data.title}

  
  
  `;
  }
  
  module.exports = generateMarkdown;