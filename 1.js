const button=document.querySelectorAll("button");

const inputField=document.getElementById("result")
const secondo=document.querySelector("#Second");
let isRed = false;
secondo.addEventListener("click", ()=>{

    if (isRed) {
        secondo.style.backgroundColor = "#ddd"; 
        secondo.style.color = "#333"; 
        //changing buttons
        document.getElementById("sq").innerHTML="X<sup>2</sup>";
        document.getElementById("3root").innerHTML="<sup>2</sup>&#x221A;x"
        document.getElementById("yroot").innerHTML="X<sup><sup>y</sup></sup>"
        document.getElementById("xpowerx").innerHTML="10<sup><sup>x</sup></sup>"
        document.getElementById("log").innerHTML="log<sup></sup>"
        document.getElementById("ln").innerHTML="ln"
    } else {
        secondo.style.backgroundColor = "#212121";
        secondo.style.color = "#fff";
        document.getElementById("sq").innerHTML="X<sup>3</sup>";
        document.getElementById("3root").innerHTML="<sup>3</sup>&#x221A;x"
        document.getElementById("yroot").innerHTML="<sup>y</sup>&#x221A;x"
        document.getElementById("xpowerx").innerHTML="2<sup><sup>x</sup></sup>"
        document.getElementById("log").innerHTML="log<sub><sub>y</sub></sub><sub>X</sub>"
        document.getElementById("ln").innerHTML="e<sup><sup>x</sup></sup>"
    }
    isRed = !isRed;

});

button.forEach((b)=>{
    b.addEventListener("click", ()=>{
        const buttonVal=b.textContent;
        if(buttonVal==="C"){
            clearReasult();
        }
        else if(buttonVal==="="){
            calculateResult();
        }
        else {
            appendValue(buttonVal);
        }
    })
})

function clearReasult(){
    inputField.value="";
}

function calculateResult(){
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = 'Error';
    }
}

function appendValue(buttonVal) {
    if(buttonVal==="2nd"){
        // inputField.value += buttonVal;
    }
    else if(buttonVal==="X2"){
        inputField.value = square();
    }
    else if(buttonVal==="2√x"){
        if(isNaN(Math.sqrt(parseInt(inputField.value)))){
            inputField.value+="Error!";
        }
        else{
            inputField.value = squareRoot();
        }
    }
    else if(buttonVal==="Xy"){
        if(isNaN(Math.pow(parseInt(inputField.value)),y)){
            inputField.value+="Error!";
        }
    }
    else{
        inputField.value += buttonVal;
    }
}

function square(){
    return Math.pow(parseInt(inputField.value), 2);
}

function squareRoot(){
        return Math.sqrt(parseInt(inputField.value));
}



