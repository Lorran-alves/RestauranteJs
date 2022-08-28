
const cardapio = [
    cardapioPastelM = [
        {sabor:'mussarela',preco: 5,},
        {sabor:'presunto',preco: 9,},
        {sabor:'frango',preco: 7, },
        {sabor:'carne',preco: 11,},
        {sabor:'frango-catupiry',preco: 9,},
        {sabor:'vegano',preco: 8,},
        {sabor:'portuguesa',preco: 9,},
    ],
    cardapioPastelG = [
        {sabor:'mussarela',preco: 8,},
        {sabor:'presunto',preco: 17,},
        {sabor:'frango', preco: 12,},        
        {sabor:'carne',preco: 17,},
        {sabor:'frango-catupiry',preco: 14,},
        {sabor:'vegano',preco: 12,},
        {sabor:'portuguesa',preco: 15,},
    ],
    cardapioPizzaM = [
        {sabor:'mussarela',preco: 24,}, 
        {sabor:'milho',preco: 26,},
        {sabor:'presunto',preco: 25,},
        {sabor:'calabresa',preco: 26,},
        {sabor:'frango',preco: 27,},        
        {sabor:'carne',preco: 32,},
        {sabor:'frango-catupiry',preco: 29,},
        {sabor:'portuguesa',preco: 34,},
    ],
    cardapioPizzaG = [
        {sabor:'mussarela',preco: 30,},
        {sabor:'milho',preco: 34,},
        {sabor:'presunto',preco: 32,},
        {sabor:'calabresa',preco: 31,  },
        {sabor:'frango',preco: 34,},        
        {sabor:'carne',preco: 40,},
        {sabor:'frango-catupiry',preco: 36,  },
        {sabor:'portuguesa',preco: 38,},
    ]
]   
let resumoPedido = []
let id = 1
const saboresPizza = document.querySelector('#secaoSaboresPizza')// SEÇÃO DOS SABORES PIZZA
const saboresPastel = document.querySelector('#opcaoPastel')// SEÇÃO DOS SABORES PASTEL
const duoSaborPizza = document.querySelector("#duoSabor")
const umSabor = document.querySelector(".umSabor")
let carrinho = document.querySelector("#carrinho") //AQUI É A SEÇÃO DO CARRINHO
let select1= document.querySelector(".select1") //PRIMERIA METADE
let select2 =document.querySelector(".select2") //SEGUNDA METADE
let select3 =document.querySelector(".select3") // SABOR PIZZA
let select4 =document.querySelector(".select4") //SABOR PASTEL
const menu = document.querySelector("#nav_header")

function mostrarOpcaoPizza(){ 
    saboresPizza.style.display = 'block'
    saboresPastel.style.display = 'none'
    select4.value = ''
}
function mostrarOpcaoPastel(){
    saboresPizza.style.display = 'none'
    saboresPastel.style.display = 'block'
    select1.value = ''
    select2.value = ''
    select3.value = ''
}
function umSaborPizza(){
    umSabor.style.display = "block"
    duoSaborPizza.style.display = "none"   
    select1.value = ''
    select2.value = ''
}
function doisSabores(){
    duoSaborPizza.style.display = "block"
    umSabor.style.display = "none"
    select3.value = ''
}

function mostraMenu(){
   
    if(menu.style.display == 'none'){
       menu.style.display = "inline-flex"
   }else{
       menu.style.display = "none"
   }
}
function verificaTela(){
   let largura = window.innerWidth
   if(largura > 900){
       menu.style.display = "inline-flex"
   }else{
       menu.style.display = "none"
   }
}

