Array.prototype.foreach = function (fn) {
    for (let i = 0; i < this.length; i++) {
        fn(this[i], i)
    }
}

if(!Array.prototype.mymap){
    Array.prototype.mymap = function(fn){
        let res = []
        for(let i = 0; i<this.length; i++){
            const result = fn(this[i], i)
            res.push(result)
        }

        return res;
    }
}

arr = [1, 2, 3, 4, 5]
// let demo = arr.foreach((el, i)=> el*2)

let demo = arr.mymap((el, i) => el * 2)
console.log(demo);

