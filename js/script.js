const texto = document.getElementById("texto")
const no = document.getElementById("no")
const fundo = document.getElementById("fundo")


var contador = 0

no.addEventListener("mousemove", function(){
    contador++

    let x = Math.floor(Math.random() * 100 )
    let y = Math.floor(Math.random() * 100 )

    no.style.bottom = y + "%"
    no.style.left = x + "%"

    if (contador == 10){
        texto.innerHTML = "Não vai casar comigo??"
    }
    
    if (contador == 20){
        texto.innerHTML = "Beleza então"
        fundo.style.backgroundImage = "url(https://st2.depositphotos.com/2971093/8044/i/450/depositphotos_80442622-stock-photo-rocket-propelled-grenade.jpg)"
    }
})



function casar(){
    no.innerHTML = "CLARO"
    setTimeout(function(){
        while(!confirm("Confirma o casamento?")){
            confirm("Confirma o casamento?")
        }
        alert("Se voce insiste...")
    }, 500)
}
