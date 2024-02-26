let country_list = {
  "AED" : "AE",
  "AFN" : "AF",
  "XCD" : "AG",
  "ALL" : "AL",
  "AMD" : "AM",
  "ANG" : "AN",
  "AOA" : "AO",
  "AQD" : "AQ",
  "ARS" : "AR",
  "AUD" : "AU",
  "AZN" : "AZ",
  "BAM" : "BA",
  "BBD" : "BB",
  "BDT" : "BD",
  "XOF" : "BE",
  "BGN" : "BG",
  "BHD" : "BH",
  "BIF" : "BI",
  "BMD" : "BM",
  "BND" : "BN",
  "BOB" : "BO",
  "BRL" : "BR",
  "BSD" : "BS",
  "NOK" : "BV",
  "BWP" : "BW",
  "BYR" : "BY",
  "BZD" : "BZ",
  "CAD" : "CA",
  "CDF" : "CD",
  "XAF" : "CF",
  "CHF" : "CH",
  "CLP" : "CL",
  "CNY" : "CN",
  "COP" : "CO",
  "CRC" : "CR",
  "CUP" : "CU",
  "CVE" : "CV",
  "CYP" : "CY",
  "CZK" : "CZ",
  "DJF" : "DJ",
  "DKK" : "DK",
  "DOP" : "DO",
  "DZD" : "DZ",
  "ECS" : "EC",
  "EEK" : "EE",
  "EGP" : "EG",
  "ETB" : "ET",
  "EUR" : "FR",
  "FJD" : "FJ",
  "FKP" : "FK",
  "GBP" : "GB",
  "GEL" : "GE",
  "GGP" : "GG",
  "GHS" : "GH",
  "GIP" : "GI",
  "GMD" : "GM",
  "GNF" : "GN",
  "GTQ" : "GT",
  "GYD" : "GY",
  "HKD" : "HK",
  "HNL" : "HN",
  "HRK" : "HR",
  "HTG" : "HT",
  "HUF" : "HU",
  "IDR" : "ID",
  "ILS" : "IL",
  "INR" : "IN",
  "IQD" : "IQ",
  "IRR" : "IR",
  "ISK" : "IS",
  "JMD" : "JM",
  "JOD" : "JO",
  "JPY" : "JP",
  "KES" : "KE",
  "KGS" : "KG",
  "KHR" : "KH",
  "KMF" : "KM",
  "KPW" : "KP",
  "KRW" : "KR",
  "KWD" : "KW",
  "KYD" : "KY",
  "KZT" : "KZ",
  "LAK" : "LA",
  "LBP" : "LB",
  "LKR" : "LK",
  "LRD" : "LR",
  "LSL" : "LS",
  "LTL" : "LT",
  "LVL" : "LV",
  "LYD" : "LY",
  "MAD" : "MA",
  "MDL" : "MD",
  "MGA" : "MG",
  "MKD" : "MK",
  "MMK" : "MM",
  "MNT" : "MN",
  "MOP" : "MO",
  "MRO" : "MR",
  "MTL" : "MT",
  "MUR" : "MU",
  "MVR" : "MV",
  "MWK" : "MW",
  "MXN" : "MX",
  "MYR" : "MY",
  "MZN" : "MZ",
  "NAD" : "NA",
  "XPF" : "NC",
  "NGN" : "NG",
  "NIO" : "NI",
  "NPR" : "NP",
  "NZD" : "NZ",
  "OMR" : "OM",
  "PAB" : "PA",
  "PEN" : "PE",
  "PGK" : "PG",
  "PHP" : "PH",
  "PKR" : "PK",
  "PLN" : "PL",
  "PYG" : "PY",
  "QAR" : "QA",
  "RON" : "RO",
  "RSD" : "RS",
  "RUB" : "RU",
  "RWF" : "RW",
  "SAR" : "SA",
  "SBD" : "SB",
  "SCR" : "SC",
  "SDG" : "SD",
  "SEK" : "SE",
  "SGD" : "SG",
  "SKK" : "SK",
  "SLL" : "SL",
  "SOS" : "SO",
  "SRD" : "SR",
  "STD" : "ST",
  "SVC" : "SV",
  "SYP" : "SY",
  "SZL" : "SZ",
  "THB" : "TH",
  "TJS" : "TJ",
  "TMT" : "TM",
  "TND" : "TN",
  "TOP" : "TO",
  "TRY" : "TR",
  "TTD" : "TT",
  "TWD" : "TW",
  "TZS" : "TZ",
  "UAH" : "UA",
  "UGX" : "UG",
  "USD" : "US",
  "UYU" : "UY",
  "UZS" : "UZ",
  "VEF" : "VE",
  "VND" : "VN",
  "VUV" : "VU",
  "YER" : "YE",
  "ZAR" : "ZA",
  "ZMK" : "ZM",
  "ZWD" : "ZW"
}
const fromCurrency = document.getElementById("fromCurrency");
const fromAmount = document.getElementById("fromAmount");
const toCurrency = document.getElementById("toCurrency");
const toAmount = document.getElementById("toAmount");
const swapbtn = document.querySelector(".swap");
const rateChart = document.querySelector(".result");

const selects = document.querySelectorAll(".currency-select");

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
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  calculate();
}


selects.forEach((item) => {
  item.addEventListener("input", (e) => {
    console.log(e.target)
    loadFlag(e.target);
  })
})

function loadFlag(selectElement) {
  const image = selectElement.parentElement.querySelector("img");
  const countryCode = country_list[selectElement.value];
  image.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}



fromCurrency.addEventListener("input", calculate);
fromAmount.addEventListener("input", calculate);
toCurrency.addEventListener("input", calculate);
toAmount.addEventListener("input", updateToAmount);
swapbtn.addEventListener("click", swapcurr);
calculate();
