let quote = "There is no exercise better for the heart than reaching down and lifting people up."
// console.log(`The quote '${quote}' by John Holmes teaches us to help one another.`)
let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

// console.log(quote2)
const type1 = typeof "10"
const type2 = typeof String(10)

// console.log(type1==type2)

// console.log(parseInt(Math.ceil(9.8)))

// console.log('Pyhton'.includes('on') && 'jargon'.includes('on'))

// console.log("I hope this course is not full of jargon".includes("jargon"))

// console.log(Math.ceil(Math.random()*100))

// console.log(Math.floor(Math.random()*(100-50+1))+ 50)


// let string = "JavaScript"

// let max = string.length-1,min=0
// console.log(string[Math.floor(Math.random()*(max-min+1))+min])

// console.log('1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

let string2 = 'You cannot end a sentence with because because because is a conjunction'

let index = string2.indexOf("because")
let index2 = string2.lastIndexOf("because")
console.log(string2.substring(index,index2+"because".length))

