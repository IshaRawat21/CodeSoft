let calculation = '';

function updateCalculation(value){
    calculation+=value;
    displayCalc();
}

function displayCalc(){
    document.querySelector('.js-p').innerHTML = calculation;
}

document.querySelector('.btn-clear').addEventListener('click',()=>{
    calculation='';
    displayCalc();
})

const value = document.querySelectorAll('.btn').innerHTML;
document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
        updateCalculation(button.innerHTML);
    });
});
