let calification;
let score = document.querySelector("#numberScore");
let submit = document.querySelector("#submit");
let firstCard = document.querySelector("#component");
let secondCard = document.querySelector("#component2");
function rate(num){
    calification = num.id
    score.innerHTML = calification
    submit.addEventListener("click", ()=>{
        firstCard.style.display = "none"
        secondCard.style.display = "block"
        })
}