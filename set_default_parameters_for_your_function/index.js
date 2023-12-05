// usando arrow functions para declarar um valor inicial para um paramêtro na função, seguimos o seguinte exemplo:
const increment = (number, value = 1) => number + value;
// caso o paramêtro "value" nao for passado, ele iniciará com 1.