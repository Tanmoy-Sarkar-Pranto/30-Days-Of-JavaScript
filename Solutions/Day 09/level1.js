const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// function callBack(a){
//   console.log(a)
// }

// numbers.forEach(callBack)

// const newCountries = products.map(product=>{
//   const elem = `${product.product} = ${product.price}`
//   return elem 
// })
// console.log(newCountries)


// const newCountries2 = products.filter(prod=>{
//   return prod.price != '' && prod.price != ' '
// })

// console.log(newCountries2)

// function getStringLists(arr){
//   const newArr = arr.filter(a=>{
//     return typeof a === "string"
//   })
//   console.log(newArr)
// }

// getStringLists([1,2,3,"sad","aqwe","awetg",NaN,10])

// const sum = countries.reduce((sum,num)=>{
//   let string = ''
//   if(num === countries[countries.length-1]){
//     string = sum+" and "+num + " are north Eurepoean countries"
//   }else{
//     string = sum+", "+num
//   }
  
//   return string
// })
// console.log(sum)

// const some = countries.every((name)=>{
//   return name.includes("land")
// })
// console.log(some)

const coutry = countries.findIndex(country=>{
  return country ? country==="Russia" : -1
})
console.log(coutry)


