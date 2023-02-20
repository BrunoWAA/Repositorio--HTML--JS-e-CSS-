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
}
  