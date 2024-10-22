import { Artist } from "@/Constants"

export function availableColor(color: string, currentArtistList: Artist[]): boolean {

    let colorIsAvailabe = true
    currentArtistList.forEach((artist: Artist) => {
        console.log(`color: ${color}`)
        console.log(`artist color: ${artist.color}`)

        if (artist.color === color) {
            colorIsAvailabe = false
        }
    })

    return colorIsAvailabe
}