function carregar () {
    var mensagem = document.querySelector("div#mensagem");
    var img = document.querySelector("img#imagem");
    var data = new Date();
    //var hora = data.getHours();
    var hora = 8
    
    mensagem.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora <12) {
        //Bom Dia!!
        img.src = "fotomanha.png";
        document.body.style.background = "#e9bf86"
    } else if (hora >= 12 && hora <18) {
        // Boa Tarde!!
        img.src = "fototarde.png";
        document.body.style.background = "#b7920f"
    } else {
        // Boa Noite!!
        img.src = "fotonoite.png";
        document.body.style.background = "#3d79b8"
    }
}