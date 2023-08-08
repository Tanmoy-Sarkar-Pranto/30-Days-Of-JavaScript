let a = [1,2,3,4,5]
let b = [1,3,4,5,6]
let set_a = new Set(a)
let set_b = new Set(b)

let union = [...a,...b]
// console.log(union)

let inter = a.filter(num=>b.includes(num))
// console.log(inter)
let differ = a.filter(num=>!b.includes(num))
console.log(differ)