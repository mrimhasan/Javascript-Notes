const p1  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P1 is resolve")
    }, 1000)
});

const p2  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P2 is resolve")
    }, 2000)
    
});

const p3  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("P3 is reject")
    }, 3000)
});

Promise.all([p1, p2, p3])
.then((result)=>{
    console.log(result);
})
.catch((err)=> console.error(err));


// Promise.allSettled([p1, p2, p3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=> console.error(err));


// Promise.race([p1, p2, p3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=> console.error(err));


// Promise.any([p1, p2, p3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=> console.error(err));
