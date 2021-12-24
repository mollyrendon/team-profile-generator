/*Employee Class Constructor
This is the employee class constructor, it takes the parameters name,
id, and email.  It assigns the values to properties of the 
object that is created by calling this function in the constructor.

getName() returns the name from the user input.
getId() returns the ID from the user input.  
getEmail() returns the email from the user input.
getRole() returns the employee role from the user input.  
*/

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee';
    }
};


/*This will export the employee page data to the index page*/

module.exports = Employee;