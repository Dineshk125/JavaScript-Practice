const express = require("express");
const app = express()

// console.dir(app)

const port = 3000;

app.get('/frutes', (req, res) => {
    res.send({
        name: "apple",
        color: "Red"
    },
{
    name: "Banana",
    color:"yellow"
})
});

app.listen(port, () => {
    console.log(`The Express Server running on : ${port} Port` )
}) 

// app.use((req, res) => {
//     // console.log(res)
//     console.log("App request is Listining")
//     // res.send({
//     //     name: "Apple",
//     //     color: "Red"
//     // })
//     let code = "<h1>Fruts</h1> <ul><li>Apple</li> <li>Banana</li></ul>"
//     res.send(code);
// })

app.get("/", (req, res) => {
    res.send("Root Path is Connected.")
})

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    console.log(req.params)
    let htmlStr = `<h1>Welcome to the page of @${username} with id ${id}. </h1>`
    res.send(htmlStr)
    // res.send(`welcome to the page of @${username} with id ${id}.`)
})

app.get("/search", (req, res) => {
    let {q} = req.query
    if (!q) {
        res.send(`<h1>Nothing search</h1>`)
    } else{
    res.send(`<h1>Search result for query : ${q}</h1>`)
    }
})  

// app.get("/search", (req, res) => {
//     console.log(req.query)
//     res.send("Query not found!")
// })

// app.get("/apple", (req, res) => {
//     console.log("Apple Path Connected.")
//     res.send("Apple Path Connected.")

// })

// app.get("/Search", (req, res) => {
//     console.log("Search Path is Connected.")
//     res.send("Search Path Connected.")

// })

// app.get("/login", (req, res) => {
//     console.log("Search Path is Connected.")
//     res.send("Login Path Connected.")
// })

// app.get("*", (req, res) => {
//     res.send("Path Not Exist.");
// });

// app.post("/", (req, res) => {
//     console.log("Send post request to root.")
//     res.send("Send POST request to root.")
// })