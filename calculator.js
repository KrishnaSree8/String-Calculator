function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterSection = parts[0].slice(2);
        
        if (delimiterSection.includes("[")) {
            const delimiters = delimiterSection.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));
            delimiter = new RegExp(delimiters.join("|"));
        } else {
            delimiter = new RegExp(delimiterSection);
        }
        
        numbers = parts[1];
    }
    
    const nums = numbers.split(delimiter);
    const negatives = nums.filter(num => parseInt(num) < 0);
    
    if (negatives.length > 0) {
        throw new Error("Negatives not allowed: " + negatives.join(", "));
    }
    
    return nums.reduce((sum, num) => {
        const number = parseInt(num);
        return number > 1000 ? sum : sum + number;
    }, 0);
}

module.exports = add;
