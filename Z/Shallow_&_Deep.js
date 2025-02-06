

/************************* Shallow Copy *******************/ //{The Reference will copy in short}

//A shallow copy occurs when you copy the reference of an object to a new variable.
//In this process, only the top-level properties are copied, while nested objects or arrays still reference the original memory location.
//This means that if you change the nested properties in one object, those changes will reflect in the other because they share the same memory reference.

let mployee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee=> ", mployee);
let newEmployee = mployee;    // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", mployee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as 
// newEmployee is changed.

/************************** Deep Copy **********************/ //{The Value will copy in short}

//A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays
//This ensures that changes made to one object do not affect the other.
//Each object is stored in a separate memory location, making them entirely independent

/**************** Creating a Deep Copy ************************/
//Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods
let Employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(Employee));
console.log("Employee=> ", Employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", Employee);
console.log("New Employee=> ", newEmployee);

/************************ Limitations of JSON.parse() and JSON.stringify() ******************/
// 1 Non-Serializable Properties: Functions, undefined, and certain other non-serializable values are lost when using JSON.stringify().
// 2 Circular References: Objects with circular references will cause JSON.stringify() to throw an error
// 3 Date Objects: Dates are converted to strings during the process, losing their original type.

 //                Lodash To Deep Copy
 // Lodash is a JavaScript library that provides multiple utility functions and one of the most commonly used functions of the Lodash library is the cloneDeep() method
 // This method helps in the deep cloning of an object and also clones the non-serializable properties which were a limitation in the JSON.stringify() approach
 const lodash = require('lodash');
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee Name: " 
            + this.ename + "-->Salary: " 
            + this.salary;
    }
}

let deepCopy = lodash.cloneDeep(employee);
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
    return "Employee ID: " + this.eid 
        + "-->Salary: " + this.salary;
}
console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(employee.details());
console.log(deepCopy.details());
