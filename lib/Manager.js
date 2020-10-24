// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
        console.log(this.name);
        console.log(this.id);
        console.log(this.email);
        console.log(this.employee);
        console.log(this.officeNumber);
    }
}

module.exports = Manager;