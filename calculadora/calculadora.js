function adicionar(num){
    var res = document.querySelector('#resultado').innerHTML
    resultado.innerHTML = res + num
}

function limpar(){
    resultado.innerHTML = ''
}

function voltar(){
    var resultado = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado.substring(0,resultado.length - 1)
}

function calcular(){
    var resultado = document.querySelector('#resultado').innerHTML
    if(resultado){
        document.querySelector('#resultado').innerHTML = eval(resultado)
    }
}
