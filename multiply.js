const inputsAns = document.querySelector(".ansInputs");
const inputsRandom = document.querySelector(".randomInputs");
const nextBtn = document.querySelector(".next")
nextBtn.addEventListener("click", nextFunc);

let inputRandomA;
let inputRandomB;

function multiply(){
    inputRandomA = Math.floor(Math.random() * 12 + 1);
    inputRandomB = Math.floor(Math.random() * 12 + 1);
    inputsRandom.value = `${inputRandomA} X ${inputRandomB}`;
}

multiply();

function nextFunc(){
    if (parseInt(inputsAns.value) === (inputRandomA * inputRandomB)){
        alert("Ma Shaa Allah")
        multiply();
        inputsAns.value = " ";
    }else {
        alert("You can do Better")
    }

}
