const input = document.querySelector(`#name-input`);
const nameSpan = document.querySelector(`#name-output`)

input.addEventListener(`input`, addName)

function addName(){
    nameSpan.textContent = input.value.trim();

    if(nameSpan.textContent === ``){
        nameSpan.textContent = `Anonymous`;
    }
}