'use client';
import { useEffect, useState } from 'react';
import BudgetModal from './BudgetModal';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store';
import { Artist, ARTISTS } from '@/Constants';
import { useQuery } from '@apollo/client';

const ArtistSelector = () => {

  const { data, error, loading } = useQuery(ARTISTS)
  const { currentArtistList, setCurrentArtistList } = useStore();

  const [selectedArtist, setSelectedArtist] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {

    if (data) {
      const { artists } = data

      const auxList: Artist[] = []

      artists.forEach((artist: Artist) => {
        const { name, description, instagram, color } = artist
        const newArtist = { name, description, instagram, color }
        if (artist.isActive) {
          auxList.push(newArtist)
        }
      })

      // we must update global store for re-render component and print cards
      setCurrentArtistList(auxList)
    }
  }, [data])

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleArtistChange = (artist: string) => {
    setSelectedArtist(artist);
    openModal();
  };


  return (
    <>
      <BudgetModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedSize={selectedArtist}
      />

      <div className="flex flex-col md:flex-row items-center">

        {/* TODO: cambiar los datos hardcodeados por los datos reales de los artistas */}
        {
          currentArtistList.map((artist, index) => (
            <div key={index} className="rounded-md shadow-lg bg-white mt-10 mx-10 md:min-w-[320px]">
              <Image
                src="/400x200.png"
                alt="1009 Logo"
                className="rounded-t-md" //dark:invert
                width={400}
                height={24}
                priority
              />
              <div className="px-6 py-4">
                <div className="text-gray-800 font-bold text-xl mb-2">
                  {artist.name}
                </div>
                <p className="text-gray-700 text-base min-h-[100px]">
                  {artist.description}
                </p>
              </div>
              <div className="flex items-center justify-center px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                  <Link
                    legacyBehavior
                    href="https://www.instagram.com/luk_magg/"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </Link>
                </span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                  <Link
                    legacyBehavior
                    href="https://www.instagram.com/luk_magg/"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </Link>
                </span>
              </div>
              <div
                onClick={() => handleArtistChange('artista 1')}
                className="flex justify-center px-6 pt-4 pb-4 hover:bg-gray-200 cursor-pointer"
              >
                <button className="py-2 px-4 rounded-full font-bold text-xl text-gray-800 ">
                  Seleccionar
                </button>
              </div>
            </div>
          ))
        }

      </div>

    </>
  );
};

export default ArtistSelector;
