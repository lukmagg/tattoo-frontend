import { EstimatedTime, TattooEvent } from '@/Constants'

// a partir de un horario de inicio y un tamaño de tattoo, la funcion crea y retorna un nuevo evento
export default function createNewEvent(tattooSize: string, start: Date) {
  let timeTattoo: number = 0

  switch (tattooSize) {
    case 'small':
      timeTattoo = EstimatedTime.small
      break
    case 'medium':
      timeTattoo = EstimatedTime.medium
      break
    case 'large':
      timeTattoo = EstimatedTime.large
      break
  }

  const end = new Date(start.getTime() + timeTattoo)

  const newEvent: TattooEvent = {
    start,
    end,
    title: '',
    isBooked: false,
  }

  return newEvent
}
