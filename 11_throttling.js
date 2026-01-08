const throttle = (fn, delay) =>{
    let id = null;

    return (...args)=>{
        
        
        if(id == null){
            fn(args);
            id = setTimeout(()=> {id=null}, delay)
        }
    }

}

const apicall = (url) => setTimeout(()=> console.log("url = ", url), 5000);
const throttledApiCall = throttle(apicall, 2000);

throttledApiCall("api/users/1", "first call")
throttledApiCall("api/users/2", "first call")
throttledApiCall("api/users/3", "first call")
throttledApiCall("api/users/4", "first call")
throttledApiCall("api/users/5", "first call")