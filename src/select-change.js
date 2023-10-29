import { countries } from "./data/countries.js";

/**
 *
 * @param {HTMLSelectElement} select
 * @param {countries} countries
 */

export function handleSelectChange(select, countries) {
  const selectValue = select.value;
  const imgTag = select.closest(".currency-select").querySelector("img");
  imgTag.src = `https://flagcdn.com/48x36/${countries[selectValue]}.png`;
}
