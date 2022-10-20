const quizForm = document.querySelector(".quiz");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

const answers = ["90°", "Right angled", "Equilateral", "Three", "one right angle"];

function calculateCorrectAnswerScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === answers[index]){
            score = score + 1;
        } 
            index = index + 1;
    }
    output.innerText = "Your score is " + score;
}

btn.addEventListener("click", calculateCorrectAnswerScore);