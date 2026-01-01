const user  = {
    name: "Alice",
    age: 25,
    city: "Los Angeles",
    password: "securepassword123"
}

let proxyuser  = new Proxy(user,  {
    get(target, prop){
        if(prop == "password")
            throw new Error("Password can't be accesses")

        else
            return target[prop]
    }
})
// console.log(proxyuser.name);

// Enable negative indexing in JS

let arr = [1,2,3,4,5]

let proxyarr = new Proxy(arr, {
    get(target, prop){
        if(typeof prop == "string" && prop.startsWith("-")){
            let index = Number(prop)
            index = target.length + index
            return target[index]
        }
        else{
            return target[prop]
        }
    },

    set(target, prop, value){
      if(typeof prop == "string" && prop.startsWith("-")){
            let index = Number(prop)
            index = target.length + index
            target[index] = value
            return target[index]    
        }
        else{
            target[index] = value
            return target[prop]
        }
    }
})

// console.log(proxyarr[-1]);
proxyarr[-1] = 10
console.log(proxyarr);
console.log(arr);