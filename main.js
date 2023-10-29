import "./style.css";
import { countries } from "./src/data/countries.js";
import { initialCountry } from "./src/utils/initial-country.js";
import { handleSelectChange } from "./src/select-change.js";
import { fetchCurrency } from "./src/fetch-currency.js";
import { handleSwitchCurrency } from "./src/switch-currency.js";

const currenciesContainer = document.getElementById("currencies");
const inputAmount = document.getElementById("amount");
const selectFrom = document.getElementById("select-from");
const selectTo = document.getElementById("select-to");
const selectAll = document.querySelectorAll(".select");
const switchCurrency = document.querySelector(".switch-currency");
const conversionResult = document.querySelector(".conversion-result");

const convertToArray = Array.from(selectAll);
const countryKey = Object.keys(countries);

convertToArray.map((select, index) => {
  countryKey.forEach((country) => {
    const countryFrom = index === 0 && country === initialCountry.unitedStates;
    const countryTo = index === 1 && country === initialCountry.colombia;
    const selected = countryFrom || countryTo ? "selected" : "";
    select.insertAdjacentHTML(
      "beforeend",
      `
      <option class="option" value="${country}" ${selected}>${country}</option>
      `
    );
  });
  select.addEventListener("change", () => {
    handleSelectChange(select, countries);
  });
});

currenciesContainer.addEventListener("submit", (event) => {
  event.preventDefault();

  fetchCurrency(inputAmount, selectFrom, selectTo, conversionResult);
});

switchCurrency.addEventListener("click", () => {
  handleSwitchCurrency(selectFrom, selectTo, countries);
});