//ESSA FUNÇÃO IRÁ RETORNAR O PREÇO DO PEDIDO INDEPENTEMENTE DO SABOR E QUANTIDADE
function verificandoPreco(saborPastel,saborPizza,saborPizza1,saborPizza2,tamanhoIndece,qtd,pedido){
    let precoNesseSabor = ''
    let sabor = ''
    if(saborPastel != ''){precoNesseSabor = cardapio[tamanhoIndece].filter(produto =>  produto.sabor == saborPastel) 
        // sabor = saborPastel
        pedido.sabor = saborPastel
        return Number(precoNesseSabor[0].preco) * Number(qtd)
    }
    if(saborPizza != ''){precoNesseSabor = cardapio[tamanhoIndece].filter(produto =>  produto.sabor == saborPizza)
        pedido.sabor = saborPizza
        return Number(precoNesseSabor[0].preco) * Number(qtd) 
    }
    if(saborPizza1 != '' && saborPizza2 != ''){//AQUI EU RECUPEREI OS DOIS SABORES ESCOLHIODS 
        precoNesseSabor = cardapio[tamanhoIndece].filter(produto =>  produto.sabor == saborPizza1 ||    produto.sabor == saborPizza2)
       .reduce((acumulador, itemAtual) => acumulador + itemAtual.preco,0)  
       pedido.sabor = saborPizza1 +','+ saborPizza2 
       return Number(precoNesseSabor) /2 * Number(qtd)
    } 

   
}
function validaCampos(nome, tipo,qtd,saborPastel,saborPizza,saborPizza1, saborPizza2,unicoSaborRadio,duoSaborRadio){
    if(tipo == "Pizza"){
        if(unicoSaborRadio == true && saborPizza == ''){return false} // TESTANDO SE O VALOR DA PIZZA DE UM SABOR FOI PREENCHIDO
        else if(duoSaborRadio == true ){
            if( saborPizza1 == '' || saborPizza2 == ''|| nome == '' || qtd == '') { return false}
        }// TESTANDO SE O VALOR DA PIZZA DE DOIS SABORES FOI PREENCHIDO
    }
    if( tipo === "Pastel" && saborPastel === '' || nome == '' || qtd == ''){return false}// TESTANDO SE O VALOR DO PASTEL
    return true // CASO TUDO ESTEJA CORRETO A FUNÇÃO IRÁ RETORNAR TRUE E IRÁ CONTINUAR O SEU TRAJETO
}
function verificaTamanho(tamanho,tipo){//VERIFICANDO O TAMANHO PARA SER USADO PARA RECUPERAR O PRECO
  if(tipo == "Pizza"){  return (tamanho == "Media")?2:3}// ultilizei o if ternario para ter um codigo mais limpo
  else{ return(tamanho == "Media")?0:1} 
}

