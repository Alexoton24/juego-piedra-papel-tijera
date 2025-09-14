let btnPiedra = document.getElementById("btnPiedra");
let btnPapel = document.getElementById("btnPapel");
let btnTijeras = document.getElementById("btnTijera");
let btnReiniciar = document.getElementById("reiniciar");
let opciones = ["piedra", "papel", "tijera"];
let computadora = document.getElementById("computadora");
let usuario = document.getElementById("usuarioImagen");
let parrafo = document.getElementById("results");
let parrafoGanaste = document.getElementById("ganaste");
let parrafoPerdiste = document.getElementById("perdiste");
let parrafoEmpate = document.getElementById("empate");
let contadorGlobal = 0;
let contadorGanaste = 0; 
let contadorPerdiste = 0;
let contadorEmpate = 0;

function seleccionComputadora(){
    
    let numeroAleatorio = Math.floor(Math.random()*opciones.length);
    computadora.src = `assets/${opciones[numeroAleatorio]}.jpg`
    return opciones[numeroAleatorio] 
}

function resultados(eleccionUsuario){
    let tijera = "tijera";
    let piedra = "piedra";
    let papel = "papel";
    let eleccionComputadora = seleccionComputadora(tijera,piedra,papel)
    
    if(eleccionUsuario === eleccionComputadora){
        ++contadorEmpate
        parrafo.textContent = "Empate"
        parrafo.style.color = "white"
     parrafoEmpate.textContent = `Empate: ${contadorEmpate}`
    }else if(eleccionUsuario === "piedra" && eleccionComputadora === "tijera"){
        ++contadorGanaste
        parrafo.style.color = "green"
        parrafo.textContent = "Ganaste"
        parrafoGanaste.textContent = `Ganaste ${contadorGanaste}`
    }else if(eleccionUsuario === "tijera" && eleccionComputadora === "papel"){
        ++contadorGanaste
        parrafo.textContent = "Ganaste"
        parrafo.style.color = "green"
    }else if(eleccionUsuario === "papel" && eleccionComputadora === "piedra"){
        ++contadorGanaste
        parrafo.textContent = "Ganaste"
        parrafo.style.color = "green"
    }else{
        ++contadorPerdiste
        parrafo.textContent = "Perdiste"
        parrafo.style.color = "red"
    }
    ++contadorGlobal
    parrafoGanaste.textContent = `Ganaste: ${contadorGanaste}`
    parrafoPerdiste.textContent = `Perdiste: ${contadorPerdiste}`
    parrafoEmpate.textContent = `Empate: ${contadorEmpate}`
    if(contadorGlobal >= 10){
        btnPapel.disabled = true;
        btnPiedra.disabled = true;
        btnTijeras.disabled = true; 
        if(contadorEmpate > contadorGanaste && contadorEmpate >contadorPerdiste){
            parrafo.textContent = `Quedaste empate`
            parrafo.style.color = "blue"
            console.log(contadorEmpate)
        }else if(contadorGanaste > contadorEmpate && contadorGanaste >contadorPerdiste){
            parrafo.textContent = `Ganaste esta Ronda`
            parrafo.style.color = "green"
            console.log(contadorGanaste)
        }else if(contadorPerdiste > contadorGanaste && contadorPerdiste > contadorEmpate){
            parrafo.textContent = `Perdiste esta Ronda`
            parrafo.style.color = "red"
            console.log(contadorPerdiste)
        }else if (contadorGanaste == contadorEmpate || contadorGanaste == contadorPerdiste || contadorEmpate == contadorGanaste 
            || contadorEmpate == contadorPerdiste || contadorPerdiste == contadorGanaste || contadorPerdiste == contadorEmpate
        ){
            parrafo.textContent = "Resultado ammbiguo, reinicia la ronda"
            parrafo.style.color = "white"
        }
    }
    console.log(contadorPerdiste)
    console.log(contadorEmpate)
    console.log(contadorGanaste)
}

function reiniciar(){
    computadora.src = "assets/juego.jpg"
    usuario.src = "assets/juego.jpg"
}

btnPapel.addEventListener("click",()=>{
    resultados("papel")
    usuario.src = "assets/papel.jpg"
})
 btnPiedra.addEventListener("click",()=>{
    resultados("piedra")
    usuario.src = "assets/piedra.jpg"
 })
btnTijeras.addEventListener("click",()=>{
    resultados("tijera")
    usuario.src = "assets/tijera.jpg"
})
btnReiniciar.addEventListener("click",()=>{
    
    contadorGanaste = 0;
    contadorEmpate = 0;
   contadorPerdiste = 0;
    if(contadorGlobal >= 10){
        reiniciar()
        contadorGlobal = 0;
        btnPapel.disabled = false;
        btnPiedra.disabled = false;
        btnTijeras.disabled = false; 
        parrafoGanaste.textContent = `Ganaste: ${contadorGanaste}`
        parrafoPerdiste.textContent = `Perdiste: ${contadorPerdiste}`
        parrafoEmpate.textContent = `Empate: ${contadorEmpate}`
        parrafo.textContent = "Reiniciaste la ronda"
        parrafo.style.color = "white"

    }else{
        alert("Termina la ronda")
    }
})
