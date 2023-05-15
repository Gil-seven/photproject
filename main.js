const currencyRatio = {
    USD: {
        USD: 1,
        KRW: 1338.10,
        VND: 23459.00,
        JPY: 136.08,
        EUR: 0.92,
        unit: "달러",
        img: "https://cdn-icons-png.flaticon.com/512/555/555526.png"
    },
    KRW: {
        USD: 0.00075,
        KRW: 1,
        VND: 17.53,
        JPY: 0.10,
        EUR: 0.00069,
        unit: "원",
        img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png"
    },
    VND: {
        USD: 0.000043,
        KRW: 0.057,
        VND: 1,
        JPY: 0.0058,
        EUR: 0.000039,
        unit: "동",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png"
    },
    JPY: {
        USD: 0.000043,
        KRW: 9.82,
        VND: 172.39,
        JPY: 1,
        EUR: 0.0068,
        unit: "엔",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAnFBMVEX////7Cwz19fXj4+PZ2dn6+vr4DA76AAD8///3AAD5//////30AAD2///rYmH4Bgf18e7s7OzS0tL509LuuLf4r7HxnpbvmZP0n571sa/tvbv419f2+fXz393xoaDqUE7zKSjzFxHueHXrzsvuOjLt1tX06ObxGxrpiYjtgYDskY/wyMfzQkXsqqbuamnw6eH2uLDzXlnuRj/uUUkU8InOAAADKElEQVR4nO2aXXfaMAxAE9pYsuOQdM1WoEBCCGGUdqzr//9vc/qxQguNbBI4Z0f3jbd7JFm2FDyPYRiGYRiGYRiGYbYJemdhV+Lq2+V52LG4+GB1IgK2YAu2YAu2OJ8Fhl4YntsCFXqIZ7MIEVVynX7/cXMzGI5ux1hH5dQWGE2mWS60BIOUs7yfThQGp7MI6zCkfQ0QCyH8FwD0rJgrtKsRdwsjEY1KCX6t8GrxbBODzhbRiSy8qMoA/gVhC+GDLhKb8nC3UOlSCrHPwhdxDOXC4sS4WqD6aZJxgFoNdKrIRepmYeqykIccXiz8WE+jji2ildybix3kkJoUNwt190UktjTWRA0nC5XKmGIRzxbdWeBGy8Z0PAP3ESkaDhahohTFa04eurLANakoakSsE0XoXi4WGd1CyJUiRMPeog4FMR+GOK+aJewtAvxFroo6GvJBdWDhjXVMlzAW911kBFNyVTxb+LNbr7E+7S1WBy+xvRbC9PH2LXoZWCTEAEXzWbW2qKzKorYo24+FmmgrB5MT3XxIrC3ojfPNQo7bt0gty8IXsGndAn9bHZEa2DR2jJNYNEnYW4xs68KHpHWLaE584Lwjx+33i4kmPfa2QrFsHhftu1ZpWRjw2L5FGPZt75FB+10rxIFVwxC+HDVKONypE7u2BTnhEWltEUbl3kH9oEXRxSsnxKnNi8+X1528+LwkJ9enEPBIGZldJoEBuXEJX6+7mkcSemXAo6JsuFwmRHOXEC1AV6TFkotFqArYv0r6kA8BU0o+HDcH2DM5aRzQxAyKiLZxdLIIsVpCs0W9N6Ctthy3azhp0jDp+NOj7l5dLdRi9rWGkE8JoV8dZeGFapPBFy8NkIXCgLpqdN+6orqRBy82WA7Ja8ajLMxUMH/Sn4+s+S11USlyII60QFTrUkK9VHnbxtc7cCn7c2ye09uyqLOiFqtSwztSP91dKXJZtmIRBgGq5PahyMo8z8v7rBhOAg8D269FLXw3M4lB1UuqKukhZZXWjcUWrl8R/0cLV9iCLdiCLdjiaIury4uzsGvhnedPpj3bv40wDMMwDMMwDMO0zF9IHTNcIQBKKAAAAABJRU5ErkJggg=="
    },
    EUR: {
        USD: 1.09,
        KRW: 1453.77,
        VND: 25520.58,
        JPY: 148.03,
        EUR: 1,
        unit: "유로",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ19ubpQFqyI72ouCh_Ge2RNEv_rTUba9A_7H7pWvJtQ&s"
    }
};

// console.log(currencyRatio["VND"]["unit"]);
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let toBtn = document.getElementById("to-btn");
let fromBtn = document.getElementById("from-btn");
let fromCurrency = 'KRW';
let toCurrency = 'USD';

document.querySelectorAll("#from-currency-list li").forEach(function (item) {
    item.addEventListener("click", function () {
        fromCurrency = this.id;
        fromBtn.innerHTML = `<img class="flag-img"src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
        convert("from");
    });
});

document.querySelectorAll("#to-currency-list li").forEach(function (item) {
    item.addEventListener("click", function () {
        toCurrency = this.id;
        toBtn.innerHTML = `<img class="flag-img"src="${currencyRatio[toCurrency].img}"/>${toCurrency}`;
        convert("from");
    });
});

function convert(type) {
    console.log("here");
    let amount = 0;
    if (type == "from") {
        amount = document.getElementById("fromAmount").value;
        let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
        document.getElementById("toAmount").value = convertedAmount;
        renderKoreanNumber(amount, convertedAmount);
    }
    else{
        amount = document.getElementById("toAmount").value;
        let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
        document.getElementById("fromAmount").value = convertedAmount;
        renderKoreanNumber(convertedAmount, amount);
    }
}

function renderKoreanNumber(from, to){
    document.getElementById("fromNumToKorea").textContent = readNum(from) + currencyRatio[fromCurrency].unit;
    document.getElementById("toNumToKorea").textContent = readNum(to) + currencyRatio[toCurrency].unit;
}

function readNum(num){
    let resultString = "";
    let resultArray= [];
    for(let i = 0; i < unitWords.length; i++){
        let unitResult = (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0){
            resultArray[i] = unitResult;
        }
    }
    for(let i = 0; i<resultArray.length; i++){
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
}

