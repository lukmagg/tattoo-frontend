interface time {
  HH: number;
  mm: number;
}

export default function hourFormatter(hour: string) {
  const HH = Number(hour.slice(0, 2));
  const mm = Number(hour.slice(3, 6));

  const formatedHour: time = { HH, mm };

  return formatedHour;
}
