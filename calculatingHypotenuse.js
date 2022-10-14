const sides = document.querySelectorAll(".triangle-side");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sum = a*a + b*b;
    return sum;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = (Math.sqrt(sumOfSquares)).toFixed(2);
    output.innerText = "The Lenght of the Hypotenuse is " + lengthOfHypotenuse;
}

btn.addEventListener("click", calculateHypotenuse);