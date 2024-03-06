function alterarCor(){
    var cores = ['black', 'blue', 'green', 'yellow', 'pink', 'red', 'brown', 'white', 'orange', 'purple']
    var numAleatorio = Math.floor(Math.random() * cores.length)
    var nomeDaCor = document.querySelector('h1#nomeDaCor')
    
    document.body.style.backgroundColor = cores[numAleatorio]
    var nome = cores[numAleatorio]

    nomeDaCor.innerHTML = nome.toUpperCase()
}