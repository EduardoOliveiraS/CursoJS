function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano && fano <=0 ){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('txtsexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade>=0 && idade < 10){
                //Criança
                img.setAttribute('src','bebehomem.png')
            }
            else if(idade >= 10 && idade < 21){
                 //jovem
                 img.setAttribute('src','homemjovem.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src','homemadulto.png')
            }
            else{
                //idoso
                img.setAttribute('src','homemidoso.png')
            }


        }
        else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade>=0 && idade < 10){
                //Criança
                img.setAttribute('src','bebemulher.png')
            }
            else if(idade >= 10 && idade < 21){
                 //jovem
                 img.setAttribute('src','mulherjovem.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src','mulheradulta.png')
            }
            else{
                //idoso
                img.setAttribute('src','mulheridoso.png')
            }
            
        }
        
        
    }
        res.innerHTML = `Você é um(a) ${gênero} de ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)

        
        
}
    
