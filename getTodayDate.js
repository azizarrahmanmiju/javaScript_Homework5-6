

const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDay();

    return `${year}-${month}-${day}`
}

console.log(getTodayDate());