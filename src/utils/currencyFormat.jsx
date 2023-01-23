import numeral from "numeral";

export default function (number) {
  const myNumeral = numeral(number);
  return myNumeral.format("$0,0").replace(",", ".");
}
