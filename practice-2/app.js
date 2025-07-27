// let btn = document.createElement('button')

let btns = document.querySelectorAll('button')

for (btn of btns) {

    // btn.addEventListener("click", sayHello)
    // btn.addEventListener("click", sayName)

    btn.addEventListener("dblclick", function () {
        console.log("You double clicked!")
    } )


    // btn.onclick = sayHello;
    // btn.onmouseenter = function () {
    //     console.log("You entered on Button")
    // }
    // console.dir(btn)
}

function sayHello() {
    alert('hello')
}

function sayName() {
    alert("How are you!")
}

