let button = document.getElementById('button') as HTMLButtonElement
let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement

function somarNumeros(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1+numero2;

    if(devePrintar){
        console.log(frase + resultado)
    }
    return numero1 + numero2
}
let devePrintar = true;
let frase = "o valor é:";

button?.addEventListener('click', (e)=> {
    somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase)
})

