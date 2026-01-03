Array.prototype.foreach = function (fn) {
    for (let i = 0; i < this.length; i++) {
        fn(this[i], i)
    }
}

if (!Array.prototype.mymap) {
    Array.prototype.mymap = function (fn) {
        let res = []
        for (let i = 0; i < this.length; i++) {
            const result = fn(this[i], i)
            res.push(result)
        }

        return res;
    }
}

if (!Array.prototype.myreduce) {
    Array.prototype.myreduce = function (fun, intialvalue) {
        let acc = intialvalue === undefined ? this[0] : intialvalue;
        let startIndex = intialvalue === undefined ? 1 : 0;

        for (let i = startIndex; i < this.length; i++) {
            acc = fun(acc, this[i])
        }

        return acc;

    }
}

arr = [1]
// let demo = arr.foreach((el, i)=> el*2)

// let demo = arr.mymap((el, i) => el * 2)

let demo = arr.reduce((acc, intialvalue) => {
    console.log(`acc = ${acc}\n intialvalue = ${intialvalue}`);
    console.log("--------------------------------------");

    return acc + intialvalue

});

console.log(demo);
demo = arr.myreduce((acc, intialvalue) => {
    console.log(`acc = ${acc}\n intialvalue = ${intialvalue}`);
    console.log("--------------------------------------");

    return acc + intialvalue

});
console.log(demo);

function demo(){}
