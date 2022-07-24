function enviar(){
    var n = document.querySelector('#numtext')
    var resultado = document.querySelector('#resultado')

    if(n.value.length == 0){
        alert('Coloque um valor valido')
    }else if(n.value < 0 || n.value > 5){
        alert(`${n.value} invalido, apenas entre 0 e 5`)
    }else{
        var numero = n.value
        var pc = Math.round(Math.random()*5)
        
        var c = 1
        var maximo = 5
        while(c <= maximo){
            console.log(pc)
            if(numero == pc){
                resultado.innerHTML = 'Voce acertou'
                break
            }else{
                resultado.innerHTML = 'Voce errou'
            }
            n.value = ''
            n.focus()
            c++
        }
    }
}