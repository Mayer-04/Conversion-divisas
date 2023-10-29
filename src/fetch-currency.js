export async function fetchCurrency(
  inputAmount,
  selectFrom,
  selectTo,
  conversionResult
) {
  try {
    const inputValue = inputAmount.value;

    if (!inputValue) {
      conversionResult.innerText = "";
      return;
    }

    inputAmount.value = "";
    conversionResult.textContent = "Obteniendo el tipo de cambio...";

    const URL = `https://v6.exchangerate-api.com/v6/5a909b4d87de4799b1a86924/latest/${selectFrom.value}`;

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`ERROR HTTP: ${response.status}`);
    }

    const data = await response.json();
    const exchangeRate = data.conversion_rates[selectTo.value];
    const totalRate = (inputValue * exchangeRate).toFixed(2);

    conversionResult.textContent = `${inputValue} ${selectFrom.value} = $${totalRate} ${selectTo.value}`;
  } catch (error) {
    console.error(`Error al obtener las divisas: ${error.message}`);
  }
}
