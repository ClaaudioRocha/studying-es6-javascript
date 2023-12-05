// quando temos uma variavel sendo declarada com "var", ela se torna uma variavel global ou local (se dentro do escopo de uma função), o que pode gerar erros, com o let, seu escopo eh limitado dentro de onde foi declarado;
//exemplo de uma funçao utilizando let com escopo limitado:
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }