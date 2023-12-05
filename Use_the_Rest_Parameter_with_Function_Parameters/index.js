//usar rest parameters pode nos ajudar bastante a criar funções mais flexivéis, podemos criar uma função que recebe infinitos argumentos, que sao armazenados dentro de um array, que podem ser acessados a qualquer momento

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }