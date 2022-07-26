let a = document.querySelector('#txtaluno')
let d = document.getElementsByName('disciplina')
let n = document.querySelector('#txtnota')
let img = document.querySelector('#imagem')

let lista_nota = []
let total_notas = 5

let tabela = document.querySelector('#tabela')
let res_nota = document.querySelector('#resultado-notas')
let resultado = document.querySelector('div#resultado')

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
            lista_nota.push(Number(n.value))
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
    }
}

function enviar(){
    let soma = 0
    let media = 0

    for(let pos in lista_nota){
        soma += lista_nota[pos]
    }
    media = soma / total_notas

    if(a.value.length == 0 || lista_nota.length < total_notas){
        alert('Dados insuficientes')
    }else{
        if(d[0].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Mátematica<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/matematica.png'
        }
        if(d[1].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Poruguês<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/portugues.png'
        }
        if(d[2].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Tecnologia<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/tecnologia.png'
        }
        if(d[3].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Educação Física<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/ed fisica.png'
        }
        if(d[4].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Artes<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/artes.png'
        }
        if(d[5].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Física<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/fisica.png'
        }
        if(d[6].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> História<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/historia.png'
        }
        if(d[7].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Química<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/quimica.png'
        }
        if(d[8].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Biologia<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/biologia.png'
        }
        if(d[9].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Inglês<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/ingles.png'
        }
        if(d[10].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Sociologia<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/sociologia.png'
        }
        if(d[11].checked){
            resultado.innerHTML += `<strong>Nome do aluno:</strong> ${a.value}<br>`
            resultado.innerHTML += `<strong>Disciplina:</strong> Filosofia<br>`
            resultado.innerHTML += `<strong>Média final:</strong> ${media}<br>`  
            img.src = 'imagens/filosofia.png'
        }
        var fundo = document.querySelector('main')
        if(media >= 5){
            resultado.innerHTML += '<strong>Situação:</strong> Aprovado'
            fundo.classList.add('aprovado')
        }else if(media < 5){
            resultado.innerHTML += '<strong>Situação:</strong> Repovado'
            fundo.classList.add('reprovado')
        }
        a.value.length = ''
        lista_nota.length = ''
    }
}