
  let  opcao_do_pastel = document.getElementById("opcaoPastel") // CONTAINER QUE TA A OPCAO DO PASTEL
  let opcao_qtd_de_recheios = document.getElementById("secaoSabores")   // CONTAINER QUE TA A OPCAO DE QUANTIDADE DE RECHEIOS
  let opcao_unico_sabor_pizza = document.getElementById("unicoSaborPizza") // CONTAINER QUE TA A OPCAO DO SABOR UNICO PIZZA
  let opcao_dois_sabores_pizza = document.getElementById("duoSabor")// CONTAINER DOIS SABORES PIZZA
  let sabor_Pastel = document.getElementById("saborPastel") // SABOR DO PASTEL
  let metade1 = document.getElementById("metade1") // SABOR DA PRIMEIRA METADE
  let metade2 = document.getElementById("metade2")// SABOR DA SEGUNDA METADE
  let unicoSabor_pizza = document.getElementById("sabor") // UNICO SABOR PIZZA
  let precoTot = 0
  let codigo = 0
  
   

  let guardarPedido = Array()
    guardarPedido['id'] = []
    guardarPedido['tipo'] = []
    guardarPedido['sabor'] = []
    guardarPedido['tamanho'] = []
    guardarPedido['qtd'] = []
    guardarPedido['precoTot'] = []

   /* AQUI É A PIZZA */
    function mostrarOpcao(){
        opcao_qtd_de_recheios.style.display = "block"
        opcao_do_pastel.style.display = "none"
        sabor_Pastel.value =""
        }
        mostrarOpcao()
     /* AQUI É O PASTEL */
    function  unicaOpcaoPastel(){
          opcao_do_pastel.style.display = "block"
          opcao_qtd_de_recheios.style.display = "none"
          unicoSabor_pizza.value = ""
          metade1.value = ""
          metade2.value = ""
    }    
    unicaOpcaoPastel()
     /* AQUI É A PIZZA */
        function umSaborPizza(){    
            opcao_unico_sabor_pizza.style.display = "block"
           opcao_dois_sabores_pizza.style.display = "none"    
            opcao_do_pastel.value = ""
            unicoSabor_pizza.value = ""               
        }  
        umSaborPizza()
        function dois_Sabores(){      
           opcao_dois_sabores_pizza.style.display = "block"
           opcao_unico_sabor_pizza.style.display = "none"        
           metade1.value = ""
           metade2.value = ""
    
       }

        dois_Sabores()
           
