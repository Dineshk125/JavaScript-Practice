const express = require('express')

const app = express()

const PORT = 8080;

app.set("view engin", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.listen(PORT, () => {
    console.log(`Listning on Port : ${PORT}`)
})