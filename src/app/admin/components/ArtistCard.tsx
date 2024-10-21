import { CardProps } from "@/Constants"
import { parseArtistColor } from '@/app/lib/utils/parseArtistColor';

function ArtistCard({
    name,
    description,
    instagram,
    color,
    onClose,
}: CardProps) {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg mx-10 mb-4 relative flex flex-col">
            {/* Cruz para cerrar la card */}
            <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
                onClick={onClose}
            >
                &times;
            </button>

            <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">Nombre: {name}</h2>
                <p className="mt-2 text-gray-600 line-clamp-2">
                    Descripción: {description}
                </p>
                <p className="mt-2 text-gray-600">
                    Color:{' '}
                    <span
                        className={`${parseArtistColor(color)} inline-block w-4 h-4 rounded-full`}
                    ></span>
                </p>
                <p className="mt-2 text-gray-600">
                    Instagram:{' '}
                    <a
                        href={instagram}
                        className="text-indigo-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {instagram}
                    </a>
                </p>
            </div>
        </div>
    )
}


export default ArtistCard