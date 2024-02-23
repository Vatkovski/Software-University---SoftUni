function calculator() {
    return {
        init: function (s1, s2, result) {
            selector1 = document.querySelector(s1);
            selector2 = document.querySelector(s2);
            resultSelector = document.querySelector(result);
        },
        add: function () {
            resultSelector.value = Number(selector1.value) + Number(selector2.value);
        },
        subtract: function () {
            resultSelector.value = Number(selector1.value) - Number(selector2.value);
        }
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 
