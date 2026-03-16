let calculo = " ";
let texto = document.querySelector("#display h4");
let display = document.querySelector("#display");
let verifica = true;
let symbol = false;

function atualizarDisplay() {
    texto.textContent = calculo;
    display.scrollLeft = display.scrollWidth;
}

function adicionarnumero(numero) {

    if (calculo == "0") {
        calculo = calculo.slice(0, -1);
        verifica = true;
        if (verifica == true) {
            calculo += numero;
            atualizarDisplay();
        }
    } else {
        verifica = true;
        if (verifica == true) {
            calculo += numero;
            atualizarDisplay();
        }
    }
}

function adicionarsimbolo(simbolo) {
    if (symbol == false) {
        calculo += simbolo;
        atualizarDisplay();
        symbol = true;
        verifica = true;
    }

}

function calcular() {

    let conta = calculo
        .replaceAll('x', '*')
        .replaceAll(',', '.');

    if (verifica == true) {
        let resultado = eval(conta);
        if (resultado === Infinity) {
            calculo = "Impossivel dividir por 0"
            atualizarDisplay();
            return;
        }else{
            calculo = resultado.toString().replace(',', '.');
            atualizarDisplay();
        }
        
    }

    verifica = false;
    symbol = false;
}

function apagar() {

    if (calculo.length > 1) {
        calculo = calculo.slice(0, -1);
    } else {
        calculo = "0";
        symbol = true;
        return;
    }
    atualizarDisplay();
    symbol = false;
}

function virgula() {
    calculo += ","
    atualizarDisplay();
}

function reset() {
    calculo = "0";
    atualizarDisplay();
}