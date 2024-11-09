const findMax = arr => {
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, arr[0]);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findMax(array)); // Output: 10
