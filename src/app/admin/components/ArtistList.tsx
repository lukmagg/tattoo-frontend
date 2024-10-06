
const cardsData = [
    {
        name: 'Lucas',
        description: 'Este es un ejemplo de una card simple utilizando Tailwind CSS. Este es un ejemplo de una card simple utilizando Tailwind CSS. Este es un ejemplo de una card simple utilizando Tailwind CSS. Este es un ejemplo de una card simple utilizando Tailwind CSS.',
        instagram: 'https://www.instagram.com/lucas',
        color: '#4A90E2',
    },
    {
        name: 'Maria',
        description: 'Otra card de ejemplo.',
        instagram: 'https://www.instagram.com/maria',
        color: '#E94E77',
    },
    {
        name: 'Juan',
        description: 'Card de un artista.',
        instagram: 'https://www.instagram.com/juan',
        color: '#50E3C2',
    },
    {
        name: 'Ana',
        description: 'Descripción de Ana.',
        instagram: 'https://www.instagram.com/ana',
        color: '#F5A623',
    },
];

interface CardProps {
    name: string;
    description: string;
    instagram: string;
    color: string;
    onClose: () => void; // Si 'onClose' es una función sin retorno
}

const Card: React.FC<CardProps> = ({ name, description, instagram, color, onClose }) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg mx-10 mb-4 relative flex flex-col">
            {/* Cruz para cerrar la card */}
            <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
                onClick={onClose}
            >
                &times;
            </button>

            <div className="p-4 flex-grow"> {/* Usar flex-grow aquí */}
                <h2 className="text-xl font-semibold text-gray-800">Nombre: {name}</h2>
                <p className="mt-2 text-gray-600 line-clamp-2"> {/* Usar line-clamp */}
                    Descripción: {description}
                </p>
                <p className="mt-2 text-gray-600">
                    Color: <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
                </p>
                <p className="mt-2 text-gray-600">
                    Instagram: <a href={instagram} className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">{instagram}</a>
                </p>
            </div>
        </div>
    );
};

function AddArtist() {

    const handleClose = (index: number) => {
        console.log(`Card ${index + 1} cerrada`);
    };

    const cards = []

    for (let i = 0; i < cardsData.length; i++) {
        const card = cardsData[i]

        cards.push(
            <Card
                key={i}
                name={card.name}
                description={card.description}
                color={card.color}
                instagram={card.instagram}
                onClose={() => handleClose(i)} // Pasar el índice a la función

            />
        )
    }

    return (
        <>
            <div className="flex flex-col my-10">
                {cards}
            </div>
        </>
    );
}

export default AddArtist;
