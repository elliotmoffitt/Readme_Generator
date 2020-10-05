// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
<hr>

  ## Description <br>
  ${answers.description}
  
  
  ## License
  
This project is based under the ${answers.license} license.
  
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  <br>
${answers.dependencies}
  
  
  ## Tests

  To run tests, run the following command:
  <br>
  ${answers.tests}

## Questions

If you have any questions about the repo, contact me at <a href="mailto:${answers.email}">${answers.email}</a>. My GitHub link can be found <a href="https://github.com/${answers.username}/">here</a>.




  `;
}

module.exports = generateMarkdown;
