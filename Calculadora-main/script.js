function somar() {

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 + n2;

    document.getElementById("resultado").innerHTML = resultado;
}

function subtrair() {

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 - n2;

    document.getElementById("resultado").innerHTML = resultado;
}

function multiplicar() {

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 * n2;

    document.getElementById("resultado").innerHTML = resultado;
}

function dividir() {

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 / n2;

    document.getElementById("resultado").innerHTML = resultado;
}