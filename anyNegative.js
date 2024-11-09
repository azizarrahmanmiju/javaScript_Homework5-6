function anyNegative(arr) {
    return arr.some(num => num < 0);
}


console.log(anyNegative([1, 2, 3, -4, -5])); // Output: true
console.log(anyNegative([1, 2, 3, 4, 5]));   // Output: false
