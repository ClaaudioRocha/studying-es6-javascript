// bem, se tivermos um objeto, podemos destruturar ele e atribuir valor a variaveis fora do objeto seguindo o seguinte exemplo:
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  const { today, tomorrow } = HIGH_TEMPERATURES;
  // Only change code above this line
  // a const 'today' receberá o valor de HIGH_TEMPERATURES.today; e assim vai.