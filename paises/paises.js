function enviar(){
    var p = document.querySelector('#paises')
    var pais = p.value
    var resultado = document.querySelector('#resultado')

    if(p.value.length == 0){
        alert('Tente algo valido')
    }else if(p.value == Number){
        alert('Numero nao e permitido')
    }else{
        resultado.innerHTML = `${pais}<br>`
    }
    if(pais == 'Brasil' || pais == 'brasil' || pais == 'BRASIL'){
        resultado.innerHTML += 'Voce é de casa'
        resultado.style.color = 'yellow'
        resultado.style.background = 'green'
    }else{
        resultado.innerHTML += 'Voce e gringo'
        resultado.style.color = ''
        resultado.style.background = ''
    }

}