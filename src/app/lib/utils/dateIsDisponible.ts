export default function dateIsDisponible(datesList: any, dateToCompare: any) {
  let disponible = true;

  datesList.map((date: any) => {
    if (dateToCompare >= date.start && dateToCompare <= date.end) {
      disponible = false;
    }
  });

  return disponible;
}
