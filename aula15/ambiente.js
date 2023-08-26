let num = [5,8,4]

num[3] = 6 // >> Adicionou o "6" na posição "3" do vetor 'num'.
num.push(7) // >> Adicionou o "7" em uma posição aleatória no vetor 'num'

console.log(` Nosso vetor é ${num[0]}.\n A quantidade de elementos é: ${num.length}. \n Os nosso elementos em ordem crecente fica: ${num.sort()}`)