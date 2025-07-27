let p = document.createElement('p')
p.innerText = 'Hy I am Red!'
document.querySelector('body').append(p)

p.classList.add('red')

let h3 = document.createElement('h3');
h3.innerText = 'Hy i am blue h3!'
document.querySelector('body').append(h3)

h3.classList.add('blue')



let div = document.createElement('div')
let h1 = document.createElement('h1');
let p1 = document.createElement('p')

h1.innerText = "I'm in a Div"
p1.innerText = 'ME TOO!'

div.append(h1);
div.append(p1)
div.classList.add('divStyle')

document.querySelector('body').prepend(div)