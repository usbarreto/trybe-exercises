const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};
const currentTemperature = getMarsTemperature();

// crie a função sendMarsTemperature abaixo
// imprime "Mars temperature is: 20 degree Celsius", por exemplo
function sendMarsTemperature () {
    setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degrees Celsius`), messageDelay());
} 

sendMarsTemperature();
