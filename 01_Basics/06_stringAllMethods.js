// string all methods

const play = new String('game')
const play2 = "game2"

        /*****at******/  
        // it gives the character at position of 0,1,2,3 etc.
        // play.at(0) and play[0] work same but at use in DOM

//      console.log(play.at(0))
//      console.log(play[0])
     //console.log(lastinde)
     //console.log(play[-1]) // not work
     //console.log(play[play.length-1])

        /*****charAt*****/
        // not take -ve value  
//  console.log(play.charAt(0))
//  console.log(play2.charAt(2)); 

        /****charCodeAt,codePointAt *****/
        // give ascii value of character at position 0,1,2 etc.
// console.log(play.charCodeAt(0));
// console.log(play2.charCodeAt(1));

// console.log(play.codePointAt(0));
// console.log(play2.codePointAt(1));
        
        /*****concat *****/

// console.log(play.concat(play2));
// console.log(play.concat(' ',play2));
// console.log(play.concat(',',play2));

        /*****constructor *****/ 
        // learn in oops

        /*****endsWith *****/
// const str1 = 'Cats are the best!';
// console.log(str1.endsWith('best!'));
// // Expected output: true

// console.log(str1.endsWith('best', 17));
// // Expected output: true

// const str2 = 'Is this a question?';
// console.log(str2.endsWith('question'));
// Expected output: false

        /*****fixed,fontcolor,fontsize *****/
        // no longer use 
// const worldString = "Hello, world";
// console.log(worldString.fixed()); // "<tt>Hello, world</tt>" // tt is also not use in html5
        
        /*****includes ******/
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
//  console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// // Expected output: "The word "fox" is in the sentence"

        /*****indexOf *****/
//  console.log(play.indexOf('me'));
// console.log(play2.indexOf('2'));
        
        /*****isWellFormed *****/
        // ??
 
        /****** lastIndexOf ******/
        // last occurrence of the specified substring
let demo = "memememe"
// console.log(demo.lastIndexOf('me'));
// console.log(demo.indexOf('me'));

        /*****localeCompare *****/
        //??

        /*****match,matchAll *****/
        // ??

        /*******normalize() *******/
        // The normalize() method returns the Unicode Normalization Form of the string.
// const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
// const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

// console.log(`${name1}, ${name2}`);
// // Expected output: "Amélie, Amélie"

        /*****padEnd, padStart ******/
        // (repeated,if needed)
//  console.log(play.padStart(10,'.'));       
//  console.log(play.padEnd(10,'.')); 
//  console.log(play.length);      
// console.log("abc".padEnd(10)); // "abc       "  // default
// console.log("abc".padEnd(10, "foo")); // "abcfoofoof"
// "abc".padEnd(6, "123456"); // "abc123"
// "abc".padEnd(1); // "abc"

        /*****repeat******/  
        // not take -ve value
// console.log(play.repeat(2));
// console.log(play.repeat(1));
// console.log(play2.repeat(0));

        /*****replace, replaceAll ******/

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
// console.log(p.replace('dog', 'monkey'));
// console.log(p.replaceAll('dog', 'monkey')); // work on windows not in nodeJs

        /*****search *****/
        // return index value 
// console.log(play.search('m'));
// console.log(play[play.search('m')])

        /******slice *****/  //  include only starting value
        // -ve value is also take 
        //The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

 const str1 = "The morning is upon us."; // The length of str1 is 23.
//  const str2 = str1.slice(1, 8);
//  const str3 = str1.slice(4, -2);
// const str4 = str1.slice(12); 
// const str5 = str1.slice(30);
//   console.log(str2); // he morn
//   console.log(str3); // morning is upon u
//  console.log(str4); // is upon us.
// console.log(str5); // ""
// console.log(str1)
        
        /*****split *****/
        // it split the string and return an array of string
// const url = "http://hitesh.com/hitehs%20chaudary"
// console.log(url.split(''))
// console.log(url.split('/'))
// console.log(url.split('h'))
// console.log(url)

        /*****startsWith ****/   //(true or false)
        //The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

// const str1 = 'Saturday night plans';
// console.log(str1.startsWith('Sat'));
// console.log(str1.startsWith('Sat', 3));



        /*****substring *****/ // include starting parameter
        // not take -ve value 
        //The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

//const str = 'Mozilla';
// console.log(str.substring(1, 3));
// Expected output: "oz"
// console.log(str.slice(1,3));
// console.log(str.substring(2));
// Expected output: "zilla"

        /*******toLocaleLowerCase and toLocaleUpperCase ******/
        //The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.

// const dotted = 'İstanbul';
// console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// // Expected output: "i̇stanbul"
// console.log(dotted.toLocaleUpperCase('en-US'))
// console.log(dotted.toLocaleUpperCase('TR'));

        /******toLowerCase and toUpperCase ******/
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());

        /******toString(),valueOf ******/

// console.log(play); // [String: 'game'] 
// console.log(play.toString()); // game
// console.log(play.valueOf());
// console.log(play2);
// console.log(play2.toString());

const num = 12345
// console.log(typeof num);
// console.log(typeof num.toString())
// console.log(num.toString());
// console.log(typeof num);

        /*****toWellFormed *****/
// const strings = [
//     // Lone high surrogate
//     "ab\uD800",
//     "ab\uD800c",
//     // Lone low surrogate
//     "\uDFFFab",
//     "c\uDFFFab",
//     // Well-formed
//     "abc",
//     "ab\uD83D\uDE04c",
//     ];
//     for (const str of strings) {
//     console.log(str.toWellFormed());
//     }

// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
 
        /*****trim,trimStart,trimEnd,trimLeft,trimRight *****/
        // The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
const name = "   imran   "
// console.log(name.trim());
// console.log(name.trimStart());
// console.log(name.trimEnd());
// console.log(name.trimLeft());
// console.log(name.trimRight());


     /*****Some most usable methods are *****/
 // console.log(...play); //spread   
// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String indexOf()
// String charAt()
// String charCodeAt()
// String split()