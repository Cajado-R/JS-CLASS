var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora < 12){
    console.log('BOM DIA!!')
} else if (hora >= 12 && hora <= 18){
    console.log('BOA TARDE!!')
} else if (hora > 18){ 
    console.log('BOA NOITE!!')
}
