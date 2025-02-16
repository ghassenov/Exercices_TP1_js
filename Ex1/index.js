const min = 1;
const max1 = 5;
const max2 = 10;
const max3 = 15;

const number1 = Math.floor(Math.random()*(max1-min+1));
const number2 = Math.floor(Math.random()*(max2-min+1));
const number3 = Math.floor(Math.random()*(max3-min+1));
let number;

let attempts = 2;
let test=true;

const d1 = document.getElementById("dif1");
const d2 = document.getElementById("dif1");
const d3 = document.getElementById("dif1");

if(d1.checked){
    number = number1;
}
else if(d2.checked){
    number = number2;
}
else{
    number = number3;
}

window.alert("welcome you have 3 guesses for each difficulty");
function game(){
    let x = window.prompt(`guess the number !`);
    x=Number(x);
    while(test && attempts !=0){
        if(x == number){
            window.prompt("you guessed correctly!");
            test = false;
        }
        else{
            window.prompt(`wrong guess! you have ${attempts} more remaining guesses`);
            attempts--;
        }
    }
    if(attempts == 0){
        window.alert(`sry you didn't guess the number ${number} !`);
    }
}