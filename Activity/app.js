let btn = document.querySelector('button');

btn.addEventListener("click", function () {

    let h1 = document.querySelector('h1');
    let randomColor = getRandomColor();
    h1.innerText = randomColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor

    console.log("Ramdom Color Updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `RGB(${red}, ${green}, ${blue})`;
    return color;
}


let btn1 = document.querySelector('button')
let h11 = document.querySelector('h1')
let div1 = document.querySelector('div')

function changeColor() {
    console.dir(this.innerText)
    this.style.backgroundColor = "blue";
}

btn1.addEventListener("click", changeColor)
h11.addEventListener("click", changeColor)
div1.addEventListener("click", changeColor)