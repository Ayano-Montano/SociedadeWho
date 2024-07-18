let configuracao01 = document.querySelector("#menuBotaoFechado");

let configuracao02 = document.querySelector("#menuBotaoaberto");

let body = document.querySelector("#body")


configuracao01.addEventListener("click", () => {
    let menuAberto = document.querySelector(".navbar-cabecalho-mobile");

    menuAberto.classList.toggle('menuon')

    body.classList.toggle("scrolOFF")
});

configuracao02.addEventListener("click", () => {
    let menuAberto = document.querySelector(".navbar-cabecalho-mobile");

    menuAberto.classList.toggle('menuoff')
    menuAberto.classList.remove('menuon')
    body.classList.toggle("scrolOFF")
});
