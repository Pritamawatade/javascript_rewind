const fs = require('fs');
function readFileWithPromise(filePath, encoding){
    return new Promise((resolve, reject)=>{

        fs.readFile(filePath, encoding, (err, content)=>{
            if(err){
                reject(err); // reject function signals that call the .catch function of result object with value of error = err.
            }else{
                resolve(content); // resolve function signal that call the .then function of result(promise) object with value of e = content
            }
        })
    })
}

const result = readFileWithPromise('./h.txt', 'utf-8');

result.then((e)=>console.log('e = ',e)).catch((error)=> console.log('err', error))