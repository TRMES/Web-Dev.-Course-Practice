const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);
let image1Path = "./images/dice"+randomNumber1+".png";
let image2Path = "./images/dice"+randomNumber2+".png";
let image1= document.querySelectorAll("img")[0].setAttribute("src", image1Path);
let image2= document.querySelectorAll("img")[1].setAttribute("src", image2Path);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML = "DRAW!"
}