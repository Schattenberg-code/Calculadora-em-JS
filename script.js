let calculo = "0";
let texto = document.querySelector("#display h4");
let display = document.querySelector("#display");
let verifica = true;
let symbol = false;
let historico = "0";
let multi = false;
const textohis = document.querySelector("#textohistorico");

function atualizarDisplay() {
    texto.textContent = calculo;
    display.scrollLeft = display.scrollWidth;
}

function adicionarnumero(numero) {
textohis.style.opacity = 0;

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
textohis.style.opacity = 0;

    if (symbol == false){
       if (simbolo == 'x' || simbolo == '/'){
            if(multi == false){
             calculo += simbolo;
        atualizarDisplay();
        multi = true;    
            }
           
        }else{
           calculo += simbolo;
        atualizarDisplay(); 
        symbol = true; 
        } 
    }

}

function calcular() {
textohis.style.opacity = 0;

    let conta = calculo
        .replaceAll('x', '*')
        .replaceAll('÷', '/')
        .replaceAll(',', '.');

    if (verifica == true) {
        let resultado = eval(conta);
        if (resultado === Infinity) {
            calculo = "Impossivel dividir por 0"
            atualizarDisplay();
            return;
        }else{
            calculo = resultado.toString().replace('.', ',');
            atualizarDisplay();
            historico = calculo;      
        }
        
    }

    verifica = false;
    symbol = false;
    multi = false;
}

function apagar() {
textohis.style.opacity = 0;

    if (calculo.length > 1){
        calculo = calculo.slice(0, -1);
    } else if(calculo>"0" || calculo == "-"){
        calculo = "0";
    }

    atualizarDisplay();
    symbol = false;
    multi = false;
}

function virgula() {
    calculo += ","
    atualizarDisplay();
}

function reset() {
    calculo = "0";
    atualizarDisplay();
    symbol = false;
}

function historicos(){
    textohis.style.opacity = 1;
    calculo = historico;
    atualizarDisplay();
}

window.addEventListener('keydown', function(teclado) {
    const tecla = teclado.key;

    if (!isNaN(tecla)){
        adicionarnumero(tecla);
    }
    if (['+', '-' , '/', '*'].includes(tecla)) {
        let sinal = (tecla == '*') ? 'x' : tecla;
        adicionarsimbolo(sinal);
    }

    if (tecla == ',' || tecla == '.'){
        virgula();
    }

    if (tecla == 'Enter' || tecla == '='){
        this.event.preventDefault();
        calcular();
    }

    if (tecla == 'Backspace'){
        apagar();
    }
}
);


