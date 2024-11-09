const findvowel = arr => {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    return vowelnumber = arr.reduce((count, index) => {
        return vowel.includes(index) ? count + 1 : count;
    }, 0)
}

myarray = ['s', 's', 'u', 'b', 'i', 'u']
console.log(findvowel(myarray));  // print value : 3