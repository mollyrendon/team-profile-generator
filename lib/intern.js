/*Intern Class
This extends the Employee constructor.  It takes the same three parameters, name,
id, and email.  It calls the employee constructor with super (name, id, email);

It also has a two other methods, getSchool() and getRole().
getSchool() returns the school name from the user input.
getRole() overwrites the employee role to intern.  
*/

const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return 'Intern';
    }
};


/*This will export the intern page data to the index page*/

module.exports = Intern;