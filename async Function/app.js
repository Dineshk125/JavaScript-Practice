function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num)
            resolve()
        }, 1000);
    })
}

async function showNum() {
    await getNum()
    await getNum()
    await getNum()
    return "Random Numbers"
}



let h1 = document.querySelector('h1')

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)
            if (num > 3) {
                reject("promise Rejected.")
            }
            h1.style.color = color;
            console.log(`color chang to ${color}!`)
            resolve('Color Changed')
        }, delay);
    })
}

async function show() {
    try {
    await colorChange("red", 1000)
    await colorChange("orange", 1000)
    await colorChange("yellow", 1000)
    await colorChange("blue", 1000)
    await colorChange("green", 1000)
    } catch (err) {
        console.log("Error Caugh")
        console.log(err)
    }

    let a = 5;
    console.log(a)
    console.log(a+1)
    return "Done"
}


//  async function greet() {
//     return "Hello!" ;
// }

// greet()
// .then((result) => {
//     console.log("Promise was Successfull.")
//     console.log("Result:", result)
// })
// .catch(() => {
//     console.log("Promise was rejected.")
// })

// let aroAsync = async () => { return 5+5}

// aroAsync()