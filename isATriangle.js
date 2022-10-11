const inputs = document.querySelectorAll(".input-angle");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function calculateSumofAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumofAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        output.innerHTML = "Yay, The Angles form a triangle";
    } else{
        output.innerHTML = "Oh no, The Angles don't form a triangle";
    }
}

btn.addEventListener("click", isTriangle);