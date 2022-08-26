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
let resumoPedido = [
   
]
const saboresPizza = document.querySelector('#secaoSaboresPizza')// SEÇÃO DOS SABORES PIZZA
const saboresPastel = document.querySelector('#opcaoPastel')// SEÇÃO DOS SABORES PASTEL
const duoSaborPizza = document.querySelector("#duoSabor")
const umSabor = document.querySelector(".umSabor")
const select1= document.querySelector(".select1") //PRIMERIA METADE
const select2 =document.querySelector(".select2") //SEGUNDA METADE
const select3 =document.querySelector(".select3") // SABOR PIZZA
const select4 =document.querySelector(".select4") //SABOR PASTEL

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

//ESSA FUNÇÃO IRÁ RETORNAR O PREÇO DO PEDIDO INDEPENTEMENTE DO SABOR E QUANTIDADE
function verificandoPreco(saborPastel,saborPizza,saborPizza1,saborPizza2,tamanhoIndece,qtd){
    let precoNesseSabor = ''
    if(saborPastel != ''){precoNesseSabor = cardapio[tamanhoIndece].filter(produto =>  produto.sabor == saborPastel) 
        return Number(precoNesseSabor[0].preco) * Number(qtd) 
    }
    if(saborPizza != ''){precoNesseSabor = cardapio[tamanhoIndece].filter(produto =>  produto.sabor == saborPizza)
        return Number(precoNesseSabor[0].preco) * Number(qtd) 
    }
    if(saborPizza1 != '' && saborPizza2 != ''){//AQUI EU RECUPEREI OS DOIS SABORES ESCOLHIODS 
        precoNesseSabor = cardapio[tamanhoIndece].filter(produto =>  produto.sabor == saborPizza1 ||    produto.sabor == saborPizza2)
       .reduce((acumulador, itemAtual) => acumulador + itemAtual.preco,0)  
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
        let pedido = [
            {nome: '',
             preco:''  ,
            tamanho: '',
            qtd:'',
            tipo:'',},
        ]
        
       
        
        
        document.querySelector(".button").type = "reset"
        let tamanhoIndece = verificaTamanho(tamanho,tipo)
        let preco =  verificandoPreco(saborPastel.value, saborPizza.value, saborPizza1.value, saborPizza2.value,tamanhoIndece,qtd )

                    pedido.nome = nome
                    pedido.preco = preco
                    pedido.tamanho = tamanho
                    pedido.qtd = qtd
                    pedido.tipo = tipo
                    console.log(pedido)
                    resumoPedido.push(pedido)
        console.log(resumoPedido)
        // let precoDuoSabor = preco.reduce((acc, produto) => {
        //    console.log(acc + produto.preco)
        // })
        // console.log(precoDuoSabor.acc)
            // AQUI EU VERIFICO O TAMANHO E ATRIBUIR UM VALOR NUMERICO PARA QUE EU POSSA VERIFICAR O INDECE DO TAMANHO
        
    }else{
        alert("Verifique se todos os campos foram preenchidos corretamente!!")
        document.querySelector(".button").type = 'button'
        
        
    }  
    
}
