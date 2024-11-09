const capitalizeWords = sentence => {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

const sentence = "hello I am azizar rahman";
console.log(capitalizeWords(sentence)); // Output: "Hello World From Chatgpt"
