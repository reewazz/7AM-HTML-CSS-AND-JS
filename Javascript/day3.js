const fruits  = [ "banana","cherry","kiwi","apple","avocado","watermelon"]


console.log(fruits.sort(),"sorteddddd")

const half = fruits.slice(0,2)
 console.log(half,"After slice")

let numbers  = new Array (3,2,1,4,6,5,8,7)

console.log(numbers.sort(),"sorted")

// console.log(numbers,"nums")

console.log(fruits.length)

console.log(fruits.includes("watermelon"),"includes")

const oneFruit = fruits[2]

console.log(oneFruit)

console.log(fruits.toString())


fruits.push("Grape")
fruits.pop()


fruits.unshift("Grape")
fruits.shift()



console.log(fruits)


//  function hello (){
//         console.log("hello")
//     }
const car = {
    brand : "Lambo",
    price : 9999,
    speeds: {
        top : 100,
        average : 40
    },
  hello: function () {
        console.log("hello");
    }
}

console.log(car.hello)