import { TattooEvent } from '@/Constants'
import { Dayjs } from 'dayjs'

export default function dateIsDisponible(
  datesList: TattooEvent[],
  dateToCompare: Dayjs
) {
  let disponible = true

  datesList.map((date: TattooEvent) => {
    if (
      dateToCompare.toDate().getTime() >= date.start.getTime() &&
      dateToCompare.toDate().getTime() <= date.end.getTime()
    ) {
      disponible = false
    }
  })

  return disponible
}
