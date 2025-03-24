const display = document.getElementById("display");

function adicionarAoDisplay(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function calcular() {
    try {
        display.value = eval(display.value); 
    } catch(error) {
        display.value = "Erro";
    }
       
}