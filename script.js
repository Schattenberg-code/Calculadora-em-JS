let calculo = "0";
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
    if (symbol == false){
       if (simbolo == 'x' || simbolo == '/'){
          calculo += simbolo;
        atualizarDisplay();  
        }else{
           calculo += simbolo;
        atualizarDisplay(); 
        symbol = true; 
        } 
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
            calculo = resultado.toString().replace('.', ',');
            atualizarDisplay();
        }
        
    }

    verifica = false;
    symbol = false;
}

function apagar() {

    if (calculo.length > 1){
        calculo = calculo.slice(0, -1);
    } else if(calculo>"0"){
        calculo = "0";
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
