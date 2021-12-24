/*Engineer Class
This extends the Employee constructor.  It takes the same three parameters, name,
id, and email.  It calls the employee constructor with super (name, id, email);

It also has a two other methods, getGithub() and getRole().
getGitHub() returns the github username from the user input.
getRole() overwrites the employee role to engineer.  
*/

const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }
};


/*This will export the engineer page data to the index page*/

module.exports = Engineer;