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
            exibirHTML("Curriculo/curriculo.html", "div-principal")
            
        }
        else if(select == "Loja")
        {
            exibirHTML("Loja de Carros/veiculos.html", "div-principal");
        }
        else if(select == "Form")
        {
            exibirHTML("formulario/formulario.html", "div-principal");
        }
        else if(select == "Api")
        {
            exibirHTML("Api/api.html", "div-principal");
        }

    });
}
document.getElementById("menu-aula-2").addEventListener("change", function() 
{
    select = document.getElementById("menu-aula-2").value
    if(select == "Curriculo")
    {
        exibirHTML("Curriculo/curriculo.html", "div-principal")
        
    }
    else if(select == "Loja")
    {
        exibirHTML("Loja de Carros/veiculos.html", "div-principal");
    }

});
