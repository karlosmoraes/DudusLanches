let params = new URLSearchParams(document.location.search);
const list = document.querySelector("#lista")
const precoh3 = document.querySelector("#preco")
let preco = 0;
let selecionados = []

function receber(){
    
    preco = 0;
    selecionados = params.get("selecionados")
    selecionados = JSON.parse(selecionados)

    // [ valor, valor, valor ]
    selecionados.map((lanche, index) => {

        list.innerHTML += `

            <li> <p> ${index+1} - ${lanche.nome} - R$${lanche.preco} </p> <img src='./Imagens/Trash-2 (2).svg' onclick="apagar(${index})"> </li>

        `

        preco = preco + lanche.preco 

    })

    precoh3.innerText = `Total: R$${preco}`

}

function apagar(index){

    preco = 0;

    selecionados.splice(index, 1)
    list.innerHTML = ""

    selecionados.map((lanche, index) => {

        list.innerHTML += `

            <li> <p> ${index+1} - ${lanche.nome} - R$${lanche.preco} </p> <img src='./Imagens/Trash-2 (2).svg' onclick="apagar(${index})"> </li>

        `

        preco = preco + lanche.preco 

    })

    precoh3.innerText = `Total: R$${preco}`

}

function finalizarCompra(){

    alert(`Compra Finalizada! Preço Final: R$${preco}`)
    window.location.href='./index.html'

}

receber()