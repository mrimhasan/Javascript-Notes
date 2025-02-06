// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2 == 1)
// console.log( 2!=1)

/**************Two different types data type comparision*********** */

// console.log("2" > 1) 
// console.log("02" > 1)
// auto conversion by JS but not recommended to use like that
// avoid to use it use comparison b/w two same data types
// typescript is nothing but a follow strict rule these type comparison not allow

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)
// console.log(null <= 0)
//the reason is that equality check == and comparison check <,>,<=,>=  operator works diffrently
// comparison converts null to a number,treating it as 0.
// that's why (3) null>= is true and (1) null>0 is false.


/***undefined comparison ***/
// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined <0)
// console.log(undefined <=0)

/**************STRICT CHECK(===) *************/
//it check data type also
// console.log("2" === 2)
// console.log("2"==="2")

