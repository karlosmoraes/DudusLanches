// document.querySelector(".class")
// document.querySelector("#id")
// document.querySelector("tag")

// Lanches
const XSalada = document.querySelector("#XSalada")
const XBurguer = document.querySelector("#XBurguer")
const XEgg = document.querySelector("#XEgg")
const XDaCasa = document.querySelector("#DaCasa")

// Acompanhamentos
const Hamburguer = document.querySelector("#Hamburguer")
const Salada = document.querySelector("#Salada")
const Tomate = document.querySelector("#Tomate")
const Bacon = document.querySelector("#Bacon")
const Cheddar = document.querySelector("#Cheddar")
const Cebola = document.querySelector("#Cebola")

//Bebidas
const CocaCola = document.querySelector("#CocaCola")
const Agua = document.querySelector("#Agua")

// Parte lógica
const ResultadoH1 = document.querySelector("#result")
const img = document.querySelector("#img")
let total = 0       

let selecionados = []

function finalizar(){

    total = 0;
    selecionados = []

    if(XSalada.checked){

        total = total + 12;

        // varios metodos pro array, push() adiciona no final, pop() adiciona no cmc
        selecionados.push({nome: "X-Salada", preco: 12})

    }else if(XBurguer.checked){

        total = total + 20;

        selecionados.push({nome: "X-Burguer", preco: 20})

    }else if(XEgg.checked){

        total = total + 30;

        selecionados.push({nome: "X-Egg", preco: 30})

    }else{

        total = total + 60;

        selecionados.push({nome: "X-DaCasa", preco: 60})

    }

    if(Hamburguer.checked){

        total = total + 5;

        selecionados.push({nome: "Hamburguer", preco: 5})

    }

    if(Salada.checked){

        total = total + 2;

        selecionados.push({nome: "Salada", preco: 2})

    }

    if(Tomate.checked){

        total = total + 1;

        selecionados.push({nome: "Tomate", preco: 1})

    }

    if(Bacon.checked){

        total = total + 3;

        selecionados.push({nome: "Bacon", preco: 3})

    }

    if(Cheddar.checked){

        total = total + 6;

        selecionados.push({nome: "Cheddar", preco: 6})

    }

    if(Cebola.checked){

        total = total + 3;

        selecionados.push({nome: "Cebola", preco: 3})

    }

    if(CocaCola.checked){

        total = total + 8;

        selecionados.push({nome: "Coca-Cola", preco: 8})

    }

    if(Agua.checked){

        total = total + 6;

        selecionados.push({nome: "Água", preco: 6})

    }

    ResultadoH1.innerText = `Preço: R$ ${total}`
    
    let selecionadosString = JSON.stringify(selecionados)
    
    setTimeout(() => {

        window.location.href = "../compra.html?selecionados="+selecionadosString

    }, 2500)

}