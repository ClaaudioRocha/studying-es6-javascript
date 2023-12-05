//usando const nao podemos alterar o valor chamando o identificador da variavel, mas podemos alteras cada um dos objetos presentes nele; ex:
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
