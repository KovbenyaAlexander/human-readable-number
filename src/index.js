module.exports = function toReadable(number) {

    const numbers = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty'
    ];

    const tens = [
        '',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    if (!number) {
        return 'zero';
    }

    let result = [];
    let degree;

    if (number > 99) {
        degree = Math.floor(number / 100);
        result.push(`${numbers[degree]} hundred `);
        number = number - degree * 100;
    }

    if (number > 19) {
        degree = Math.floor(number / 10);
        number = number - degree * 10;
        result.push(`${tens[degree]} `);
        result.push(`${numbers[number]} `);
    } else {
        result.push(numbers[number]);
    }

    return result.join(``).trim();

}
