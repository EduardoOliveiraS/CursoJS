let num = document.getElementById('txtnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')

let valores = [] // VETOR VAZIO.

function isNumero(n){

    if(Number(n) >=1 && Number(n)<=100){
        return true

    }
    else{
        return false
    }

}
function inLista(n,l){

    if(l.indexOf(Number(n)) != -1){

        return true

    }
    else{
        return false
    }

} 

 function adicionar(){

    

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // O metodo "push" vai adicionar um numeros no meu vetor!
        let item = document.createElement('option')
        item.text = `O valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
        

    }
    else{
        alert('[ERRO] VALOR INVÁLIDO OU JÁ ENCONTRADO NA LISTA!!!')
    }
    num.value = ''
    num.focus()

    /*

    num.value = ''
    num.focus()

    ESSE COMANDOS DE CIMA VÃO LIMPAR MEU INPUT DE ACIONAR,SEMPRE QUE EU ADICIONAR UM NUMERO NOVO.
    
    */
    
 }

 function finalizar(){
    if(valores.length == 0){
        alert('Adicione um número antes de finalizar!')

    }
    else{
         
        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma =  0
        let media = 0

        for(let pos in valores){ // Analiza qual é o maior número e o menor.
            soma += valores[pos] // vai somar todos os números
            media = soma/2
            
            if(valores[pos] > maior){
                maior = valores[pos]

            }
            if(valores[pos]< menor){
                menor = valores[pos]

            }
        }


        res.innerHTML = ''
        res.innerHTML += `<p>O total de valores adicionados são: ${tot}.</p>`
        res.innerHTML += `<p>O maior número informado é: ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado é: ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os números é: ${soma}.</p>`
        res.innerHTML += `<p>A media de todos os números é: ${media}.</p>`




    }
 }