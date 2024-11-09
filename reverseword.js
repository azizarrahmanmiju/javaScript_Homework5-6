const reverseWord = sentence => {
    let words = sentence.split(" ");


    const reveresed = words.map((word) => word.split("").reverse().join('')).join(' ');
    return reveresed;
}

reverseWord("I love You"); // Output: I evol uoy
