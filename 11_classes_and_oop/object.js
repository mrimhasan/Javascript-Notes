//array,string,function ->object ->null

function multiply (num){
    return num*5
}
multiply.power = 2
console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype)