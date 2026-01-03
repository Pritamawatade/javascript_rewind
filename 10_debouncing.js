function debounce(fn, delay){
    let id;
    return function(...args){
        clearTimeout(id)
        id = setTimeout(()=>fn.apply(this, args), delay)
    }
}

const greet = (hitesh)=>{
    console.log("Hello "+ hitesh);
}
const betterGreet = debounce(greet, 2000)

betterGreet("Hitesh")
betterGreet("Hitesh")
betterGreet("Hitesh")
betterGreet("Hitesh")
betterGreet("Hitesh")