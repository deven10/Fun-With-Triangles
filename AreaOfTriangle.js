const sides = document.querySelectorAll(".side");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

// area of triangle = 1/2 (base * height);

function calculateSumOfBaseAndHeight(a,b){
    const sum = a * b;
    return sum;
}

function calculateAreaOfTriangle(){
    if(Number(sides[0].value) > 0 && Number(sides[1].value > 0)){
        const sumOfBaseAndHeight = calculateSumOfBaseAndHeight(Number(sides[0].value), Number(sides[1].value));
        const AreaOfTriangle = 0.5 * sumOfBaseAndHeight;
        output.innerHTML = `The Area of Triangle is ${AreaOfTriangle}`; 
    } else {
        output.innerHTML = `Please Enter Valid Inputs`; 
    }
}

btn.addEventListener("click", calculateAreaOfTriangle);