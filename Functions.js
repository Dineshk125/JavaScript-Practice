// function poem() {
//     console.log("loreammmurfuwe fiuwhf irihfoowihfoaoiw  qieirhfaer faerfh giergiaeurh iaeurghiegh")
// }

// // poem()

// function rollDice() {
//     let rand = Math.floor(Math.random()*6)+1
//     console.log(rand)
// }
// // rollDice()
// // rollDice()

// function funcWithArgu(a,b,c) {
//     console.log(a+b+c)
// }
// // funcWithArgu(10)


// function avg(a,b,c){
//     let d = (a+b+c)/3
//     console.log(d)
// }
// // avg(30,10.20,30)
// // avg 

// function multiTable(n){
//     for(i=n; i<=n*10; i+=n){

//         console.log(i)
//     }
// }
// multiTable(12)


// const student = {
//     name : "Dinesh",
//     math : 90,
//     phy : 80,
//     getAvg() {
//         let avg = (thiq.math + this.phy)/2
//         console.log(`${this.name} got avg marks : ${avg}`)
//     }
// }


// try and catch block

// console.log("hello")
// console.log("hii")
// try{
//     console.log(a)
// } catch {
//     console.log("Error : a Is not defined")
// }
// console.log("byyyy")

// const summ = (a,b) => { 
//     console.log(a+b)

//  }
// summ(2,4)

// Arrow Func Implicit return 

// const mul = (a, b) => a*b;
// console.log(mul(2,3))


// console.log("hello")

// setTimeout(() => {
//     console.log("Kumawat");
// }, 4000);

// console.log("Dinesh")

// console.log("Inretval")

// setInterval( () => {
//     console.log("ho gya")
// }, 2000)

// // console.log("set")

// //  This with Arrow Functions

// const squre = (n) => {
//     squree = n*n
//     console.log(squree)
// }
// squre(4)

// let id = setInterval((n) => {
//         console.log("Hello World!")
// }, 2000)

// setTimeout(() => {
//     clearInterval(id)
// }, 10000);

// forEach Array Method

// const print = [
//     {
//         name : "Dinesh",
//         marks : 99,
//     },
//     {
//         name : "Vinit",
//         marks : 90,
//     },

//     {
//         name : "visu",
//         marks : 98
//     }
// ]

// print.forEach(element => {
//     console.log(element.name)
//     console.log(element.marks)
//     console.log(element)
// });


// // map method 

// let gpa = print.map((ele) => {
//     console.log(ele.marks / 10)
// })

// let num = [1,2,3,4]
// let double = num.map((ele) => {
//     console.log(ele*2)
// })

// // filter method

// let nums = [1,2,3,12,3,5,5,6543,34,23,12]

// let even = nums.filter((num) => (num % 2 == 0))
// console.log(even)

// // every method

// arr = [2,4,6,8,9]
// let even = arr.every((ele) =>(ele % 2 == 0))
// console.log(even)

// let arr = [1,2,3,4]

// let finalArr = arr.reduce((res, ele) => res-ele)
// console.log(finalArr)

let arr = [1,2,3,4,6,444,234,677,89]
// let max = -1

// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max)

// let result = arr.reduce((max , ele) => {
//     if (max < ele) {
//         return ele
//     } else {
//         return max 
//     }
// })

// console.log(result)

let result = arr.reduce((min , ele) => {
    if (min < ele) {
        return min
    } else {
        return ele 
    }
})

console.log(result)