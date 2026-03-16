let calculo = " ";
let display = document.querySelector("h4");
let verifica = true;

function atualizarDisplay(){
    display.textContent = calculo;
}

function adicionarnumero(numero){
    if (verifica == true){
     calculo += numero;
    atualizarDisplay();   
    }
}

function adicionarsimbolo(simbolo){
    calculo += simbolo;
    atualizarDisplay();
    verifica = true;
}

function calcular(){
    let conta = calculo.replace('x','*');
    if (verifica == true){
        calculo = eval(conta);
        atualizarDisplay();  
    }
    verifica = false;
    
}