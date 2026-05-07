function salvarCarro(event) {
    event.preventDefalt();

    let titulo = document.getElementById('title').value;
    let preco = document.getElementById('preco').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;

    let cambioSelecionado = document.querySelector('input [nome="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id : "não informado";

    let carro = {
        titulo,
        preco,
        marca,
        modelo,
        cambio
    };

    let carros = JSON.parse(localStorage.getItem("carros"))|| [];
carros.push(carro);
localStorage.setItem("carros", JSON.stringify(carros));

adicionarNatela(carro);

document.querySelector("form").reset();
}

function adicionarNatela(carro) {
    let lista = document.getElementById('listaCarros');
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <img src = "https://picsum.photos/250/150?random = ${math.random()}">
    <h3>${carro.titulo}<h3>
    <p><strong>Preço:</strong> R$ ${carro.preco}</p>
    <p><strong>Mrca:</strong> R$ ${carro.marca}</p> 
    <p><strong>Modelo:</strong> R$ ${carro.modelo}</p>
    <p><strong>Câmbio:</strong> R$ ${carro.cambio}</p>

<button onclick = "excluirCarro(${carro.id}">Excluir</button>
`

lista.appendChild(card);

}

window.onload = function () {
  let carros = JSON.parse(localStorage.getItem('carros')) || [];

    carros.forEach(carro => {
        adicionarNaTela(carro);
    });
}

function excluirCarro(id) {
    let carros = JSON.parse(localStorage.getItem('carros')) || [];

    carros = carros.filter(carro => Number(carro.id) !== Number(id));

    localStorage.setItem('carros', JSON.stringify(carros));

    document.getElementById('listaCarros').innerHTML = "";

    carros.forEach(carro => adicionarNaTela(carro));
}