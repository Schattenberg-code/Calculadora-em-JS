let calculo = " ";
let display = document.querySelector("h4");
let verifica = true;
let symbol = false;

function atualizarDisplay(){
    display.textContent = calculo;
}

function adicionarnumero(numero){

    if(calculo == "0"){
        calculo = calculo.slice(0, -1);  
        verifica = true;
        if (verifica == true){
        calculo += numero;
        atualizarDisplay();  
        } 
    } else {
        verifica = true;
        if (verifica == true){
        calculo += numero;
        atualizarDisplay();  
        }
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
        calculo = eval(conta).toString();
        atualizarDisplay();  
    }
    verifica = false;
    symbol = false;
}

function apagar(){

    if(calculo.length > 1){
        calculo = calculo.slice(0, -1);  
    } else {
        calculo = "0";
    }
    atualizarDisplay();   
    symbol = false;
}

function virgula(){
    calculo += ","
    atualizarDisplay();
}