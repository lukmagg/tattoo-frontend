export function parseArtistColor(color: string): string {
    let res: string = ''
    switch (color) {
        case 'text-red-700':
            res = 'bg-red-700'
            break;
        case 'text-green-700':
            res = 'bg-green-700'
            break;
        case 'text-blue-700':
            res = 'bg-blue-700'
            break;
    }
    return res
}