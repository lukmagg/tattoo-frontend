export default function nameMonthToNumber(monthName: string) {
  let monthNumber;

  switch (monthName) {
    case "Enero":
      monthNumber = 0;
      break;
    case "Febrero":
      monthNumber = 1;
      break;
    case "Marzo":
      monthNumber = 2;
      break;
    case "Abril":
      monthNumber = 3;
      break;
    case "Mayo":
      monthNumber = 4;
      break;
    case "Junio":
      monthNumber = 5;
      break;
    case "Julio":
      monthNumber = 6;
      break;
    case "Agosto":
      monthNumber = 7;
      break;
    case "Septiembre":
      monthNumber = 8;
      break;
    case "Octubre":
      monthNumber = 9;
      break;
    case "Noviembre":
      monthNumber = 10;
      break;
    case "Diciembre":
      monthNumber = 11;
      break;
    default:
      monthNumber = 0;
  }

  return monthNumber;
}
