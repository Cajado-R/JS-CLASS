var idade = 14
if (idade < 18 && idade >= 16){
    console.log('Pode votar')
} else if (idade >= 18 && idade < 65){
    console.log('Voto obrigatorio')
} else  if (idade >= 65) {
    console.log('Pode votar')
} else {
    console.log('Não vota')
}