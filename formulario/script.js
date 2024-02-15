function criaRoteiro(event){
    event.preventDefault();
    var formulario = document.querySelector("form");
    var linkImagem = formulario.querySelector(".linkForm").value;
    var destino = formulario.querySelector(".destinoForm").value;
    var adicionais = formulario.querySelector(".adicionaisForm").value.split(",");
    var pagamentos = formulario.querySelector(".pagamentoForm").value.split(",");
    var preco = formulario.querySelector(".precoForm").value;

    var conteiner = document.querySelector(".conteiner");
    var novoItem = document.createElement("div");
    novoItem.classList.add("item");
    novoItem.innerHTML = `
        <div class="imagem">
            <img src="${linkImagem}">
        </div>
        <div class="destino">
            <h1>${destino}</h1>
        </div>
        <div class="lista">
            <ul>
                ${adicionais.map(adicional => `<li>${adicional}</li>`).join("")}
            </ul>
        </div>
        <div class="preco">
            <h2>${preco}</h2>
        </div>
        <div class="pagamento">
            ${pagamentos.map(pagamento => `<p>${pagamento}</p>`).join("")}
        </div>
        <div>
            <button class="botao", onclick="itens4json(this)"><h3>Comprar</h3></button>
        </div>`;


    conteiner.appendChild(novoItem);
}
function itens4json(botao){
    const item = botao.closest(".item");
    var destino = item.querySelector(".destino").innerText;
    var adicionais = item.querySelector(".lista").innerText;
    var pagamento = item.querySelector(".pagamento").innerText;
    var preco = item.querySelector(".preco").innerText;
    var imagem = item.querySelector(".imagem img").src;
    var objJson = {
        "destino": destino,
        "adicionais": adicionais.trim().replace(/\s+/g, ' '),
        "pagamento": pagamento.trim().replace(/\s+/g, ' '),
        "preco":preco,
        "imagem":imagem
    }
    var obj = JSON.stringify(objJson);
    console.log(JSON.parse(obj));
}