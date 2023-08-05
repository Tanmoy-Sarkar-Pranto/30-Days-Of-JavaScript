const quote = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let numberOfOccurrences = quote.toLowerCase().split("love")

// console.log(numberOfOccurrences.length-1)

// let quote2 = 'You cannot end a sentence with because because because is a conjunction'

// console.log(quote2.match(new RegExp('because','g')).length)

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// let sentence2 = sentence.replace(/[^\w\s]/gi,'')

// let words = sentence2.split(/\s+/)
// // console.log(words.length)
// let uniqueWords = new Set(words)
// let uniqueWordsArray = Array.from(uniqueWords)

// // console.log(uniqueWordsArray.length)
// let highestCount = 0
// let mostFrequent = []
// uniqueWordsArray.forEach((word)=>{
//     const start = words.indexOf(word)
//     const end = words.lastIndexOf(word)
//     const count = end - start + 1;

//     if(count>highestCount){
//         highestCount = count
//         mostFrequent = [word]
//     }

//     if(count===highestCount && !mostFrequent.includes(word)){
//         mostFrequent.push(word)
//     }
// })

// console.log(mostFrequent)



const string =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let nums = string.match(/\d+/g)
// console.log(nums)
let salary = parseInt(nums[0])*12+parseInt(nums[1])+parseInt(nums[2])*12

console.log(salary)

