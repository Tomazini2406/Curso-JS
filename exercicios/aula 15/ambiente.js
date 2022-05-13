let num = [5,4,7,8,9]
num[5] = 6
num.sort()
num.push(7)
//Repare que o push está depois do sort, pois como eu quero que o 7 esteja no último índice, o array não pode ser embaralhado depois.

//Caso contrário o 7 não estaria como último elemento
console.log(`O nosso valor é ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
    if(pos == -1){
        console.log('O valor não foi encontrado')

    }else{
        console.log(`O valor está na posição ${pos}`)
}
