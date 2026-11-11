
console.log("Provador Digital iniciado!");

const listaRoupas = document.querySelector(".lista-roupas");
const fotoRoupa = document.getElementById("foto-roupa");
const botao = document.getElementById("abrir-formulario");
const formulario = document.getElementById("form-roupa");

// Abrir e fechar formulário
botao.addEventListener("click", function() {
    formulario.hidden = !formulario.hidden;
});

// Cadastrar roupa
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const categoria = document.getElementById("categoria").value;
    const cor = document.getElementById("cor").value;
    const arquivo = fotoRoupa.files[0];

    console.log(categoria);
    console.log(cor);
    console.log(arquivo);

    // Criar o cartão
    const cartao = document.createElement("div");
    cartao.classList.add("card-roupa");

    // Criar a imagem
    const imagem = document.createElement("img");
    imagem.src = URL.createObjectURL(arquivo);

    // Criar categoria
    const titulo = document.createElement("h3");
    titulo.textContent = categoria;

    // Criar cor
    const textoCor = document.createElement("p");
    textoCor.textContent = "Cor: " + cor;

    // Adicionar elementos ao cartão
    cartao.appendChild(imagem);
    cartao.appendChild(titulo);
    cartao.appendChild(textoCor);

    // Mostrar no guarda-roupa
    listaRoupas.appendChild(cartao);

    // Limpar formulário
    formulario.reset();
    formulario.hidden = true;
});
