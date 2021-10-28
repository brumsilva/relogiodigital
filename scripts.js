const clockContainer = document.querySelector("#msg");
//criei uma função que armazena a div onde eu quero realizar as alterações

const attDorel = () => { //criei uma variável/arrowfunction que armazena os momentos para que depois que possa inserir na tela
    const present = new Date(); //aqui armazeno as informações "gerais"
    const hours = present.getHours(); //aqui armazeno as horas
    const minutes = present.getMinutes(); //aqui armazeno os minutos
    const seconds = present.getSeconds(); //aqui armazeno os segundos
    //agora crio uma variável que vai armazenar os valores que especifiquei em cima e que depois eu vou add na minha div que eu armazenei lá em cima 
    const clockHTML = `
        <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
        <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
        <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
    `
    //eu poderia adicionar apenas ${}, mas adicionei <span> para poder estilizar posteriormente  
    //eu usei esses valores ternários para falar pro js: filho, se a hora, minuto ou segundo tiver tamanho 1 adicione um 0 pfv pra ficar roxeda

    msg.innerHTML = clockHTML
    //msg é minha div, então eu tô modificando ela com base na variável que eu criei

}

setInterval(attDorel,1000) //essa função é responsável por atualizar os bagui ele usa o valores de milissegundos. Eu quero que a função se atualiza a cada 1 segundo., então eu coloquei 1000ms = 1s 


function carregar() {
    var photo = document.getElementById('foto')
    var data = new Date();
    var time = data.getHours()

    if (time>=0&&time < 12) {
        photo.src = "imagens/imagem_manha.png"
        document.body.style.background = '#F7AB42'
    } else if (time >= 12 && time <=18 ) {
        photo.src = "imagens/imagem_tarde.png"
        document.body.style.background = '#E7A372'
    } else {
        photo.src = "imagens/imagem_noite.jpg"
        document.body.style.background = '#332944'
    }
}