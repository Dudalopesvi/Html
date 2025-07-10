let numeros = []

let nomes =["Ana","Bruno","Carlos","Maria","Leandro"]

console.log(nomes[1])

// Trocando Carlos por Zeca
nomes[2] = "Zeca"
console.log(nomes)
/*
for (let i = 0; i < nomes.length; i++) {
    if (nomes [i] ==="Leandro"){
        console.log(`Leandro foi encotrado no indice ${i}`)
    }
}
*/
// funções
function encontrar(nome,lista){
for (let i = 0; i < lista.length; i++) {
    if (lista [i] ===nome){
        console.log(`${nome} foi encotrado no indice ${i}`)
        return i; // retorna a posição onde a pessoa está no vetor
    }
}
return -1; // A Pessoa não existe no vetor então uma posição inválida é retornada 
}

const indice = encontrar("Fernanda", nomes)

if(indice === -1) {
    console.log("Usuário não existe na base de dados")
} else {
    console.log (`${nomes[indice]} encontrado na posição ${indice}`)
}