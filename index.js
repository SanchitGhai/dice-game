let rand1 = Math.floor(Math.random() * 6)+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+rand1+".png");

let rand2 = Math.floor(Math.random() * 6)+1;
document.querySelector(".img2").setAttribute("src","./images/dice"+rand2+".png");

let score1 = document.querySelector(".img1").getAttribute("src").slice(-5,-4);
let score2 = document.querySelector(".img2").getAttribute("src").slice(-5,-4);
if(score1 > score2) {
    document.querySelector(".container h1").textContent = "🚩Player 1 Wins"
} else if(score2 > score1) {
    document.querySelector(".container h1").textContent = "Player 2 Wins🚩"
} else {
    document.querySelector(".container h1").textContent = "Draw 🎌"
}