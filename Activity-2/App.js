let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let li = document.querySelector('li')
let input = document.querySelector('input')


btn.addEventListener("click", function () {
    let item = document.createElement("li")
    item.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete"
    delbtn.classList.add("delete");

    item.appendChild(delbtn)
    ul.appendChild(item)
    input.value = "";
});

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns) {
    delBtn.addEventListener("click", function() {
        let par = this.parentElement;
        console.log(par)
        par.remove();
    })
}