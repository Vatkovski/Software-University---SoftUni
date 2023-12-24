function sortArray(arr) {
    arr.sort((a, b) => {
        if (a.length - b.length !== 0) {
            return a.length - b.length;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });
    console.log(arr.join('\n'));
}

let arr1 = ['alpha', 'beta', 'gamma'];
sortArray(arr1);

let arr2 = ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'];
sortArray(arr2);

let arr3 = ['test', 'Deny', 'omen', 'Default'];
sortArray(arr3);
