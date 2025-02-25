export function formatarData(dateToFormat: string | undefined) {
  const dateFormated = dateToFormat?.split("-").reverse().join("/");
  return dateFormated;
}
