let set = new Set()
for(let i=0;i<=10;i++){
    set.add(i)
}
// set.delete(1)
// set.clear()
let arr = ["aa","bsd","cwqq","ds","eawdsc"]
let setFromArr = new Set(arr)
let size = new Map()
let map = arr.map(string=>{
    size.set(string, string.length)
})
console.log(size)