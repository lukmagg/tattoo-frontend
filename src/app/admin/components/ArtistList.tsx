'use client'

import { ARTISTS, CardProps, Artist } from '@/Constants';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useStore } from '@/store';


const Card: React.FC<CardProps> = ({
  name,
  description,
  instagram,
  color,
  onClose,
}) => {
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
            className={`${color} inline-block w-4 h-4 rounded-full`}
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
  );
}

function ArtistList() {
  const { data, error, loading } = useQuery(ARTISTS)
  const { artistList, setArtistList } = useStore();


  useEffect(() => {

    if (data) {
      const { artists } = data

      const auxList: Artist[] = []
      artists.forEach((artist: Artist) => {
        const { name, description, instagram, color } = artist
        const newArtist = { name, description, instagram, color }
        auxList.push(newArtist)
      })

      setArtistList(auxList)
    }

  }, [data])

  const handleClose = (index: number) => {
    console.log(`Card ${index + 1} cerrada`)
  };

  const cards = []

  for (let i = 0; i < artistList.length; i++) {
    const card = artistList[i]

    cards.push(
      <Card
        key={i}
        name={card.name}
        description={card.description}
        color={card.color}
        instagram={card.instagram}
        onClose={() => handleClose(i)} // Pasar el índice a la función
      />,
    );
  }

  return (
    <>
      <div className="flex flex-col my-10">{cards}</div>
    </>
  );
}

export default ArtistList
