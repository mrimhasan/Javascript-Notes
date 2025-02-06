const arr = [1,2,3,4,5,6,7,8,9,10]

    // const temp =  arr.forEach((val)=>{
    //      console.log(val)
    //       return val
    //     })
    // console.log(temp) 

    // const temp = for (const val of arr) {
    //     console.log(val)
    // }

    // So the for of ,in (of and in not work in storing variable value) and each loop not return any value even you use return keyword
    
                      /* FILTER (true or false value)*/

    //const temp = arr.filter( (val)=> val>5   // it is a arrow function but in single statment // no return keyword use
        //console.log(val)                // here console is not work because of out of scope of arrow function
    //)

    // const temp = arr.filter( (val)=>{
    //     console.log(val);
    //     return val>5             // return must be use for storing in temp if arrow fun is present or used
    // })
    //  console.log(temp);

     /*for Each as filter (we declare an array instead of variable for storing values)*/

    // const newarr = []
    // arr.forEach(element => {
    //     if(element>5){
    //         newarr.push(element)
    //     }
    // })   
    // console.log(newarr)     