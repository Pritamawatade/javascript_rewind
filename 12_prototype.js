const p = {
    x1: "x1"
}
const p2 = {
    x2: "x2",
    __proto__: p
}
const p3 = {
    x3: "x3",
    __proto__: p2
}

console.log(p3.x1); // "x1"

const n = 2;

console.log(n.__proto__);
console.log(Number.prototype);
