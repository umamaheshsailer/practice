const arry = ['een',12,'234','fjr',45,45,67]
const unique = new Set(arry)
const dj = unique.size
let x = 'Hello' && false; // x is equal to 'false' (first falsy value)

let y = 0 && 'Yes' && true; // y is equal to 0 (first falsy value)

let z = true && 'Hello' && 10; // since all are truthy, z is equal to 10 (the last value)
console.log({unique},dj,x,y,z)

// since all are false, z is equal to 0 (the last value)