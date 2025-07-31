// Activity Using query Strings

let url4 = "http://universities.hipolabs.com/search?name="

let contry = "india";

async function getColleges() {
    try{
        let res = await axios.get(url4 + contry)
        console.log(res.data)
    } catch(err) {
        console.log("Error - ",err)
    }
}

// let url3 = "https://icanhazdadjoke.com/"

// async function getJoks() {
//     try{
//         const config = {headers: {accept: "application/json"}}
//         let res = await axios.get(url3, config)
//         console.log(res.data)
//     } catch(err) {
//         console.log("error - ",err)
//     }
// }

// let btn = document.querySelector('button')
// let url2 = "https://dog.ceo/api/breeds/image/random"

// btn.addEventListener("click", async () => {
//     let image = await getImage();
//     let img = document.querySelector("#result")
//     img.setAttribute("src" , image)
// })

// async function getImage() {
//     try {
//         let res = await axios.get(url2)
//         return res.data.message
//     } catch(err) {
//         console.log("Error - ", err)
//         return "No Image Found."
//     }
// }

// btn.addEventListener("click", async () => {
//     let fact = await getFact();
//     console.log(fact)
//     let p = document.querySelector("#result")
//     p.innerText = fact;
// })


// let url = "https://catfact.ninja/fact"
// let url2 = "https://dog.ceo/api/breeds/image/random"

// async function getFact() {
//     try {
//         let res = await axios.get(url)
//         return res.data.fact
//     } catch(err) {
//         console.log("Error - ", err)
//         return "No Fact Found."
//     }
// }