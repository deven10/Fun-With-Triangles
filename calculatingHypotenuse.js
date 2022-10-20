const sides = document.querySelectorAll(".triangle-side");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const firstSide = document.getElementById("first-side");
const secondSide = document.getElementById("second-side");

function calculateSumOfSquares(a,b){
    const sum = a*a + b*b;
    return sum;
}
console.log("lets go")

function calculateHypotenuse(){
    if((Number(firstSide.value)) > 0 && (Number(secondSide.value) > 0)){
        if(Number(firstSide.value) < 0 || Number(secondSide.value < 0)){
            console.log("working");
            output.innerText = "Please Enter Valid Inputs!";
        } 
        else{
            console.log("not negative");
            const sumOfSquares = calculateSumOfSquares(Number(firstSide.value), Number(secondSide.value));
            const lengthOfHypotenuse = (Math.sqrt(sumOfSquares)).toFixed(2);
            output.innerText = "The Lenght of the Hypotenuse is " + lengthOfHypotenuse;
        }
    } else {
        output.innerText = "Please Enter Valid Inputs";
    }
    
}

btn.addEventListener("click", calculateHypotenuse);