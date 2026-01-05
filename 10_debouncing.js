function debounce(fn, delay){
    let id;
    return function(...args){
        clearTimeout(id)
        id = setTimeout(()=>fn.apply(this, args), delay)
    }
}

const greet = (name)=>{
    console.log("Hello "+ name);
}
const fun = debounce(greet, 2000)

fun("Pritam")
fun("Pritam")
fun("Pritam")
fun("Pritam")
fun("Pritam")