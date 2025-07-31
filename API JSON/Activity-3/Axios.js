// Activity Using query Strings

let url4 = "http://universities.hipolabs.com/search?country=India"
let btn1 = document.querySelector("button")

btn1.addEventListener("click", async () => {
    let stateInput = document.querySelector("input").value.trim()
    console.log(stateInput)
    let collArr = await getColleges(stateInput)
    console.log(collArr)
    show(collArr)
})

function show(collArr) {
    let list = document.querySelector("#list")
    list.innerText = ""
    for (let col of collArr) {
        console.log(col.name)

        let li = document.createElement("li")
        li.innerText = col.name
        list.appendChild(li)
    }
}

async function getColleges(stateInput) {
    try{
        let res = await axios.get(url4)
        let data = res.data
        const filtered = data.filter(col => col["state-province"] === stateInput);
        return filtered
    } catch(err) {
        console.log("Error - ",err)
        return []
    }
}


// Activity Using query Strings

// let url3 = "http://universities.hipolabs.com/search?name="
// let btn = document.querySelector("button")

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value.trim()
//     console.log(country)
//     let collArr = await getColleges(country)
//     console.log(collArr)
//     show(collArr)
// })

// function show(collArr) {
//     let ul = document.querySelector("#list")
//     list.innerText = ""
//     for (col of collArr) {
//         console.log(col.name)

//         let li = document.createElement("li")
//         li.innerText = col.name
//         list.appendChild(li)
//     }
// }

// async function getColleges(country) {
//     try{
//         let res = await axios.get(url3 + country)
//         return res.data
//     } catch(err) {
//         console.log("Error - ",err)
//         return []
//     }
// }