const fs = require('fs')
// console.log("hi")

// setTimeout(()=> console.log("hello form 2s "), 0)

// Promise.resolve().then(()=> console.log("Promise resolved..."));

// setTimeout(()=> console.log("hello form 2s "), 0)
// console.log("Bye..")


// file reading using callback asynchronous way

// fs.readFile('./h.txt', 'utf-8', (error, data)=>{
//     console.log("Entered cb");
    
//     if(error){
//         console.log("Error", error)
//     }else{
//         console.log("Data", data)
//     }
// })

// console.log(res);

console.log("hi");

sum(2,3, (result)=>{
    console.log("Sum done", result);
})
function sum(a,b, cb){
    setTimeout(() => 
        cb(a+b), 2000);
}
console.log("bye");
