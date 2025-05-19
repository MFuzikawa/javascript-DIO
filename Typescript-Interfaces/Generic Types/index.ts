/* Jeito errado de fazer, temos que tipar os parametros */

 /* 
 function adicionaApendiceALista(array, value) {
    return array.map(item => item + value)
}
adicionaApendiceALista([1,2,3], 1)
*/

/*jeito correto o T é o tipo generico*/ 
function adicionaApendiceALista<T>(array:T[], value:T) {
return array.map(() =>  value)
}
adicionaApendiceALista([1,2,3], 4)