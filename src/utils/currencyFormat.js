export default function (number) {
    const newNumber = new Intl.NumberFormat('co-CO', { style: 'currency', currency: 'COP'}).format(number);
    return newNumber.substring(0, newNumber.length - 3);
}