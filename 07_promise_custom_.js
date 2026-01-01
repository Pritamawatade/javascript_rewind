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

function writeFileWithPromise(filePath, data){
    return new Promise((resolve, reject)=>{
        fs.writeFile(filePath, data, function(err){
            if(err){
                reject()
            }else{
                resolve()
            }
        })
    })
}

function unlinkWithPromise(filepath){
    return new Promise((resolve, reject)=>{
        fs.unlink(filepath, (err)=>{
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

// const result = readFileWithPromise('./h.txt', 'utf-8')
// .then((val)=> writeFileWithPromise('./backup.txt', val))
// .then(()=> unlinkWithPromise('./h.txt'))
// .catch((err)=> console.log('Error is = ', err))
// .finally((error)=> console.log('error = ' ,error)); 

// result.then((e)=>console.log('e = ',e)).catch((error)=> console.log('err', error))

async function wait(){
    const data = await readFileWithPromise('./h.txt', 'utf-8');
    console.log('data = ', data);
    await writeFileWithPromise('./backup.txt', data);
    console.log('data 1= ', data);
    await unlinkWithPromise('./h.txt');
    console.log('data 2= ', data);
}

wait().catch((err)=> console.log('err = ', err));