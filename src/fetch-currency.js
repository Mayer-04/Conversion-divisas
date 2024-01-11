/**
 *
 * @param {HTMLInputElement} inputAmount
 * @param {HTMLSelectElement} selectFrom
 * @param {HTMLSelectElement} selectTo
 * @param {HTMLParagraphElement} conversionResult
 * @return {Promise<void>}
 */

export async function fetchCurrency({
  inputAmount,
  selectFrom,
  selectTo,
  conversionResult,
}) {
  try {
    const inputValue = inputAmount.value;
    if (!inputValue) {
      conversionResult.classList.remove("hidden");
      conversionResult.textContent = "Ingresa una cantidad válida.";
      return;
    }

    conversionResult.textContent = "Obteniendo el tipo de cambio...";

    const API_URL = `https://v6.exchangerate-api.com/v6/5a909b4d87de4799b1a86924/latest/${selectFrom.value}`;

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`ERROR HTTP: ${response.status}`);
    }
    const data = await response.json();

    const exchangeRate = data.conversion_rates[selectTo.value];
    const totalRate = (inputValue * exchangeRate).toFixed(2);

    const formattedAmount = new Intl.NumberFormat(selectFrom.value, {
      style: "currency",
      currency: selectTo.value,
      currencyDisplay: "narrowSymbol",
    });

    const formattedTotalRate = formattedAmount.format(totalRate);

    const message = `${inputValue} ${selectFrom.value} = ${formattedTotalRate} ${selectTo.value}`;

    conversionResult.classList.remove("hidden");
    conversionResult.textContent = message;
  } catch (error) {
    throw new Error(`Error al obtener las divisas: ${error}`);
  }
}
