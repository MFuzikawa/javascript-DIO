//Variaveis com propriedades readonly e private

interface Cachorro{
     readonly nome:string;
    readonly idade: number;
     readonly parqueFavorito?: string;
}

type CachoorroSomenteeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K] 
}

class MeuCachorro implements Cachorro{

     idade;
     nome;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Plinio', 13);
console.log(cao)