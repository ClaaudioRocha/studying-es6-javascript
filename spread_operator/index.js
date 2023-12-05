// o es6 introduziu o spread operator, que age como um winrar onde o array eh o exemplo de um arquivo compactado, dessa forma, o spread operator (...args) pega cada item de um array, mas atenção ** ele funciona apenas como paramêtro de uma função ou em um array literal, exemplo: ** 
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);