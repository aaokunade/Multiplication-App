const inputsAns = document.querySelector(".ansInputs");
const inputsRandom = document.querySelector(".randomInputs");
const nextBtn = document.querySelector(".next")
nextBtn.addEventListener("click", nextFunc);
const delBtn = document.querySelector(".del")
delBtn.addEventListener("click", delFunc);

let inputBtn = document.querySelectorAll(".inputs");

    inputBtn.forEach(function(btn){
        btn.addEventListener("click", function(){
            inputsAns.value = parseInt(`${inputsAns.value}${btn.value}`);
            // console.log(inputsAns.value);
        });
    })

let inputRandomA;
let inputRandomB;



let outputs1 = [
    "Brilliant! Maa shaa Allah!",
    "Amazing! Baaroka Allaah feek!",
    "You are doing Great!",
    "You are a genius, well-done!",
]

function outputs1Funct(arr){
    outputs = Math.floor(Math.random() * outputs1.length);
    return arr[outputs]
}


let outputs2 = [
    "Oops, You can do better",
    "Try again",
    "You are close"
]

function outputs2Funct(arr){
    outputs = Math.floor(Math.random() * outputs2.length);
    return arr[outputs]
}


function multiply(){
    inputRandomA = Math.floor(Math.random() * 12 + 1);
    inputRandomB = Math.floor(Math.random() * 12 + 1);
    inputsRandom.value = `${inputRandomA} X ${inputRandomB}`;
    // inputsRandom.value = inputRandomA * inputRandomB;
}

multiply();

function nextFunc(){
    if (parseInt(inputsAns.value) === (inputRandomA * inputRandomB)){
        alert(outputs1Funct(outputs1));
        multiply();
        inputsAns.value = " ";
    }else {
        alert(outputs2Funct(outputs2))
    }

}

function delFunc(btn){    
        inputsAns.value = inputsAns.value.substring(0,inputsAns.value.length - 1);
        console.log(inputsAns.value);
}
