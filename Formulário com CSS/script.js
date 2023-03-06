window.onload = function() 
    {
        valores()
    }

function valores ()
{
    const precoInput = document.getElementById("preco");

    precoInput.addEventListener("input", function() {
      // Obtém o valor atual do campo
      let preco = precoInput.value;
    
      // Remove todos os caracteres não numéricos do valor
      preco = preco.replace(/[^0-9]/g, '');
    
      // Formata o valor como moeda usando a função toLocaleString()
      const precoFormatado = (preco / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    
      // Define o valor formatado como o novo valor do campo
      precoInput.value = precoFormatado;
    });
    
}
