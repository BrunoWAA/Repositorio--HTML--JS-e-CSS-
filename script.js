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
    document.getElementById("btn-curriculo").addEventListener("click", function() 
    {
        exibirHTML("Curriculo/curriculo.html", "div-principal");
    });

    document.getElementById("btn-home").addEventListener("click", function() 
    {
        document.location.reload(true);
    });

    document.getElementById("btn-Loja").addEventListener("click", function() 
    {
        exibirHTML("Loja de Carros/veiculos.html", "div-principal");
    });

}
  