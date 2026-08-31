Array.prototype.customForEach = function(callback, customContext){

    if(typeof callback !== "function"){
        console.log(typeof callback)
        throw `callback is not function`
    }

    if(!customContext){
        customContext = this;
    }

    const length = customContext.length;
    let i = 0;

    while(i < length){

        if(customContext.hasOwnProperty(i)){
            const res = callback.call(customContext, customContext[i], i);
            console.log(res);
        }
        i++;
    }
}

const arr = [1,2,3,4,5,6]
const arr2 = [1,2,3,4,5,10]

arr.customForEach((el)=>el*3)