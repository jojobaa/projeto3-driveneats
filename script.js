function selecionar(elemento) {
    const selecao = document.querySelector(".comida");
    if (selecao !== null) {
        selecao.classList.remove("comida");
    }
    elemento.classList.add("comida");
    botaoSelecionado()
}
function seleciona(elemento) {
    const selecao = document.querySelector(".bebida");
    if (selecao !== null) {
        selecao.classList.remove("bebida");
    }
    elemento.classList.add("bebida");
    botaoSelecionado()
}
function selecionado(elemento) {
    const selecao = document.querySelector(".sobremesa");
    if (selecao !== null) {
        selecao.classList.remove("sobremesa");
    }
    elemento.classList.add("sobremesa");
    botaoSelecionado()
}
function botaoSelecionado() {
    const selecionaComida = document.querySelector(".comida");
    const selecionaBebida = document.querySelector(".bebida");
    const selecionaSobremesa = document.querySelector(".sobremesa");
    const mudaFundo = document.querySelector(".backgroungTxt");
    const mudaTexto = document.querySelector(".txtBarraDeBaixo");
    if ((selecionaComida !== null) && (selecionaBebida !== null) && (selecionaSobremesa !== null)) {
        mudaFundo.classList.add("barradebaixoSeleciona");     
        mudaTexto.firstElementChild.innerHTML = "Fechar pedido";
        console.log(mudaTexto.firstElementChild)
    }
}
 function fazerPedido(clica) {
    const numeroPedido = document.querySelector(".whatsapp");
    if (numeroPedido !== null) {
         numeroPedido.classList.remove("whatsapp");
    }
     clica.classList.add("whatsapp");
    botaoSelecionado()
 }