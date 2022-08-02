
  let  opcao_do_pastel = document.getElementById("opcaoPastel") // CONTAINER QUE TA A OPCAO DO PASTEL
  let opcao_qtd_de_recheios = document.getElementById("secaoSabores")   // CONTAINER QUE TA A OPCAO DE QUANTIDADE DE RECHEIOS
  let opcao_unico_sabor_pizza = document.getElementById("unicoSaborPizza") // CONTAINER QUE TA A OPCAO DO SABOR UNICO PIZZA
  let opcao_dois_sabores_pizza = document.getElementById("duoSabor")// CONTAINER DOIS SABORES PIZZA
  let sabor_Pastel = document.getElementById("saborPastel") // SABOR DO PASTEL
  let metade1 = document.getElementById("metade1") // SABOR DA PRIMEIRA METADE
  let metade2 = document.getElementById("metade2")// SABOR DA SEGUNDA METADE
  let unicoSabor_pizza = document.getElementById("sabor") // UNICO SABOR PIZZA
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
           
function calcularTotal(){

    let nome = document.getElementById("nome").value // NOME DO CLIENTE
    let tipo =  document.getElementById("tipoPizza").checked //TIPO PASTEL OU PIZZA
    let recheio = document.getElementById("umSabor").checked
    let tamanho = document.getElementById("grande").checked //TAMANHO GRANDE OU MEDIO
    let preco = ''
    let preco1 = 0 
    let preco2 = 0
    let resultado = document.getElementById("resultado")
    let exibirResul = document.getElementById("exibirResul")
    var qtd = document.getElementById("qtd").value //QUANTIDADE DE PASTEL OU PIZZA
    let a_Ou_O = "a" // CONCATENANDO COM A OU O
    let precoTot = 0


        if(tamanho === true){
        tamanho = 'grande'
         }else{
        tamanho = "media"
         }
         
      
        if (nome == "" ||  qtd == "" || qtd <= 1){
            alert("prencha todos os valores corretamente")
           if(qtd <= 0 && qtd != ""){
            alert(`não se pode comprar a quantidade ${qtd}`  )
           }
        }
        else{
           if (tipo == false){
                tipo = "pastel"
                a_Ou_O = "o"
                if(sabor_Pastel.value != ""){
                    sabor = sabor_Pastel.value
                    if(tamanho === "media"){
                        console.log("chegou no pastel medio")
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
                    else if(tamanho === "grande"){
                        console.log("chegou no pastel grande")
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
                }
                else{
                    alert("por favor insira um valor valido para pastel")
                }
            }
        
            if (tipo === true ){
                tipo = "pizza"
                sabor = unicoSabor_pizza.value
                if( recheio === true){
                    recheio = "umSabor"    
                }
                else if(recheio != true) {
                    recheio = "doisSabor"
                }    
                if(recheio === "umSabor"){
                    if(tamanho === "media"){

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
                    else if ( tamanho === "grande"){

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
                        if(tamanho === "grande"){
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
                        if(tamanho === "media"){
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
                    }else if (metade1.value == "" || metade2.value === ""){
                        alert("por favor escolha os sabores corretamente")
                    }
                } 
            }
            function mostrarResultado(){
                precoTot = preco * qtd
                if(preco1 != "" && preco2 != ""){
                    precoDuplo = (preco1 + preco2) * qtd
                    exibirResul1.innerHTML = `<h3> O sabor de uma metade foi: ${metade1.value} = ${preco1},00R$</h3>`
                    exibirResul2.innerHTML = `<h3> O sabor de uma metade foi: ${metade2.value} = ${preco2},00R$</h3>`
                    exibirResul3.innerHTML = `<h3> A Pizza inteira ficou : ${preco1 + preco2},00R$</h3>` 
                    exibirResul4.innerHTML = `<h3> As ${qtd} Pizza ficou por apenas ${precoDuplo},00R$</h3>`       
                    resultado.style.display = "block"
                }else{
                    exibirResul1.innerHTML = `<h3> Voce esolheu ${tipo} no tamanho ${tamanho} com o recheio ${sabor} no valor de : ${preco},00R$</h3>`
                    exibirResul2.innerHTML = `<h3> A sua escolha de ${qtd} ${tipo} resultou no total de : ${precoTot},00R$</h3>`
                    resultado.style.display = "block"
                }
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



