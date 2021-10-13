const clockContainer = document.querySelector("#msg");

const updateClock = () => {
    const present = new Date();
    const hours = present.getHours();
    const minutes = present.getMinutes();
    const seconds = present.getSeconds();

    const clockHTML = `
        <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
        <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
        <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
    `
    msg.innerHTML = clockHTML

}

setInterval(updateClock,1000)


function carregar() {
    var msg = document.getElementById('msg')
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