import { countries } from "./data/countries.js";

/**
 *
 * @param {HTMLSelectElement} selectFrom
 * @param {HTMLSelectElement} selectTo
 * @param {countries} countries
 */

export function handleSwitchCurrency(selectFrom, selectTo, countries) {
  [selectFrom.value, selectTo.value] = [selectTo.value, selectFrom.value];
  [selectFrom, selectTo].forEach((select) => {
    const selectValue = select.value;
    const imgTag = select.closest(".currency-select").querySelector("img");
    imgTag.src = `https://flagcdn.com/48x36/${countries[selectValue]}.png`;
  });
}
