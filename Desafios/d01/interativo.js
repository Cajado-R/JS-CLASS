
function carregar(){
    let tempo = new Date;
    let hora = tempo.getHours()
    let bomdia = document.getElementById("BD")
    let corh = document.getElementById("cor")
    let coresdiv = document.getElementById("horario")
    let img = document.getElementById("imagem")
    var mensagem = document.getElementById("exibindo")
    mensagem.innerHTML = `Agora são ${hora}h`
    if (hora >= 6 && hora <= 14){
        img.src = "./imgs/manha.png"
        bomdia.innerHTML =  `BOM DIA!!`
        document.body.style.background = 'rgb(255, 250, 181)'
        corh.style.color = 'white'

    }if (hora > 14 && hora <= 18){
        img.src = "./imgs/tarde.png"
        bomdia.innerHTML =  `BOA TARDE!!`
        document.body.style.background = 'rgb(187, 175, 2)'
        corh.style.color = 'green'
    }else{
        img.src = "./imgs/noite.png"
        bomdia.innerHTML =  `BOA NOITE!!`
        document.body.style.background = 'darkblue'
        corh.style.color = 'yellow'

    }

}    
