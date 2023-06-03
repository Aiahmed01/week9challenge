const generateMarkdown = ({ title, description, installation, usage, license, gitUserName, myEmail }) => {

  const renderLicenseBadge = (license) => {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    return '';
  };

  const renderLicenseLink = (license) => {
    if (license === 'MIT') {
      return '[MIT License](https://opensource.org/licenses/MIT)';
    }
    return '';
  };

  const renderLicenseSection = (license) => {
    if (license) {
      return `## License\n\nThis project is licensed under the ${license}.`;
    }
    return '';
  };


  return `
# The README Generated for ${title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License

${renderLicenseBadge(license)}

${renderLicenseLink(license)}

${renderLicenseSection(license)}

## Contact

GitHub: [${gitUserName}](https://github.com/${gitUserName})
Email: ${myEmail}
`;
};

module.exports = generateMarkdown;



