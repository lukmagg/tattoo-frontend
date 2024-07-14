import dayjs from "dayjs";

export default function makeDate(
  day: number,
  month: number,
  year: number,
  hour: number,
  min: number
) {
  const date = dayjs(new Date(year, month, day, hour, min)).format(
    "ddd MMM DD YYYY HH:mm:ss [GMT]Z [(]ZZ[)]"
  );

  return date;
}
