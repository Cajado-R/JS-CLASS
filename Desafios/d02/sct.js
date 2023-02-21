
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var age = window.document.getElementById('number')
    var nome = window.document.getElementById('iname')
    var mensg = window.document.getElementById('msg')
    var idade = ano - Number(age.value)
    if(idade >= 1 && idade <= 4){
        imagem.src = "./src/imgs/crianca-ate-10.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade >= 5 && idade <= 10){
        imagem.src = "./src/imgs/crianca-ate-10.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade >= 11 && idade <= 18) {
        imagem.src = "./src/imgs/mulher-jovem18.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade >= 18 && idade <= 60){
        imagem.src = "./src/imgs/mulher-adulta.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade >= 60 && idade <= 110){
        imagem.src = "./src/imgs/mulher-idosa.png"
        mensg.innerHTML = `Seja bem vindo ${nome.value}`;
    } else if (idade > 111){
        imagem.src = "./src/imgs/morto.png"
        mensg.innerHTML = `Aparentemente você já morreu, ${nome.value}`;
    } else if (idade < 1) {
        imagem.src = "./src/imgs/nemnasceu.png"
        mensg.innerHTML = `Aparentemente você ainda não nasceu, ${nome.value}`;

    }
}