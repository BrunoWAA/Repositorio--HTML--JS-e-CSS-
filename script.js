window.onload = function() 
    {
        acoesBotoes()
    }

function exibirHTML(url, div) 
{
    document.getElementById(div).innerHTML = '<iframe src="' + url + '"></iframe>';
}



function acoesBotoes ()
{
    document.getElementById("btn-home").addEventListener("click", function() 
    {
        document.location.reload(true);
    });

    document.getElementById("menu-aula-1").addEventListener("change", function() 
    {
        select = document.getElementById("menu-aula-1").value
        if(select == "Curriculo")
        {
            console.log("entrei no curriculo")
            exibirHTML("Curriculo/curriculo.html", "div-principal")
            
        }
        else if(select == "Loja")
        {
            console.log("entrei na Loja")
            exibirHTML("Loja de Carros/veiculos.html", "div-principal");
        }
        else if(select == "Form")
        {
            console.log("entrei no Form")
            exibirHTML("formulario/formulario.html", "div-principal");
        }
        else if(select == "Api")
        {
            console.log("entrei na API")
            exibirHTML("Api/api.html", "div-principal");
        }

    });
}
  