const inquirer = require("inquirer");
const fs= require("fs");

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message:  'What is the name of the team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('You need to enter the team manager name to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the team manager?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ('You need to enter the manager ID to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter the team manager email to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is the team manager office number?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('You need to enter the team manager number to continue!');
                    return false;
                }
            }
        }
    ])
}


