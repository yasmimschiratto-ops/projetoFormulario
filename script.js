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

adcionarNatela(carro);

document.querySelector("form").reset();
}