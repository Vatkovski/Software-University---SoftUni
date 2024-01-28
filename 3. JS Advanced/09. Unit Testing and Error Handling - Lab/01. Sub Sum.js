function sumSubArray(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    start = Math.max(0, start);

    end = Math.min(arr.length - 1, end);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        let num = Number(arr[i]);

        if (isNaN(num)) {
            return NaN;
        }

        sum += num;
    }

    return sum;
}
