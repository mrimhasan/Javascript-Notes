

const array1 = [1,2,3,4,5]

const array2 = new Array(1,2,3,4,5)

        /***** at() *****/
        // use in window not in Nodejs
// console.log(array1.at(0));
// console.log(array2.at(3))

        /*****concat and spread operator ****/

// array1.concat(array2)
// console.log(array1)  // no changes 

// const merging1 = array1.concat(array2)
// console.log(merging1)

// const merging2 = [...array1,...array2]  // spread operator
// console.log(merging2)

        /******constructor *****/
        //The Array() constructor creates Array objects.
//const array2 = new Array(1,2,3,4,5)  //Array constructor with multiple parameters

        /******copyWithin******/
        //The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
//  console.log(array1.copyWithin(0,2));
// console.log(array1.copyWithin(0,1,3));
// console.log(array1.copyWithin(1,3));

        /*****entries *****/
        // The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.

// console.log(array1.entries());
 const iterator = array1.entries()
//  console.log(typeof iterator)
//  console.log(iterator.next())
//  console.log(iterator.next().value)
// for (const element of iterator) {
//     console.log(element)
// }
// for (const [key,value] of iterator) {
//     console.log(value);
// }

        /****** every *****/  // true or false
        // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
        // need a callback function
 
// console.log(array2.every( function (value)  {return value<6} ) )
// console.log(array2.every( (value) => {return value<6} ) )
// console.log(array2.every( (value) =>  value<6 ) )


        /*****fill *****/
        // syntax fill(value,starting_index,ending_index)
// console.log(array1.fill(6,2,4))
// console.log(array1.fill(6,2))
// console.log(array1.fill(6))

            /*****filter *****/
            // need callback function

// console.log(array2.filter( (value) => value>2 ));
// console.log(array2)

            /***** find *****/
            // need callback func
console.log(array1.find( (value) => value>2 ));
// console.log(array1.find( (value) => value===4 ));

            /***** findIndex,findLast,findLastIndex *****/
            // need callback func
// console.log(array1.findIndex( (value) => value>2 ))
// console.log(array1.findIndex( (value) => value===4 ))
// console.log(array1.findLast( (value) => value>2 )) // window method
// console.log(array1.findLast( (value) => value<4 )) // window method
// console.log(array1.findLastIndex( (value) => value>2 )) // window method
//  console.log(array1.findLastIndex( (value) => value<4 )) // window method

            /***** flat ******/
           // array inside multiple array to convert simple form
// const multiplearr = [1,2,3,[4,5,6],[7,8,[1,2,[3,4,5]]]]
// const simpleform = multiplearr.flat(Infinity)//infinity is depth
// console.log(simpleform)

            /*****flatmap ****/
            //The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

//console.log(array2.flatMap( (value)=> value>3 ? 6:7));

            /****forEach ****/  
          // loop // need a callback func
 //array1.forEach(value => console.log(value))
   
         /**********difference b/w foreach and map *************/
 //const test = array1.forEach(value => value+1) 
//  const test = array1.map(value => value) 
//  console.log(test)

            /*****includes *****/
            // true or false
// console.log(array1.includes(5))
// console.log(array1.includes(6))

            /****indexOf ****/
            // position of element
// console.log(array1.indexOf(4));
//  console.log(array1.indexOf(0));


            /***isArray ****/
// console.log(Array.isArray(array2));


            /****join *****/   // convert to string by joining element
            // The join() method creates and returns a new string by concatenating all of the elements in an array follow by , , " ", ' ' , - , / etc.
//  console.log(array1.join());
//  console.log(array1.join().length);
// console.log(array1.join(''));
//  console.log(array1.join('-'));
// console.log(typeof array1.join());
// console.log(typeof array1)

            /****keys ****/
            // index loop
//  const iterator = array1.keys()  // return an array of index or iterator
//  console.log(iterator);
// for (const key of iterator) {
// //     console.log(key);
//     console.log(array1[key])
// }

            /****lastIndexOf *****/
// let num = [1,2,1,2,3,2,1]
// console.log(num.lastIndexOf(1));
// console.log(num.lastIndexOf(2));


                /****** map *****/
                // it store key value pair but not dublicate key value
// const mapDemo = new Map()
// mapDemo.set(1,'a')
// mapDemo.set(2,'b')
// mapDemo.set(3,'a')
// mapDemo.set(1,'a')
// mapDemo.set(2,'a')
//  console.log(mapDemo) 

                /******push,pop,unshift,shift ******/
                // push -> insert value in the end of array
                // pop ->  retrieve value from the end of array
                // unshift -> insert value in starting of array
                // shift -> retrieve value from starting of array
// array1.push(6)
// console.log(array1);
// array1.pop()
// console.log(array1);
// array1.unshift(0)
// console.log(array1)
// array1.shift()
// console.log(array1)
 
                /***** reduce ****/
                // need a call back func
// const result = array2.reduce((accu,currValue) => {
//         return accu + currValue
// },0)  // accu start by default zero 
// console.log(result);

// const result = array2.reduceRight((accu,currValue) => {
//           return accu+currValue
// },0)  
// console.log(result);

                 /******reverse ******/
                // console.log(array1.reverse());
                // console.log(array1)
                      
                /***** slice and splice*****/
                // slice does not change the original array but splice is change

// console.log("A",array2)
// const newm1 = array2.slice(1,3) //  first value include
// console.log(newm1)

//  console.log("B",array2)

// const newm2 = array2.splice(1,3) // both value include
// console.log(newm2)

// console.log("C",array2)
  

                /*****some*****/  // true or false
                //need a callback func
                //The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.z
        //console.log(array1.some((element) => element%2==0));

                /***** sort *****/
// const re = array1.reverse()
// console.log(re)
// console.log(re.sort())
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points); // 1,5,10,25,40,100
// points.sort(function(a, b){return b - a});
// console.log(points); // 100,40,25,10,5,1

                /***** toString, toLocaleString *****/
// const str = array1.toString()
// console.log(typeof str, str);
// const str = array1.toLocaleString()  // provide other functionality
// console.log(typeof str, str);


                /****toReversed *****/
//console.log(array1.toReversed())  // use in window

                /***** toSorted *****/
// const hey = [5,4,3,2,1]
// console.log(hey.toSorted()); // use in window

                /**** toSpliced *****/
//console.log(array1.toSpliced(1,3));  //use in window

                /**** values *****/
// The values() method returns a new array iterator object that iterates the value of each item in the array.

//const array1 = ['a', 'b', 'c'];
// const iterator = array1.values();

// for (const value of iterator) {
//   console.log(value);
// }

                /**** with ****/
                // window method
                // replace given index value by given value
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]


/*******Array destructuring ******/
//let rest;
  const p = ['a','2','3','4']
  //['1','2', ...rest] = ['1','2','3','4']
//  const [a,b,c,d] = p;
//  console.log(b)
//  console.log(a)

// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2

const example = ['hi', 'hey', 'hello'];
// array destructuring
const [...test] = example;
console.log(test);


/***********keys,values,entries,foreach,map, [flatmap,filter,reduce,] ***********************/