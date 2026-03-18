let calculo = "0";
let texto = document.querySelector("#display h4");
let display = document.querySelector("#display");
let verifica = true;
let historico = "0";

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

    if (!calculo.includes('x') && !calculo.includes('/')) {
        if (!calculo.endsWith('+') && !calculo.endsWith('-'))
            if (simbolo == 'x' || simbolo == '/') {
                calculo += simbolo;
                atualizarDisplay();
            }
    }
    if (simbolo == '+' || simbolo == '-') {
        if (!calculo.endsWith('+') && !calculo.endsWith('-')) {
            calculo += simbolo;
            atualizarDisplay();
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
        } else {
            calculo = resultado.toString().replace('.', ',');
            atualizarDisplay();
            historico = calculo;
        }

    }

    verifica = false;
}

function apagar() {
    textohis.style.opacity = 0;

    if (calculo.length > 1) {
        calculo = calculo.slice(0, -1);
    } else if (calculo > "0" || calculo == "-") {
        calculo = "0";
    }

    atualizarDisplay();
}

function virgula() {

    textohis.style.opacity = 0;
    if (!calculo.includes(',')) {
        calculo += ","
        atualizarDisplay();

    } else if (calculo.includes('+') || calculo.includes('-')) {
        calculo += ","
        atualizarDisplay();

    }

}

function reset() {
    textohis.style.opacity = 0;

    calculo = "0";
    atualizarDisplay();
}

function historicos() {
    textohis.style.opacity = 1;
    calculo = historico;
    atualizarDisplay();
}

window.addEventListener('keydown', function (teclado) {
    const tecla = teclado.key;

    if (!isNaN(tecla)) {
        adicionarnumero(tecla);
    }
    if (['+', '-', '/', '*'].includes(tecla)) {
        let sinal = (tecla == '*') ? 'x' : tecla;
        adicionarsimbolo(sinal);
    }

    if (tecla == ',' || tecla == '.') {
        virgula();
    }

    if (tecla == 'Enter' || tecla == '=') {
        this.event.preventDefault();
        calcular();
    }

    if (tecla == 'Backspace') {
        apagar();
    }
}
);


