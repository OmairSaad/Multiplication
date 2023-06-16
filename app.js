let num1= Math.round(Math.random()*10);
let num2 = Math.round(Math.random()*20);
let h1= document.getElementById("h1");
h1.innerHTML=`What is ${num1} multiply by ${num2}?`;
let submit = document.getElementById("form");
const inputE = document.getElementById("input");
let correctans = num1*num2;
let score=JSON.parse(localStorage.getItem("score"));
if (!score){
    score=0;
}
document.getElementById("score").innerHTML=`Score: ${score}`
submit.addEventListener("submit", ()=>{
    const ans = Number(inputE.value);
    if (ans==correctans){
        score++;
        update();
    }else{
        score--;
        update();
    }
})

function update(){
 localStorage.setItem("score",JSON.stringify(score));
}