/*Manager Class
This extends the Employee constructor.  It takes the same three parameters, name,
id, and email.  It calls the employee constructor with super (name, id, email);

It also has a one other method getRole().
getRole() overwrites the employee role to manager.  
*/

const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole () {
        return 'Manager';
    }
};


/*This will export the manager page data to the index page*/

module.exports = Manager;