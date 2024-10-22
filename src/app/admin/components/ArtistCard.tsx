import { CardProps } from "@/Constants"
import { parseArtistColor } from '@/app/lib/utils/parseArtistColor';
import { PencilIcon, XIcon } from '@heroicons/react/solid';

function ArtistCard({
    name,
    description,
    instagram,
    color,
    onClose,
    onEdit
}: CardProps) {
    return (
        <div className="flex flex-col max-w-sm mx-auto bg-white shadow-md rounded-lg mx-10 mb-4 relative md:min-h-[220px]">
            {/* Cruz para cerrar la card */}
            <button
                className="absolute top-2 right-8 hover:text-yellow-600 text-gray-600 hover:text-gray-800"
                onClick={onEdit}
            >
                <PencilIcon className="h-5 w-5" />

            </button>
            <button
                className="absolute top-2 right-2 hover:text-red-600 text-gray-600 hover:text-gray-800"
                onClick={onClose}
            >
                <XIcon className="h-5 w-5" />
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