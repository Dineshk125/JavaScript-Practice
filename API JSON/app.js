let url = "https://catfact.ninja/fact"

async function getFact() {
    try {
        let res = await fetch(url)
        let data1 = await res.json()
        console.log("data1 - ",data1.fact)
        console.log("")
        let res2 = await fetch(url)
        let data2 = await res2.json()
        console.log("data2 - ",data2.fact)
    }
    catch(err) {
        console.log("error - ",err)
    }
    console.log("Hello Fact")
}


// fetch(url)
// .then((res) => {
//     // console.log(res)
//     // res.json().then((data) => {console.log(data)} )
//     return res.json()
// })
// .then((data1) => {
//     console.log("Data1 - ",data1.fact)
//     return fetch(url)
// })
// .then((res) => {
//     return res.json()
// })
// .then((data2) => {
//     console.log("Data2 - ", data2.fact  )
// })
// .catch((err) => {
//   console.log("Error: ",err)   
// });

// console.log("Hello there")