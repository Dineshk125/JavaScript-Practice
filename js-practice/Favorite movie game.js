let favorite_move  = "Avatar";
let guess = prompt("Guess My Favorite Movie.")

while ((guess != favorite_move) && (guess != "q")){
    console.log("Wrong Movie Name Guess, Please Try Again")
    guess = prompt("Wrong Movie Name Guess, Please Try Again")
}

if (guess == favorite_move){
    console.log("Congrats, Good Job")
}
else {
    console.log("You Quite!")
}