function mostrarCarrinho(){
    carrinho.style.display = "block"   
    tbody = document.querySelector('#tbody')
    tbody.innerText = ''//POR CONTA DO FOR EU PRECISO ZERA O VALOR ANTES PARA QUE NÃO VENHA A REPETIR
    for(i =0 ;i < resumoPedido.length; i++){
        //if(resumoPedido[i] != null){
            console.log("menor")
            let tr = tbody.insertRow()
            td_tipo = tr.insertCell()
            td_sabor = tr.insertCell()
            td_tamanho = tr.insertCell()
            td_qtd = tr.insertCell()
            td_preco = tr.insertCell()
            td_acao = tr.insertCell() 
            // CRIANDO O BOTÃO DE APAGAR O PEDIDO DE FORMA AUTOMATICA
            let lixeiro = document.createElement("img")
            lixeiro.src = 'img/lixo.png'
            td_acao.classList.add("lixo")
            td_acao.setAttribute("onclick",'remover('+resumoPedido[i].id+')')
            td_acao.appendChild(lixeiro)
            // ADICIONANDO OS ITENS NAS LINHAS
            td_tipo.innerText = resumoPedido[i].tipo
            td_sabor.innerText = resumoPedido[i].sabor
            td_tamanho.innerText = resumoPedido[i].tamanho
            td_qtd.innerText = resumoPedido[i].qtd
            td_preco.innerText = resumoPedido[i].preco
      // }
    }
    console.log(resumoPedido)
}
function remover(indece){
    let tbody = document.getElementById('tbody')
     for(i = 0; i < resumoPedido.length ; i++){
         if(resumoPedido[i].id == indece){
             resumoPedido.splice(i,1)
             tbody.deleteRow(i)
         }
     }
}
function finalizar(){

    document.querySelector("#pedidoFinalizado").style.display = "block"
    document.querySelector("#carrinho").style.display = "none"
    // AQUI ESTÁ SENDO RESGATADA A QUANTIDADE DE PASTEIS DO PEDIDO
    let pasteis = resumoPedido.filter(produto => produto.tipo == 'Pastel')
    .reduce((acumulador, itemAtual) => Number(acumulador) + Number(itemAtual.qtd),0)
    let Pizzas = resumoPedido.filter(produto => produto.tipo == "Pizza")
    .reduce((acumulador, produtoAtual) => Number(acumulador) + Number(produtoAtual.qtd),0)
    let precoTot = resumoPedido.reduce((acumulador, produtoAtual) => Number(acumulador) + Number(produtoAtual.preco),0)

    let tr_resultado = document.querySelector("#tbody_resultado").insertRow()

    td_pasteis = tr_resultado.insertCell()
    td_pizzas = tr_resultado.insertCell()
    td_precoTot = tr_resultado.insertCell()
    
    td_pasteis.innerText = pasteis
    td_pizzas.innerText = Pizzas
    td_precoTot.innerText = `${precoTot},00R$`
    cancelar()//CHAMANDDO ESSA FUNÇÃO PARA ZERAR O ARRAY
}
function cancelar(){
    let total = resumoPedido.length
    for(let i = 0; i < total ; i++){
        resumoPedido.splice(i, total) //COM ESSE METODO O PRIMEIRO PARAMETRO EU ESCOLHO DE ONDE COMEÇA E O OUTRO QUANTOS ELEMENTOS VAI SER EXCLUIDO
    }
    document.querySelector("#carrinho").style.display = "none"
}
function adicionarCarrinho(){
    let nome = document.querySelector('#nome').value //RESGATA O NOME DIGITADO
    let qtd = document.querySelector("#qtd").value  //RESGATA A QUANTIDADE DIGITADA
    let tamanho = document.querySelector('#Grande').checked //RESGATA O TAMANHO ESCOLHIDO
    let tipo = document.querySelector("#tipoPizza").checked
    let saborPastel = document.querySelector('#saborPastel')
    let saborPizza = document.querySelector("#saborPizza")
    let saborPizza1 = document.querySelector("#metade1")
    let saborPizza2 = document.querySelector("#metade2")
    let unicoSaborRadio = document.querySelector("#umSabor").checked
    let duoSaborRadio = document.querySelector("#doisSabor").checked
    
    tipo = (tipo == true)?"Pizza":"Pastel"//VERIFICANDO SE É PASTEL OU PIZZA
    tamanho = (tamanho == true)?"Grande":"Media"//AQUI EU ATRIBUI UM VALOR PARA CADA OPÇÃO DE ESCOLHA
    let verificandoCampos = validaCampos(nome, tipo, qtd,saborPastel.value, saborPizza.value, saborPizza1.value, saborPizza2.value, unicoSaborRadio, duoSaborRadio)//FUNÇÃO QUE VERIFICA SE OS DADOS FORAM INSERIDOS CORRETAMENTE
     
    if(verificandoCampos){
        //AQUI EU TIRO A VISIBILIDADE DO CARRINHO CASO O USUARIO ADICIONE OUTRO PRODUTO
        document.querySelector("#pedidoFinalizado").style.display = "none"
        let pedido = [
            {id: '', nome: '', preco: '', tamanho: '', qtd: '', tipo: '', sabor: ''}, //ARRAY QUE ESTÁ TODOS OS DADOS DO PEDIDO
        ]
        document.querySelector(".button").type = "reset"
        let tamanhoIndece = verificaTamanho(tamanho,tipo)

        let preco =  verificandoPreco(saborPastel.value, saborPizza.value, saborPizza1.value, saborPizza2.value,tamanhoIndece, qtd, pedido)
        //AQUI É ONDE ESTÁ SENDO ADICIONADO O PEDIDO NO ARRAY
        pedido.id = id
        pedido.nome = nome
        pedido.preco = preco
        pedido.tamanho = tamanho
        pedido.qtd = qtd
        pedido.tipo = tipo
        resumoPedido.push(pedido)//AQUI É ONDE ESTÁ SENDO ADICIONADO AO ARRAY QUE VAI CONTER TODOS OS PEDIDOS   
        id++
        mostrarCarrinho()
    }
    else{
        alert("Verifique se todos os campos foram preenchidos corretamente!!")
        document.querySelector(".button").type = 'button'
    }  
}
buttonFinalizar = document.createElement("button")
buttonFinalizar.innerText = "Finalizar"
buttonFinalizar.classList.add("button_finalizar")
buttonFinalizar.setAttribute("onclick", "finalizar()")
carrinho.appendChild(buttonFinalizar)

buttonCancelar = document.createElement("button")
buttonCancelar.innerText = "Cancelar"
buttonCancelar.classList.add("button_cancelar")
buttonCancelar.setAttribute("onclick", "cancelar()")
carrinho.appendChild(buttonCancelar)