// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
        console.log(this.name);
        console.log(this.id);
        console.log(this.email);
        console.log(this.employee);
        console.log(this.school);
    }
}

module.exports = Intern;