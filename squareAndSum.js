

const squareAndSum = array => {
    let sum = 0;
    let Squre = array.map((element) => {
        sum += element * element;
        return element += element * element;
    }).join(' ');
    console.log(Squre)
    return sum;
}


console.log(squareAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));