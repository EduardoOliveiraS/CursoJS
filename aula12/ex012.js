var agora = new Date()
var hora = agora.getHours()

console.log(`São exatamente ${hora} horas.`)
//Bom dia,Boa tarde,Boa noite,Boa madrugada

if (hora > 6 && hora <=12){
    console.log('Bom dia!')
}
else if (hora > 12 && hora <=18){
    console.log('Boa tarde!')
}
else if(hora > 0 && hora <=5){
    console.log('Boa madrugada!')

}
else{
    console.log('Boa noite!')
}