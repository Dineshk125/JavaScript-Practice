let  todo = []

req = prompt("Please enter your request. ")

while (true) {
    if(req == "quit"){
        console.log("Quitting App")
        break
    }
    if(req == "list"){
        console.log("-------------");
        for(let i = 0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------")
    }
    else if(req == "add"){
        let task = prompt("Enter The Task You Want to Add.")
        todo.push(task);
        console.log("Task Added")
    }
    else if(req == "delete"){
        let inx = prompt("Enter The Task You Want to delete.")
        todo.splice(inx,1)
        console.log("Task Deleted")
    }
    else {
        console.log("Invalid Request")
    }
    req = prompt("Please enter your request. ")

}