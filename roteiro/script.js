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