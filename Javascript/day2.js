let x = '5'


let y = !false 



if (x===5) {
    console.log("x is 5")
}
else {
    console.log("x is  not 5")

}

let marks  = 30



// if (marks>40) {
//         result = "pass"
// }
// else {
//     result = "fail"
// }


let result = marks>40 ? "pass" : "fail"

let age = 18

let isVoter = age>=18 ? 'eligible'  : 'not eligible'

console.log(isVoter,"vote")

let condition  = marks>40

console.log(condition,"??????")


let ANDGATE = true && !false  
let ORGATE = age>=18 && marks>40  
// console.log(ANDGATE,"gate")
console.log(ANDGATE,"gate")




// if (x!== 5) {
//     console.log("x is not 5")

// }
// else {
//     console.log("x is 5")

// }

let a = 0
// while (a<5) {

//     console.log(a)      // 0,1,2,3,4
//     a++                 //1,2,3,4,5
// }



// do {
//     console.log(a)    //0,1
// a++
// }while (a<=1)


// somecomment 


for (let i =0 ; i<=20; i++) {
   if (i%3===0 && i%5===0) {
    console.log(i,"fizzbuzz")
   }
   else if (i%3 ===0) {
    console.log(i,"fizz")

   }
   else if  (i%5 ===0) {
    console.log(i,"buzz")
   }
}
