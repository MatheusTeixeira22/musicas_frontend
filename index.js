const urlBackend = "http://localhost:3000"

const listaMusicas = document.querySelector('#lista-musicas')

async function buscarMusicas() {
    
    const resposta = await fetch(urlBackend)
    
   
    const musicas = await resposta.json()
    
    
    musicas.forEach((musica) => {
       
        listaMusicas.innerHTML += `
            <div class="card">
                <h3>${musica.titulo}</h3>
                <p>Artista: ${musica.artista}</p>
                <p>Gênero: ${musica.genero}</p>
                <p>Ano: ${musica.ano}</p>
                <p>Duração: ${musica.duracao}</p>
                
                
                <a href="editar.html?id=${musica.id}">Editar</a>
            </div>
        `
    })
}

buscarMusicas()

