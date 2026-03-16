let calculo = " ";
let display = document.querySelector("h4");
let verifica = true;
let symbol = false;

function atualizarDisplay(){
    display.textContent = calculo;
    display.scrollLeft = display.scrollWidth;
}

function adicionarnumero(numero){
    if (verifica == true){
     calculo += numero;
    atualizarDisplay();   
    }
}

function adicionarsimbolo(simbolo){
    if (symbol == false){
      calculo += simbolo;
    atualizarDisplay();
    symbol = true;
    verifica = true;  
    }
    
}

function calcular(){

        let conta = calculo
        .replaceAll('x', '*')
        .replaceAll(',', '.');

    if (verifica == true){
        calculo = eval(conta);
        atualizarDisplay();  
    }
    verifica = false;
    symbol = false;
}

function apagar(){
    calculo = calculo.slice(0, -1);
    atualizarDisplay();
    symbol = false;
}

function virgula(){
    calculo += ","
    atualizarDisplay();
}