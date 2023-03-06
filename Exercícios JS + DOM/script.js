



function limparB (){
    document.getElementById("numeroA").value = ""
    document.getElementById("numeroB").value = ""
    document.getElementById("numeroC").value = ""
    document.querySelector(".resultado").innerHTML = ""

}


function calculadora1()
{
    let contadorA = Number (document.getElementById("numeroAA").value)
    let contadorB = Number (document.getElementById("numeroBB").value)
    let contadorC = Number (document.getElementById("numeroCC").value)


    let soma =(contadorA) +(contadorB) + (contadorC);
    document.querySelector(".resultado1").innerHTML = "A soma dos valores é: " + soma;

}

function calculadora2()
{
    let contadorA = Number (document.getElementById("numeroA").value)
    let contadorB = Number (document.getElementById("numeroB").value)
    let contadorC = Number (document.getElementById("numeroC").value)


    let soma =(contadorA) +(contadorB) + (contadorC);
    document.querySelector(".resultado2").innerHTML = "A soma dos valores é: " + soma;

}
