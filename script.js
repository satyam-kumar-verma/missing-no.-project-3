
let firstNumber = document.getElementById("firstNumber");
let inputNumber = document.getElementById("inputNumber");
let answerNumber = document.getElementById("answerNumber");
let statuBar = document.getElementById("statusBar");



let checkBtn = document.getElementById("checkBtn");
let nextBtn = document.getElementById("nextBtn");
let saveBtn = document.getElementById("saveBtn");

let num1=0;
let num2=0;
let ansVal=0

let saveClickCount = 0 ;
let saveClickCountMoreThan1 = 0;

let clearBtn = document.getElementById("clearBtn");
let historyContainer = document.getElementById("historyContainer");

let historyElementContainer = document.createElement("div");


function generateNumbers(){
    num1=Math.ceil(Math.random()*100);
    firstNumber.textContent=num1;

    num2=Math.ceil(Math.random()*100);

    ansVal = num1 + num2;
    answerNumber.textContent=ansVal;
}

checkBtn.onclick= function(){
    let inputValue = inputNumber.value;
    if(inputValue === ""){
        alert("Enter Valid Input");
        return true;
    }

    inputValue=parseInt(inputValue);

    if(inputValue === num2){
        statusBar.textContent="Congratulation! Correct asnwer";
        statuBar.classList.remove("status-wrong-style");
    }
    else{
        statusBar.textContent="Wrong asnwer! Please Try Again";
        statuBar.classList.add("status-wrong-style");
    }
    
}

nextBtn.onclick = function(){
    generateNumbers();
    inputNumber.value="";

    saveClickCount = 0;
    saveClickCountMoreThan1 = 0;

}


saveBtn.onclick=function(){

    saveClickCountMoreThan1 = saveClickCountMoreThan1+1;

    if(saveClickCount===0){

        historyContainer.appendChild(historyElementContainer);

        let historyElement= document.createElement("h1");
        historyElement.textContent = num1 + " + " + num2 +" = " + ansVal;
        historyElement.classList.add("text-center");
        historyElementContainer.appendChild(historyElement);

        saveClickCount =1;
    }

    if(saveClickCountMoreThan1 > 1){
        alert("You have already Saved this sum please click next to save another sum");
    }
}

clearBtn.onclick = function(){

    historyElementContainer.innerHTML="";
    historyContainer.removeChild(historyElementContainer);
}
generateNumbers();