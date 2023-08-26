function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
       window.alert('[ERRO] CONFIRA OS DADOS E TENTE NOVAMENTE!!!')
    
    }
    else{
        let numero = Number(num.value)

        let c = 1 //CONTADOR

        tab.innerHTML = '' // >> ESTÁ VAZIO POR CAUSA QUE QUANDO O USUÁRIO DIGITAR OUTRO NÚMERO, NÃO MOSTRAR A TABUADA EMBAIXO DA TABUADA ANTIGA.

        while(c<=10){

            let item = document.createElement('option')  // "createElement('option') > CRIA UM ELEMENTO PRA SER COLOCADO DENTRO DO SELECT"
            
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `tab${c}`

            tab.appendChild(item) // >> É UMA FORMA DE MOSTRAR O RESULTADO DENTRO SELECT NO CASO A TELA DO USUÁRIO
            c++
        }

    }
}