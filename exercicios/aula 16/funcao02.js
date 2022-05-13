function soma(n1 = 0, n2 = 0){
    return n1 + n2
}
console.log(soma(2, 5))

//O zero é adicionado nos parâmetros n1 e n2 como valor padrão. Assim, se colocarmos apenas um parâmetro no console.log, aparecerá uma soma entre o valor em questão e o zero.

//Se não fizermos isso, O terminal mostrará uma mensagem indicando que a soma em questão não é um número (NaN).