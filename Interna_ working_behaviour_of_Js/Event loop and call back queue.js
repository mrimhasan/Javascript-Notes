// console.log("hi-1")

// function hello(){
//     console.log("hello world!")
// }

// for(let i=0;i<=3;i++){
//     console.log("for-loop")
// }
// hello();

// setTimeout(
//    console.log("my name is imran hasan")
// ,10000);

// console.log("Khatam");

// Event loupe
//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


function x(){
    for (var i = 1; i < 7; i++) {
        setTimeout(function(){
            console.log(i); // the value of i along with its closure so i reference same memory location and value of i after executing for loop is 7 so it print 7 7 7 7 7 7 
            
        },i*1000)
    }
    console.log("hello Imran")
}
x();
// function x(){
//     for (let i = 1; i < 7; i++) {
//         setTimeout(function(){
//             console.log(i);// let is block scope so every function call a new block is form with new variable i so values print on screen is 1 2 3 4 5 6
//         },i*1000)
//     }
//     console.log("hello Imran")
// }
// x();