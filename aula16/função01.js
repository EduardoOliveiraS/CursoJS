function parimp(num){
    if (num%2 == 0){
        return 'PAR'
    }else{
        return 'ÍMPAR'
    }
}
let resultado = parimp(12)
console.log(`O número é ${resultado}`)