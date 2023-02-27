

function fazPost (url, body)
{
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        alert(this.responseText)
    }

    return request.responseText

}

function cadastrarLivro()
{
    event.preventDefault()
    let url = "https://target-api-simples.cyclic.app/livros"
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value


    body = {
        "title": title,
        "description": description
    }

    fazPost(url, body)

    document.getElementById('title').value = ""
    document.getElementById('description').value = ""
    
}


function buscarLivros() {
    const query = document.getElementById("busca").value;
    const apiUrl = "https://target-api-simples.cyclic.app/livros?search=" + query;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const listaLivros = document.getElementById("lista-livros");
        listaLivros.innerHTML = "";
  
        data.forEach(livro => {
          const itemLista = document.createElement("li");
          itemLista.textContent = livro.title;
          listaLivros.appendChild(itemLista);
        });
      })
      .catch(error => console.error(error));
  }
