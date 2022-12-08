/*Crie um programa onde você insira uma frase e um número (em campos separados). O programa deve exibir a frase o número de vezes indicado*/

function frase() {
    let nome = document.getElementById("nome").value
    let numero = parseFloat(document.getElementById("numero").value)

    let contador = 1
    while(contador <= numero){
        document.getElementById("resposta").innerHTML += nome
        contador = contador + 1
    }  
}
