// anteriormente, eu vi que podemos sim alterar o valor de um objeto dentro de uma const, porem existe uma forma de torna-los imutáveis: usando o `Object.freeze(i)`

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS)
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();