function recebervalores(array, number) {
try{
    if (!array || !number) throw new ReferenceError("Um dos valores não foi enviado");

    if (typeof array !== 'object') throw new TypeError("o Array não é um objeto");

    if (typeof number !== 'number') throw new TypeError("the number isnt a number");
    
    if(array.length !== number) throw new RangeError("O tamanho do array não coincide com o numero enviado")

        return array

}catch(e){
    if (e instanceof ReferenceError){
        console.log("Este erro é um ReferenceError!")
        console.log(e.message)

    }else if (e instanceof TypeError){
        console.log("Este erro é um TypeError!")
        console.log(e.message)

    }else if (e instanceof RangeError){
        console.log("Este erro é um RangeError!")
        console.log(e.message)

    }else{
        console.log("Erro não esperado:"+ e)
    }
}
}
console.log(recebervalores([1,2,3,4,5], 5))