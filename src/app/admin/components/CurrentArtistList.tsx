'use client'

import { useStore } from '@/store';
import ArtistCard from './ArtistCard';
import { Artist, DEACTIVATE_ARTIST } from '@/Constants';
import { useMutation } from '@apollo/client';

function CurrentArtistList() {
  const { currentArtistList, setCurrentArtistList } = useStore();
  const [deactivateArtist, { data, loading, error }] = useMutation(DEACTIVATE_ARTIST)


  async function handleDeactivate(id: string) {

    try {
      const res = await deactivateArtist({
        variables: {
          id: id,
        },
      })

    } catch (err) {
      console.error('Error en la mutación:', err)
      alert('Hubo un problema al enviar el formulario. Intenta nuevamente.')
    }

  }

  const handleEdit = (index: number) => {
    //TODO: agregar los datos del artista al formulario de la izquierda
  };

  const cards = []

  for (let i = 0; i < currentArtistList.length; i++) {
    const card = currentArtistList[i]

    cards.push(
      <ArtistCard
        key={card.id}
        name={card.name}
        description={card.description}
        color={card.color}
        instagram={card.instagram}
        onClose={() => handleDeactivate(card.id as string)} // Pasar el id a la función
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
