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
    conta = calculo.replace(',', '.');
    calculo = eval(conta);
    atualizarDisplay();
}

function apagar(){
    calculo = calculo.slice(0, -1);
    atualizarDisplay();
}

function virgula(){
    calculo += ","
    atualizarDisplay();
}