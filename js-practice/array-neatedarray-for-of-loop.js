// llops with Array

let a = ["Dinesh",23,"male"]

for (let i = 0; i<a.length; i++){
    console.log(i);
}


// loops with neated array 

let b = [[vinit = 100],[age = 23],[gender = "male"]]

for (let i = 0; i<b.length; i++){
    console.log(`list ${i}`);
    for (let j = 0; j<b[i].length; j++){
        console.log(a[i][j])
    }
}

//  For of Loop

for (a of a){
    console.log(a, a[i]);
}

for (char of "Apana" ){
    console.log(char)
}