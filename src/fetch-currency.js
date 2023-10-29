/**
 *
 * @param {HTMLInputElement} inputAmount
 * @param {HTMLSelectElement} selectFrom
 * @param {HTMLSelectElement} selectTo
 * @param {HTMLParagraphElement} conversionResult
 */

export async function fetchCurrency(
  inputAmount,
  selectFrom,
  selectTo,
  conversionResult
) {
  const inputValue = inputAmount.value;

  inputAmount.value = "";

  if (!inputValue) {
    return;
  }

  const URL = `https://v6.exchangerate-api.com/v6/5a909b4d87de4799b1a86924/latest/${selectFrom.value}`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`ERROR HTTP: ${response.status}`);
    }
    const data = await response.json();
    const exchangeRate = data.conversion_rates[selectTo.value];

    const totalRate = (inputValue * exchangeRate).toFixed(2);
    conversionResult.textContent = `${inputValue} ${selectFrom.value} = $${totalRate} ${selectTo.value}`;
  } catch (error) {
    throw new Error(`Error al obtener las divisas: ${error.message}`);
  }
}
