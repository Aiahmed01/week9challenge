// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
//const questions = ['What is the title?', 'give a brief description about the project/homework? ','What type of installation is used?','What is this project solving or used for?','which license did you use?', 'how to contact me?'];

const generateReadME = ({title, description, installation,usage, license, gitUserName, myEmail})=>
`

# The ReadME Generated for ${title} is created 

## Table of Content : <a name="content"></a>

- [Table of Content](#content)

- [description](#description)
- [installation](#installation)
- [usage](#usage)
- [License](#license)
- [Contact Me](#contactMe)


This is a Description about the Homework/Project <a name="description"></a>
## User Story
${description}



For Installation I used ${installation}<a name="installation"></a>






Usage: <a name="usage"></a>
${usage}




* Licenses: ${license} <a name="license"></a>




## If you have any questions please find me at : <a name="contactMe"></a>



# 1- Github: Github.com/${gitUserName}

# 2- Email: ${myEmail}

`


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
        message: 'give a brief description about the project/homework?',
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
        message: 'which license did you use?',
        choices: ['MIT','Apache-2.0','GPL-3.0','BSD-3-Clause','MPL-2.0','AGPL-3.0','LGPL-3.0','EPL-2.0','CC-BY-4.0','CC-BY-SA-4.0','CC-BY-NC-4.0','CC-BY-NC-SA-4.0','CC0-1.0','Unlicense'],
      },
      {
        type: 'input',
        name: 'gitUserName',
        message: 'What is you github user name?',
      },
      {
        type: 'input',
        name: 'myEmail',
        message: 'What is your email address?',
      },
      
])

.then((answers) => {
  const MDPageContent = generateReadME(answers);

// TODO: Create a function to write README file



  fs.writeFile('Readme.md', MDPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!')
  );
});



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
