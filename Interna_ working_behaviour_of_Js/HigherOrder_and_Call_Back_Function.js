
/**************** A function takes a function as an argument or return a function is known as higher order function ******************/

function x(){ // this is a call back function
    console.log("Hello");
}

function y(x) { // this is higher order function
    x();
}
y(x);

/**************** How to use ********** Don't repeat yourself(DRY principal) *********/

const radius = [3, 1, 2, 4];

// const calculateArea = function(radius){
//     const output = [];
//     for(let i =0; i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function(radius){
//     const output = [];
//     for(let i =0; i<radius.length;i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// };

// console.log(calculateCircumference(radius));

// const calculateDiameter = function(radius){
//     const output = [];
//     for(let i =0; i<radius.length;i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// };

// console.log(calculateDiameter(radius))


const area = function(radius){
    return Math.PI * radius * radius;
};

const circumference = function(radius){
    return 2 * Math.PI * radius;
};

const diameter = function(radius){
    return 2 * radius;
};


// const calculate = function(arr, logic){
//     const output = [];
//     for(let i = 0; i<arr.length;i++){
//         output.push(logic(arr[i]))
//     }
//     return output;
// };

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i = 0; i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output;
};

console.log(radius.map(area))
// console.log(calculate(radius, area)) // this is similar to map or we can say our implimentation of map and both are higher order function
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))
console.log(radius.calculate(area))// nothing but a map