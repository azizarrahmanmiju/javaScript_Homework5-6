const reverseWord = sentence => {
    let words = sentence.split(" ");
    console.log(words);

    const reveresed = words.map((word) => word.split("").reverse().join('')).join(' ');


    console.log(reveresed);
}

reverseWord("I love You"); // Output: I evol uoy
