let a = document.querySelector('#txtaluno')
let m = document.querySelector('#txtmateria')
let n = document.querySelector('#txtnota')

let lista_nota = []
let total_notas = 5

let tabela = document.querySelector('#tabela')
let res_nota = document.querySelector('#resultado-notas')
let resultado = document.querySelector('#resultado')



function adicionar(){
    if(n.value.length == 0){
        alert('Adicione no minimo 1 nota')
        n.value = ''
        n.focus()
    }else if(n.value < 0 || n.value > 10){
        alert('Notas permitidas entre 0 e 10')
        n.value = ''
        n.focus()
    }else{
        if(lista_nota.length < total_notas){
            lista_nota.push(n.value)
            let escrito = document.createElement('option')
            escrito.text = `Nota: ${n.value}`
            tabela.appendChild(escrito)
            res_nota.innerHTML = ''

            console.log(lista_nota)
            n.value = ''
            n.focus()
        }else{
            alert('Maximo de notas atingido')
            n.value = ''
        }
        let soma = 0
        let media = 0

        for(let cont in lista_nota){
            soma += lista_nota
        }
        console.log()
    }
}

function enviar(){

}