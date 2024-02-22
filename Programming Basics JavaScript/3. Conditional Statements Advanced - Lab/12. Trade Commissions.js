function calculateCommission(input) {
    let city = input[0];
    let sales = Number(input[1]);

    let commissionRates = {
        "Sofia": [0.05, 0.07, 0.08, 0.12],
        "Varna": [0.045, 0.075, 0.10, 0.13],
        "Plovdiv": [0.055, 0.08, 0.12, 0.145]
    };

    if (!commissionRates[city] || sales < 0) {
        return "error";
    }

    let rate;
    if (sales <= 500) {
        rate = commissionRates[city][0];
    } else if (sales <= 1000) {
        rate = commissionRates[city][1];
    } else if (sales <= 10000) {
        rate = commissionRates[city][2];
    } else {
        rate = commissionRates[city][3];
    }

    let commission = sales * rate;
    return commission.toFixed(2);
}

console.log(calculateCommission(["Sofia", "1500"])); 