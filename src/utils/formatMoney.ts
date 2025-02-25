export default function formatMoney(numberToFormat: number | undefined) {
  const formatedMoney = new Intl.NumberFormat("BRL")
    .format(numberToFormat!)
    .split(",")[0];

  return formatedMoney;
}
