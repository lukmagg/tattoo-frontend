'use client'

import { useStore } from '@/store';
import ArtistCard from './ArtistCard';

function CurrentArtistList() {
  const { currentArtistList, setCurrentArtistList } = useStore();


  const handleClose = (index: number) => {
    //TODO: desactivar el artista pero no borrarlo
  };

  const handleEdit = (index: number) => {
    //TODO: agregar los datos del artista al formulario de la izquierda
  };

  const cards = []

  for (let i = 0; i < currentArtistList.length; i++) {
    const card = currentArtistList[i]

    cards.push(
      <ArtistCard
        key={i}
        name={card.name}
        description={card.description}
        color={card.color}
        instagram={card.instagram}
        onClose={() => handleClose(i)} // Pasar el índice a la función
        onEdit={() => handleEdit(i)}
      />,
    );
  }

  return (
    <>
      <div className="flex flex-col">{cards}</div>
    </>
  );
}

export default CurrentArtistList
