export default function (number) {
    const newNumber = number.toLocaleString('co-CO', { style: 'currency', currency: 'COP'});
    return newNumber.substring(0, newNumber.length - 3);
}