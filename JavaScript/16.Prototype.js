// used in 50
const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}
// This creates harry object
let harsh = Object.create(proto);
harsh.name = "harshit";
harsh.role = "Programmer";
// harsh.changeName("Harshitt")
// console.log(harsh);

// This also creates new object
const harsh1 = Object.create(proto, {
    name: { value: "Harshit", writable: true },
    role: { value: "Programmer" },
});
// console.log(harsh1);


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let harshObj = new Employee("Harshit", 345099, 7);
console.log(harshObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 20427, 2, "Javascript");
console.log(rohan)

