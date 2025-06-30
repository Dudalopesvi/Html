const numeros = [3,7,18,21,33]

function CalcularMedia() {
 soma = 0, media = 0

 for(i=0; i < numeros.length; i++) {
    soma = soma + numeros[i];
}
 media = soma / numeros.length
 alert (media)

}




