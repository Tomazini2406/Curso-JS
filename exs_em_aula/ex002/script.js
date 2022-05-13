function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date 
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML+=`<p>BOM DIA!</p>`
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML+=`<p>BOA TARDE!</p>`
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        msg.innerHTML+=`<p>BOA NOITE!</p>`
    }

}
