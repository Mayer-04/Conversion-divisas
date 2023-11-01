import { countries } from "./data/countries.js";

/**
 *
 * @param {HTMLSelectElement} selectFrom
 * @param {HTMLSelectElement} selectTo
 * @param {countries} countries
 * @param {HTMLParagraphElement} conversionResult
 */

export function handleSwitchCurrency(
  selectFrom,
  selectTo,
  countries,
  conversionResult
) {
  [selectFrom.value, selectTo.value] = [selectTo.value, selectFrom.value];
  
  const selectFromImg = selectFrom.closest(".currency-select").querySelector("img");
  const selectToImg = selectTo.closest(".currency-select").querySelector("img");
  selectFromImg.src = `https://flagcdn.com/48x36/${countries[selectFrom.value]}.png`;
  selectToImg.src = `https://flagcdn.com/48x36/${countries[selectTo.value]}.png`;

  conversionResult.classList.add("hidden");
}


