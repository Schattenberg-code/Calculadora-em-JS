let calculo = " ";
let texto = document.querySelector("#display h4");
let display = document.querySelector("#display");
let verifica = true;
let symbol = false;

function atualizarDisplay(){
    texto.textContent = calculo;
    display.scrollLeft = display.scrollWidth;
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

    if(calculo.includes("/0")){
        calculo = "Erro impossivel dividir por 0"
        atualizarDisplay();
        return;
    }

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

function reset(){
    calculo = "0";
    atualizarDisplay();
}