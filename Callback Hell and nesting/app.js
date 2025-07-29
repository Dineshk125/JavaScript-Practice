let h1 = document.querySelector('h1')

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color
            resolve("Color Changed.")
            reject("Color Not changed.")
        }, delay);
    })
}

changeColor("red", 1000)
.then((result) => {
    console.log("Red Color Was Changed.")
    console.log("Result:", result)
    return changeColor("Orange", 1000)
})
.then((result) => {
    console.log("Orange color was changed.")
    console.log("Result:", result)
    return changeColor("green", 1000)
})
.then((result) => {
    console.log("Green Color Was Changed.")
    console.log("Result:", result)
    return changeColor("blue", 1000)
})
.then((result) => {
    console.log("Blue Color Was Changed.")
    console.log("Result:", result)
    return changeColor("black", 1000)
})
.then((result) => {
    console.log("First color")
    console.log("Result:", result)
})
.catch((error) => {
    console.log("No any color changed.")
    console.log("Error:", error)
})

// changeColor('red', 1000, () => {
//     changeColor('orange',1000, () => {
//         changeColor('green', 1000, () => {
//             changeColor('yellow', 1000)
//         })
//     })
// })


// Promises -> the promises object represents the eventual completion(or failure) of an asunc operations and its resulting value.

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Data Saved")
//         } else {
//             reject("Data Failed.")
//         }
//     })
// }
            // .then and .catch in promise

// let request = savetoDb("Dinesh Kumawat")

// request.then(() => {
//     console.log("Request was resolved.")
//     console.log(request)
// })
// .catch(() => {
//     console.log("Request Was Fail and Not Resolved. ")
//     console.log(request)
// })

                    //or


// savetoDb("Dinesh Kumawat")
// .then(() => {
//     console.log("Request was resolved.")
// })
// .catch(() => {
//     console.log("Request Was Fail and Not Resolved. ")
// })


                // promise chaining

// savetoDb("Dinesh Kumawat")
// .then((result) => {
//     console.log("Result: ", result)
//     console.log(" Promise1 : resolved.")
//     return  savetoDb("Hello")
// })
// .then((result) => {
//     console.log("Result: ", result)
//     console.log("Promise2 : resolved.")
//     return savetoDb("Hii")
// })
// .then((result) => {
//     console.log("Result: ", result)
//     console.log("Promise3 : resolved.")
// })
// .catch((error) => {
//     console.log("Promise : Was rejected. ")
//     console.log("Error: ", error)
// })


// savetoDb("Dinesh")



// function saveDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random()*10) + 1

//     if (internetSpeed > 4) {
//         success()
//     } else {
//         failure()
//     }
// }

// saveDb("Dinesh", () =>{
//     console.log("Data Saved Successfull.")
//     saveDb("Hello World", () => {
//         console.log("Success2 : Data2 Saved.")
//         saveDb("Hii Everyone", () => {
//             console.log("Success3 : Data3 Saved")
//         }, () => {
//             console.log("Failure 3 : Data fail")
//         })
//     }, () => {
//         console.log("Failure2 : Data2 Fail")
//     })
// }, () => {
//     console.log("Data Saved Failed, Due to Slow Internet Speed.")
// })



// callback nesting -> callback hell 

// h1 = document.querySelector('h1')

// function changeColor(color, delay, nextColor){
//     setTimeout(() => {
//         h1.style.color = color
//         if (nextColor) nextColor()
//     }, delay);
// }

// changeColor('red', 1000, () => {
//     changeColor('orange',1000, () => {
//         changeColor('green', 1000, () => {
//             changeColor('yellow', 1000)
//         })
//     })
// })


// setTimeout(() => {
//     h1.style.color = "red"
// }, 1000)

// setTimeout(() => {
//     h1.style.color = "orange"
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green"
// }, 3000);