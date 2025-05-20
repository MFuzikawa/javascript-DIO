
interface Pessoa{
    nome:string,
    idade: number,
    profissao?: Profissao
}
enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}
interface Estudante extends Pessoa {
    materias:string[]
}
const marifranca: Estudante = {
    nome: "marifranca",
    idade: 22,
    profissao: Profissao.Atriz,
    materias:["Inglês, Português, Matematica"]
}
const franca: Estudante = {
    nome: "franca",
    idade: 22,
    materias:["Inglês, Português, Matematica"]
}
const vannesa: Pessoa = {
    nome: "Vanessa",
    idade: 22,
    profissao: Profissao.Desenvolvedora
}
const maria: Pessoa = {
    nome: "maria",
    idade: 22,
    profissao: Profissao.JogadoraDeFutebol
}
function listar(lista:string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}
listar(marifranca.materias)