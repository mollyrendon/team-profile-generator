const inquirer = require("inquirer");
const fs= require("fs");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamArray = [];

/*Prompt questions for adding a Manager*/
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
    /*Manager Object:  Here I create a new manager object with the properties of name, id, email, and number.  Then I push that object onto the teamArray and then it prints out the manager in the console log.*/
    .then(managerInput => {
        const { name, id, email, number } = managerInput;
        const manager = new Manager (name, id, email, number);

        teamArray.push(manager);
        console.log(manager);
    })
};

/*Prompt questions for adding Employee*/
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Choose your employee role from the following options.',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You need to enter the name of the employee to continue");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the ID of the employee?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You need to enter the employee ID to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter the employeer email to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employee github username?',
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log ('You need to enter the employee github username to continue!');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the intern's school?",
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("You need to enter the intern school to continue!")
                }
            }
        },
    ])
};

/*Write File function:  This function takes the employee data and writes it into the index.html file.*/
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('The HTML page for your team profile is ready!  Check it out in the index.html file')
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });


