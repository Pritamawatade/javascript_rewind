let globalVar = "I am a global variable"

function myFunc(){
    globalVar = "I am a local variable"
    console.log(globalVar)
    let blockVar = "I am a block variable"
    // console.log(blockVar)
}

// myFunc()
// console.log(globalVar);

let person1 = {
    name: "Pritam",
    greet: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

let person2 = {
    name: "Sayog",
    greet: function(){
        console.log(`this is ${JSON.stringify(this)}`)
    }
}

// person2.greet.call(person1)
// person1.greet.apply(person2)

// person1.greet.bind(person2)()

person2.greet()