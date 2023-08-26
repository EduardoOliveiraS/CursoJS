function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] FALTA DE DADOS!!!')

    }else{
        res.innerHTML = 'Contando:'
         let i = Number(inicio.value)
         let f = Number(fim.value)
         let p = Number(passo.value)

         if(p<=0){
            window.alert('Passo inválido!Considerando PASSO 1')
            p = 1

         }
         //CONATGEM CERCENTE
         if (i<f){
            for( let c=i ; c<=f ; c+=p ){
                res.innerHTML +=` \u{1F449} ${c} `//Coloca emoge no js: \u{Codigo-do-emogi}
         }
         
        
        }else{
        //CONTAGEM DECRECENTE
            for(let c=i; f<=c;c-=p){
                res.innerHTML +=` \u{1F449} ${c} `//Coloca emoge no js: \u{Codigo-do-emogi}
                


            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
     
}