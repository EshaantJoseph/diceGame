var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomdice = "dice" + randomNumber1 + ".png";

var randomimage = "images/" + randomdice; 

document.querySelectorAll("img")[0].setAttribute("src" , randomimage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomdice2 = "dice" + randomNumber2 + ".png";

var randomimage2 = "images/" + randomdice2; 

document.querySelectorAll("img")[1].setAttribute("src" , randomimage2);

if(randomNumber1 > randomNumber2){
 document.querySelector("h1").innerHTML = "Player 1 WON!!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 WON!!"
}
else{
    document.querySelector("h1").innerHTML = "🏳Draw!!"
}

