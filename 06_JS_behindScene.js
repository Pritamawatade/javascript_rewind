let person1 = {
    name: "Pritam",
    greet: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}
console.log("Hi");

setTimeout(person1.greet.bind(person1), 1000)
console.log("Bye");


