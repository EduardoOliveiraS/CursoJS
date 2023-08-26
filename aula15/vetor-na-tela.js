/* UMA OPICÃO TRADICIONAL NA EXIBIÇÃO DE VETORES!!!

let num = [3,2,9,4,5]
for( let pos=0 ; pos<num.length ; pos++ ){

    console.log(`O vetor ${pos} = ${num[pos]}`)

}*/

// FORMA MAIS IMPLIFICADA !!!

var num = [2,5,7,8,9]
for(let pos in num){
    console.log(num.indexOf(7))
}