const fromCurrency = document.getElementById('fromCurrency');
const fromAmount = document.getElementById('fromAmount');
const toCurrency = document.getElementById('toCurrency');
const toAmount = document.getElementById('toAmount');
const swapbtn = document.querySelector('.swap');
const rateChart = document.querySelector('.result');
async function calculate(){
    let fromAmo = fromAmount.value;
    let fromCurr = fromCurrency.value;
    let toAmo = toAmount.value;
    let toCurr = toCurrency.value;
    const response = await fetch(`https://open.exchangerate-api.com/v6/latest/${fromAmo}`);
    const data = await response.json();
    const rate = data.rates[toAmo];
    console.log(rate);
    toCurrency.value = (fromCurrency.value * rate).toFixed(2);
    rateChart.innerHTML = `
        <p> 1 ${fromAmo} = ${rate.toFixed(4)} ${toAmo}</p>
        <p> 1 ${toAmo} = ${(1/rate).toFixed(4)} ${fromAmo}</p>
        <h2>${fromCurr} ${fromAmo} = ${(fromCurrency.value * rate).toFixed(2)} ${toAmo}</h2>
    `;
}

function swapcurr(){
    let temp = fromAmount.value;
    fromAmount.value = toAmount.value;
    toAmount.value = temp;

    calculate();
}


fromCurrency.addEventListener('input', calculate);
fromAmount.addEventListener('change', calculate);
toCurrency.addEventListener('input', calculate);
toAmount.addEventListener('change', calculate);
swapbtn.addEventListener('click', swapcurr);
calculate();