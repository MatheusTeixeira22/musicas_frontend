const urlBackend = "http://localhost:3000"

const inputTitulo = document.querySelector('#titulo')
const inputArtista = document.querySelector('#artista')
const inputGenero = document.querySelector('#genero')
const inputAno = document.querySelector('#ano')
const inputDuracao = document.querySelector('#duracao')

const botaoCadastrar = document.querySelector('#botaoCadastrar')

botaoCadastrar.addEventListener('click', cadastrarMusica)

async function cadastrarMusica() {
   
    if (!inputTitulo.value || !inputArtista.value || !inputGenero.value || !inputAno.value || !inputDuracao.value) {
        alert("Preencha todos os campos!");
        return
    }

    const musica = {
        titulo: inputTitulo.value,
        artista: inputArtista.value,
        genero: inputGenero.value,
        ano: inputAno.valueAsNumber,
        duracao: inputDuracao.valueAsNumber
    };

  
    const resposta = await fetch(`${urlBackend}/cadastrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(musica)
    })

    
    const dados = await resposta.json()
    alert(dados.mensagem)

    
    window.location.href = "index.html"
}
