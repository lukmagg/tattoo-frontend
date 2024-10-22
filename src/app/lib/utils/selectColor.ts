import { Artist } from "@/Constants"

export function selectColor(currentArtistList: Artist[]) {
    const colors = ['text-red-700', 'text-blue-700', 'text-green-700']

    const notAvailableColors: string[] = []

    currentArtistList.forEach((artist: Artist) => {
        notAvailableColors.push(artist.color)
    })

    const availableColours = colors.filter(color => !notAvailableColors.includes(color));

    return availableColours[0]
}