// Genera las opciones de horario de 10 AM a 8 PM
export default function generateTimeOptions(): string[] {
  const options: string[] = []
  for (let hour = 10; hour <= 20; hour++) {
    options.push(hour.toString() + ':00 hs')
  }
  return options
}
