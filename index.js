// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Defined import of inquirer npm
const inquirer = require('inquirer');

// Function that utilizes inquirer to prompt user for information
// to populate their HTML portfolio page
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your job?',
      name: 'job',
    },
    {
        type: 'input',
        message: 'Please provide your LinkedIn page:',
        name: 'LinkedIn',
      },
      {
        type: 'input',
        message: 'Please provide your GitHub page:',
        name: 'GitHub',
      },
  ])
  .then((response) =>