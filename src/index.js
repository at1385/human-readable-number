module.exports = function toReadable(number) {
    const numbersToWords = {
        'units': {
            '0': 'zero',
            '1': 'one',
            '2': 'two',
            '3': 'three',
            '4': 'four',
            '5': 'five',
            '6': 'six',
            '7': 'seven',
            '8': 'eight',
            '9': 'nine',
        },
        'tens': {
            '10': 'ten',
            '11': 'eleven',
            '12': 'twelve',
            '13': 'thirteen',
            '14': 'fourteen',
            '15': 'fifteen',
            '16': 'sixteen',
            '17': 'seventeen',
            '18': 'eighteen',
            '19': 'nineteen',
            '2': 'twenty',
            '3': 'thirty',
            '4': 'forty',
            '5': 'fifty',
            '6': 'sixty',
            '7': 'seventy',
            '8': 'eighty',
            '9': 'ninety',
        },
        'hundreds': 'hundred',
    };

    const numericChars = `${number}`.split('');

    if (number < 10) {
        return numbersToWords.units[`${number}`];
    }

    if (number < 20) {
        return numbersToWords.tens[`${number}`];
    }

    if (number < 100) {
        return numericChars[1] !== '0'
            ? `${numbersToWords.tens[numericChars[0]]} ${numbersToWords.units[numericChars[1]]}`
            : numbersToWords.tens[numericChars[0]];
    }

    if (`${numericChars[1]}${numericChars[2]}` < 10) {
        return numericChars[2] !== '0'
            ? `${numbersToWords.units[numericChars[0]]} ${numbersToWords.hundreds} ${numbersToWords.units[numericChars[2]]}`
            : `${numbersToWords.units[numericChars[0]]} ${numbersToWords.hundreds}`;
    }

    if (`${numericChars[1]}${numericChars[2]}` < 20) {
        return `${numbersToWords.units[numericChars[0]]} ${numbersToWords.hundreds} ${numbersToWords.tens[`${numericChars[1]}${numericChars[2]}`]}`
    }

    if (number < 1000) {
        return numericChars[2] !== '0'
            ? `${numbersToWords.units[numericChars[0]]} ${numbersToWords.hundreds} ${numbersToWords.tens[numericChars[1]]} ${numbersToWords.units[numericChars[2]]}`
            : `${numbersToWords.units[numericChars[0]]} ${numbersToWords.hundreds} ${numbersToWords.tens[numericChars[1]]}`;
    }

    return 'too big number, must be < 1000';
}