function adicionarCarrinho(){

    let nome = document.getElementById("nome").value // NOME DO CLIENTE
    let tipo =  document.getElementById("tipoPizza").checked //TIPO PASTEL OU PIZZA
    let recheio = document.getElementById("umSabor").checked
    let tamanho = document.getElementById("Grande").checked //TAMANHO GRANDE OU MEDIO
    let preco = ''
    let preco1 = 0 
    let preco2 = 0
    let resultado = document.getElementById("resultado")
    var qtd = document.getElementById("qtd").value //QUANTIDADE DE PASTEL OU PIZZA
    
    if(tipo == false){
        tipo = 'Pastel'
    }
    else{
        tipo = "Pizza"
    }
    if(tamanho === true){
        tamanho = 'Grande'
    }
    else if(tamanho === false){
        tamanho = "Media"
    }
    if (nome === "" || qtd <= 0 || qtd === "" || tipo == '') {
      
        alert("Preencha os dados corretamente para prosseguir")
       

    }
    
    else{//DEPOIS DE SEREM FEITOS OS TESTES BASICOS ENTRA NESSE ELSE 
        //CASO O TIPO SEJA FALSE ENTÃO ENTRA NO LAÇO DO PASTEL E SE DER TRUE O LAÇO DA PIZZA
       
        if (tipo == "Pastel"){
        
            sabor = sabor_Pastel.value
            if(tamanho === "Media"){
               
                //AQUI VAI SER O PASTEL MEDIO
                switch(sabor_Pastel.value){
                    case "mussarela" :                   
                        preco = 5
                        break
                    case "presunto" :         
                        preco = 9
                        break
                    case 'frango' :
                        preco = 7
                        break
                    case 'carne' :
                        preco = 11
                        break
                    case 'frango-catupiry' :                   
                        preco = 9
                        break
                    case 'vegano' :
                        preco = 8
                        break
                    case 'portuguesa' :
                        preco = 9
                        break
                }
            }
            else if(tamanho === "Grande"){
                
                switch(sabor_Pastel.value){
                    case "mussarela" :
                        preco = 8
                        console.log(`preço do ${tipo} é igual a : ${preco}`)
                        break
                    case "presunto" :         
                        preco = 17
                        break
                    case 'frango' :
                        preco = 12
                        break
                    case 'carne' :
                        preco = 17
                        break
                    case 'frango-catupiry' :                   
                        preco = 14
                        break
                    case 'vegano' :
                        preco = 12
                        break
                    case 'portuguesa' :
                        preco = 15          
                        break
                }
            }
        
            else{
                alert("por favor insira um valor valido para pastel")
            }
        }
    
        if (tipo === "Pizza" ){
            sabor = unicoSabor_pizza.value
            if( recheio === true){
                recheio = "umSabor"    
            }
            else if(recheio === false) { // SE DER ERRO EU MODIFIQUEI AQUI PARA DEIXA === FALSE E NÃO != TRUE
                recheio = "doisSabor"
            }    
            if(recheio === "umSabor"){
                if(tamanho === "Media"){
                   
                    switch(unicoSabor_pizza.value){

                        case "mussarela" :
                            preco = 24
                            break
                        case "milho" :         
                            preco = 26        
                            break
                        case "presunto" :         
                            preco = 25
                            break
                        case "calabresa" :         
                            preco = 26
                            break
                        case 'frango' :
                            preco = 27 
                            break                               
                        case 'carne' :
                            preco = 32    
                            break
                        case 'frango-catupiry' :                   
                            preco = 29
                            break
                        case 'portuguesa' :
                            preco = 34
                            break
                    }
                }
                else if ( tamanho === "Grande"){
                    
                    switch(unicoSabor_pizza.value){

                        case "mussarela" :                       
                            preco = 30
                            break
                        case "milho" :         
                            preco = 34                         
                            break
                        case "presunto" :         
                            preco = 32
                            break
                        case "calabresa" :         
                            preco = 31     
                            break
                        case 'frango' :
                            preco = 34     
                            break
                        case 'carne' :
                            preco = 40 
                            break
                        case 'frango-catupiry' :                   
                            preco = 36
                            break
                        case 'portuguesa' :
                            preco = 38   
                            break
                    }
                }
            }
            else{
                if(metade1.value != "" && metade2.value != ""){                   
                    if(tamanho === "Grande"){
                        
                        switch(metade1.value){
                            case "mussarela":
                                preco1 = 15
                                break
                            case "milho" :         
                                preco1 = 17
                                break
                            case "presunto" :         
                                preco1 = 16
                                break
                            case "calabresa" :         
                                preco1 = 15
                                break
                            case 'frango' :
                                preco1 = 17
                                break
                            case 'carne' :
                                preco1 = 20
                                break
                            case 'frango-catupiry' :                   
                                preco1 = 18
                                break
                            case 'portuguesa' :
                                preco1 = 19
                                break
                        }
                        switch(metade2.value){
                            case "mussarela":
                                preco2 = 15
                                break
                            case "milho" :         
                                preco2 = 17
                                break
                            case "presunto" :         
                                preco2 = 16
                                break
                            case "calabresa" :         
                                preco2 = 15
                                break
                            case 'frango' :
                                preco2 = 17
                                break
                            case 'carne' :
                                preco2 = 20
                                break
                            case 'frango-catupiry' :                   
                                preco2 = 18
                                break
                            case 'portuguesa' :
                                preco2 = 19
                                break
                        }
                    }
                    if(tamanho === "Media"){
                        
                        switch(metade1.value){
                            case "mussarela" :                     
                                preco1 = 12
                                break
                            case "milho" :         
                                preco1 = 13
                                break
                            case "presunto" :         
                                preco1 = 13
                                break
                            case "calabresa" :         
                                preco1 = 13
                                break
                            case 'frango' :
                                preco1 = 13
                                break
                            case 'carne' :
                                preco1 = 16
                                break
                            case 'frango-catupiry' :                   
                                preco1 = 14
                                break
                            case 'portuguesa' :
                                preco1 = 17
                                break
                        }
                        switch(metade2.value){

                            case "mussarela" :                     
                                preco2 = 12
                                break
                            case "milho" :         
                                preco2 = 13
                                break
                            case "presunto" :         
                                preco2 = 13
                                break
                            case "calabresa" :         
                                preco2 = 13
                            break
                            case 'frango' :
                                preco2 = 13
                                break
                            case 'carne' :
                                preco2 = 16
                                break
                            case 'frango-catupiry' :                   
                                preco2 = 14
                                break
                            case 'portuguesa' :
                                preco2 = 17
                                break
                        } 
                    }
                }
                // IRÁ CAIR AQUI CASO O USARIO NÃO DIGITE OS VALORES CORRETAMENTE
                else if (metade1.value == "" || metade2.value === ""){
                    alert("por favor escolha os sabores corretamente")
                }
            } 
        }
      
        
       
        
        function validaCampos () {
            precoTot = preco * qtd
            if(preco1 != "" && preco2 != ""){
                precoTot = (preco1 + preco2) * qtd
                sabor = metade1.value + ' / ' + metade2.value                
            }
            if(precoTot != ''){
                return true
            }
            return false
        } 
        function mostrarResultado(){
            
            //SO IRÁ APARECER OS RESULTADOS CASO O VALOR SEJA DIFERENTE DE VAZIO
           
            if(validaCampos()){

                adicionarArray()   
                document.getElementById('pedidoFinalizado').style.display = "none"//SEÇÃO DO RESULTADO FINAL DO PEDIDO
                document.querySelector("tbody#tbody").innerText = '' 

                //NÃO SEI AO CERTO AINDA POREM EU ACREDITO QUE NO FOR AQUI ELE VAI PERCORRER O ID DO PRODUTO SEMPRE INICIANDO DO 0 , ASSIM EVITA OS BUGS
                for(let i = 0; i < guardarPedido['id'].length; i ++ ){

                    //aqui é onde estou realizando a entrada nos dados da tabela
                //A PROPRIEDADE INSERTROW ELA SERVE PARA CRIAR UMA LINHA

                // A PROPRIEDADE INSERTCELL ELA SERVE PARA CRIAR UMA COLUNA
                    let tr = document.querySelector("tbody#tbody").insertRow()
                    let td_id = tr.insertCell()
                    let td_tipo = tr.insertCell()
                    let td_sabor = tr.insertCell()
                    let td_tamanho = tr.insertCell()
                    let td_qtd = tr.insertCell()
                    let td_precoTot = tr.insertCell()
                    let td_img = tr.insertCell()
                    
                    
                    
                    td_id.innerText = guardarPedido['id'][i]
                    td_tipo.innerText = guardarPedido['tipo'][i]
                    td_sabor.innerText = guardarPedido['sabor'][i]
                    td_tamanho.innerText = guardarPedido['tamanho'][i]
                    td_qtd.innerText = guardarPedido['qtd'][i]
                    td_precoTot.innerText = guardarPedido['precoTot'][i]

                    let lixeiro = document.createElement("img")
                    lixeiro.src = "img/lixo.png"   
                    //AQUI EU DEI UM ID PARA A VARIAVEL QUE VAI SER UTIL NA HORA DA REMOÇÃO DA LINHA DO ARRAY
                    tr.setAttribute("id", `${i}`)
                    //tr.setAttribute('id', `${codigo}`)
                    //AQUI EU CRIEI UMA FUNÇAÕ PARA CADA CLICK NA ' TD ' QUE SE ENCONTRA  O BOTÃO
                    td_img.classList.add('lixo')
                    td_img.setAttribute("onclick" ,"deletar(" + i +")")
                

                    td_img.appendChild(lixeiro)
                } 
                    
                   
                   
                     
                    resultado.style.display = "block"
            } 
        }
        function adicionarArray(){
               
            guardarPedido["id"].push(codigo)
            guardarPedido['tipo'].push(tipo)
            guardarPedido['sabor'].push(sabor)
            guardarPedido['tamanho'].push(tamanho)
            guardarPedido['qtd'].push(qtd)
            guardarPedido['precoTot'].push(precoTot)
            codigo++
            console.log(guardarPedido)
        }  
        mostrarResultado()
    }
    function zeraOpcao(){
        sabor_Pastel.value =""
        unicoSabor_pizza.value = ""
        metade1.value = ""
        metade2.value = ""    
    }
    zeraOpcao()
}
function deletar(indece){
    for(let i= 0; i < guardarPedido['id'].length; i++){
        console.log(`posicão ${i}`)
        if(guardarPedido['id'][i] == indece){
            alert('chegou aqui')
            console.log(guardarPedido['sabor'][i])
            //NESSE METODO DE REMOÇÃO EU DIRIJO O INDECE QUE SERA REMOVIDO E EM SEGUIDA A QTD QUE SERA REMOVIDA NESSE METODO É POSSIVEL REMOVER INTENS DE QUALQUER POSIÇÃO DIFERENTESDOS OUTROS
            guardarPedido["id"].splice(i, 1)
            guardarPedido["tipo"].splice(i, 1)
            guardarPedido["sabor"].splice(i, 1)
            guardarPedido["tamanho"].splice(i, 1)
            guardarPedido["qtd"].splice(i, 1)
            guardarPedido["precoTot"].splice(i, 1)       
            document.getElementById("tbody").deleteRow(indece)      
        }  
    }
}
function finalizarPedido(){
   
    document.getElementById('pedidoFinalizado').style.display = "block"//SEÇÃO DO RESULTADO FINAL DO PEDIDO
    
        let tr_finalizar = document.getElementById("tbody_resultado").insertRow()
        td_pasteis = tr_finalizar.insertCell()
        td_pizzas = tr_finalizar.insertCell()
        td_valorTot = tr_finalizar.insertCell()

        td_pasteis.innerText = 2
        td_pizzas.innerText = 5
        td_valorTot.innerText = 250.00
        

    
}

 // IREI CRIAR AQUI UM BOTÃO PARA FINALIZAR O PEDIDO 
let Finalizar = document.createElement('button')

    Finalizar.innerText = "Finalizar Pedido"
    Finalizar.classList.add('button_finalizar')
    Finalizar.setAttribute("onclick", "finalizarPedido()")
    resultado.appendChild(Finalizar)
   

     



