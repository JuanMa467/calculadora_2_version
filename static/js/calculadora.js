function verificarNumero(x) {
    if (!x) {
        alert("Ingrese un número");
        return false;
    }
    for (let i = 0; i < x.length; i++) {
        if (!x[i].match(/[0-9+-\/*\s\**^%]/)) {
            alert("Solo se deben ingresar números, +, -, *, /,%");
            return false;
        }
    }
    return x;
}
Total = 0;
function sumarNumero() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "+";
}
function restarNumero() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "-";
}
function multiplicarNumero() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "*";
}
function dividirNumero() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "/";
}
function porcentajeNumero() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "%";
}

function elevarNumero() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "^";
}

function borrarNumero() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value = "";
}
function borrarTodo() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value = "";
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const textAuxiliar = document.getElementById("historial");
    textAuxiliar.innerHTML = "";
    Total = 0;
    $.ajax({
        type: 'POST',
        url: '/AC',
        data: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            resultado.innerHTML = response.respuesta;
            numeroInput.value = "";
        },
        error: function (response) {
            alert("HUBO UN ERROR");
        }
    });
}
function numero1() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "1";
}
function numero2() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "2";
}
function numero3() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "3";
}   
function numero4() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "4";
}
function numero5() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "5";
}
function numero6() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "6";
}
function numero7() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "7";
}
function numero8() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "8";
}
function numero9() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "9";
}
function coma() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += ".";
}
function numero0() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "0";
}
function igual() {
    const numeroInput = document.getElementById("numero");
    const numero = numeroInput.value;
    const nYOperaV = verificarNumero(numero);
    textAuxiliar = document.getElementById("historial");
    if (nYOperaV){
        data={'nYO':nYOperaV,'total':Total}
        $.ajax({
            type: 'POST',
            url: '/resultado',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (response) {
                textAuxiliar.innerHTML += response.respuestaHistorial;
                numeroInput.value = "";
                Total += parseFloat(response.respuestaDeTAct);
                resultado.innerHTML = Total;
                alert(response.respuestaDeTAct);
            },
            error: function (response) {
                alert("HUBO UN ERROR");
            }
        });
    }
}