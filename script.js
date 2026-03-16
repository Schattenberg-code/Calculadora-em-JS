let calculo = " ";
let display = document.querySelector("h4");

function atualizarDisplay(){
    display.textContent = calculo;
}

function adicionarnumero(numero){
    calculo += numero;
    atualizarDisplay();
}

function adicionarsimbolo(simbolo){
    calculo += simbolo;
    atualizarDisplay();
}

function calcular(){
    let conta = calculo.replace('x', '*');
    calculo = eval(conta);
    atualizarDisplay();
}