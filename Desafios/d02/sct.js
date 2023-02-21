function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var age = window.document.getElementById('number')
    var nome = window.document.getElementById('iname')
    var mensg = window.document.getElementById('msg')
    var sexo = window.document.getElementsByName('sex')
    var idade = ano - Number(age.value)
    var genero = ''
    if (sexo[0].checked) {
        genero = 'Homem'
    } else {
        genero = 'Mulher'
    }
    if(idade >= 1 && idade <= 4 && genero == 'Mulher'){
        imagem.src = "./src/imgs/crianca-ate-10.png"
        mensg.innerHTML = `Seja bem vinda ${nome.value}`;
    } else if (idade >= 5 && idade <= 10 && genero == 'Mulher'){
        imagem.src = "./src/imgs/crianca-ate-10.png"
        mensg.innerHTML = `Seja bem vinda ${nome.value}`;
    } else if (idade >= 11 && idade <= 18 && genero == 'Mulher') {
        imagem.src = "./src/imgs/mulher-jovem18.png"
        mensg.innerHTML = `Seja bem vinda ${nome.value}`;
    } else if (idade >= 18 && idade <= 60 && genero == 'Mulher'){
        imagem.src = "./src/imgs/mulher-adulta.png"
        mensg.innerHTML = `Seja bem vinda ${nome.value}`;
    } else if (idade >= 60 && idade <= 110 && genero == 'Mulher'){
        imagem.src = "./src/imgs/mulher-idosa.png"
        mensg.innerHTML = `Seja bem vinda ${nome.value}`;
    } else if (idade > 111 && genero == 'Mulher'){
        imagem.src = "./src/imgs/morto.png"
        mensg.innerHTML = `Aparentemente você já morreu, ${nome.value}`;
    } else if (idade < 1 && genero == 'Mulher') {
        imagem.src = "./src/imgs/nemnasceu.png"
        mensg.innerHTML = `Aparentemente você ainda não nasceu, ${nome.value}`;

    }
    if(idade >= 1 && idade <= 4 && genero == 'Homem'){
        imagem.src = "./src/imgs/bebeh-ate-5.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade >= 5 && idade <= 10 && genero == 'Homem'){
        imagem.src = "./src/imgs/criancah-ate-10.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade >= 11 && idade <= 18 && genero == 'Homem') {
        imagem.src = "./src/imgs/jovemh-ate-18.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade >= 18 && idade <= 60 && genero == 'Homem'){
        imagem.src = "./src/imgs/homem.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade >= 60 && idade <= 110 && genero == 'Homem'){
        imagem.src = "./src/imgs/idoso.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade > 111 && genero == 'Homem'){
        imagem.src = "./src/imgs/morto.png"
        mensg.innerHTML = `Aparentemente você já morreu, ${nome.value}`;
    } else if (idade < 1 && genero == 'Homem') {
        imagem.src = "./src/imgs/nemnasceu.png"
        mensg.innerHTML = `Aparentemente você ainda não nasceu, ${nome.value}`;

    }

}
