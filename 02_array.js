const arr = [1,2,3,4,5,6,7]

// const index = arr.indexOf(5)
// console.log(index)
// console.log(arr.slice(2,4))
// console.log(arr)
// console.log(arr.splice(2,2))
// console.log(arr)


// arr.forEach((el, i, ar)=>{
//     console.log(el, i)
//     // console.log(ar)2
// })

const array2 = [8,9,10]

// const allArr = arr.concat(array2)
// console.log(allArr)
// console.log(arr)

// const allArr = [...arr, 11,22, ...array2]
// console.log(allArr)
// console.log(arr)


const obj = {
    name: "Pritam",
    age: 20,
    info:{
        collage: "Pune cambridge",
        add: "Pune",
        int: [1,2,3]
    },
    demo: "Demo of the obj"
}

const newObj = {...obj, ins: "Last interested"}
console.log(obj.info.int[0])
console.log(newObj)

const {name, age} = obj
console.log(name, age)
