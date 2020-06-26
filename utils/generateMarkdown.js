// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description:
  
 ${data.description}
  
  ## Table of contents:
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

  ## Installation:
   ${data.installation}

  ## Usage:
   ${data.usage}

  ## License:
 ${data.license}

  ## Contributing:
 ${data.contributing}

  ## Tests: 
 ${data.tests}
  
  ## Questions: 
 ${data.questions}

 ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
`;
}

module.exports = generateMarkdown;
