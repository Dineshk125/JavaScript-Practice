const figlet = require('figlet')

figlet("Dinesh Kumawat", function (err, data) {
    if (err) {
        console.log("Somthing went wrong...")
        console.log(err)
        return
    }
    console.log(data)
})