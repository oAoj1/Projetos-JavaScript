function enviar(){
    var pais = window.document.getElementById('pais')
    var resultado = window.document.getElementById('resultado')
    var resultado_paises = window.document.getElementById('resultado_paises')
    var paises = (pais.value)

    resultado.innerHTML = `<strong>País:</strong> ${paises}`

    if(paises == 'brasil' || paises == 'Brasil'){
        resultado_paises.innerHTML = 'Voce é de casa!'
    }else{
        resultado_paises.innerHTML = 'Voce é gringo!'
    }
}