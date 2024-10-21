'use client'

import { ARTISTS, Artist } from '@/Constants';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useStore } from '@/store';
import ArtistCard from './ArtistCard';

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
    //TODO: desactivar el artista pero no borrarlo

  };

  const cards = []

  for (let i = 0; i < artistList.length; i++) {
    const card = artistList[i]

    cards.push(
      <ArtistCard
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
