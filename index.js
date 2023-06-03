
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a brief description about the project/homework:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What type of installation is used?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is this project solving or used for?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license did you use?',
        choices: [
          'MIT',
          'Apache-2.0',
          'GPL-3.0',
          'BSD-3-Clause',
          'MPL-2.0',
          'AGPL-3.0',
          'LGPL-3.0',
          'EPL-2.0',
          'CC-BY-4.0',
          'CC-BY-SA-4.0',
          'CC-BY-NC-4.0',
          'CC-BY-NC-SA-4.0',
          'CC0-1.0',
          'Unlicense',
        ],
      },
      {
        type: 'input',
        name: 'gitUserName',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'myEmail',
        message: 'What is your email address?',
      },
    ])
    .then((answers) => {
      const MDPageContent = generateMarkdown(answers);

      fs.writeFile('Readme.md', MDPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
      );
    });
}

init();

