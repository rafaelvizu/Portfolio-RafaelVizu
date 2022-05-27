function maquinaEscreverAnimation(txt, elemento) {
    for (let i=0; i < txt.length; i++) {
        setTimeout(() => {
            let letra = document.createTextNode(txt[i])
            elemento.appendChild(letra)
        }, 75 * i);
    
    }
}


let myName = document.querySelector("#myName")
setTimeout(() => {
    maquinaEscreverAnimation("<Rafael Vizú/>", myName)

}, 1000);



setTimeout(() => {
    let icons = document.querySelector("nav>div")
    icons.style.display = 'block'
}, 2050);

