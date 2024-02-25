const fromCurrency = document.getElementById("fromCurrency");
const fromAmount = document.getElementById("fromAmount");
const toCurrency = document.getElementById("toCurrency");
const toAmount = document.getElementById("toAmount");
const swapbtn = document.querySelector(".swap");
const rateChart = document.querySelector(".result");

async function calculate() {
  let fromCurr = fromCurrency.value;
  let toCurr = toCurrency.value;

  const response = await fetch(
    `https://open.exchangerate-api.com/v6/latest/${fromCurr}`
  );
  const data = await response.json();
  const rate = data.rates[toCurr];

  // Update the values
  toAmount.value = (fromAmount.value * rate).toFixed(2);

  rateChart.innerHTML = `
        <p> 1 ${fromCurr} = ${rate.toFixed(4)} ${toCurr}</p>
        <p> 1 ${toCurr} = ${(1 / rate).toFixed(4)} ${fromCurr}</p>
        <h2>${fromAmount.value} ${fromCurr} = ${(fromAmount.value * rate).toFixed(2)} ${toCurr}</h2>
    `;
}

async function updateToAmount() {
  let fromCurr = fromCurrency.value;
  let toCurr = toCurrency.value;

  const response = await fetch(
    `https://open.exchangerate-api.com/v6/latest/${toCurr}`
  );
  const data = await response.json();
  const rate = data.rates[fromCurr];

  // Update the values
  fromAmount.value = (toAmount.value * rate).toFixed(2);
}

function swapcurr() {
  let tempCurr = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCurr;
  calculate();
}

fromCurrency.addEventListener("input", calculate);
fromAmount.addEventListener("input", calculate);
toCurrency.addEventListener("input", calculate);
toAmount.addEventListener("input", updateToAmount);
swapbtn.addEventListener("click", swapcurr);
calculate();
