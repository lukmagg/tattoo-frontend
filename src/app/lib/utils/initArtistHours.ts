import { TattooEvent } from '@/Constants'

export function initArtistHours() {
  const hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] // Horas disponibles

  const today = new Date()

  let eventList: TattooEvent[] = []

  // Este map inicializa los horarios disponible del nuevo artista
  hours.map((hour) => {
    const newDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      hour
    )

    const newEvent: TattooEvent = {
      start: new Date(),
      end: new Date(),
      title: '',
      isBooked: false,
    }

    eventList.push(newEvent)
  })

  return eventList
}
