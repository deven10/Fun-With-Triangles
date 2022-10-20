const inputs = document.querySelectorAll(".input-angle");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function calculateSumofAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    if(Number(inputs[0].value) > 0 &&  Number(inputs[1].value) > 0 && Number(inputs[2].value) > 0){
        const sumOfAngles = calculateSumofAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        if(sumOfAngles === 180){
            output.innerText = "Yay, The angles form a triangle";
        } else{
            output.innerText = "Oh no, The angles don't form a triangle";
        }
    } else {
        output.innerText = "Please Enter Valid Inputs";
    }
    
}

btn.addEventListener("click", isTriangle);