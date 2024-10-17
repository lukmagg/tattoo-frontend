'use client';
import { useState } from 'react';
import BudgetModal from './BudgetModal';
import Link from 'next/link';

const ArtistSelector = () => {
  const [selectedArtist, setSelectedArtist] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
      <div className="flex flex-col items-center h-screen">
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-8">
            {/* <img
              className="w-full"
              src="https://via.placeholder.com/400x200"
              alt="Imagen de ejemplo"
            /> */}
            <div className="px-6 py-4">
              <div className="text-gray-800 font-bold text-xl mb-2">
                Mauro Lanza
              </div>
              <p className="text-gray-700 text-base">
                Tatuador local de Ushuaia, el mas crack! con un estilo muy
                harcord.. Skater nato! y mas cosas que quieras poner del artista
                para rellenar la card.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
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
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                <Link
                  legacyBehavior
                  href="https://www.instagram.com/luk_magg/"
                  passHref
                >
                  <a target="_blank" rel="noopener noreferrer">
                    Tiktok
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

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            {/* <img
              className="w-full"
              src="https://via.placeholder.com/400x200"
              alt="Imagen de ejemplo"
            /> */}
            <div className="px-6 py-4">
              <div className="text-gray-800 font-bold text-xl mb-2">
                Nombre artista
              </div>
              <p className="text-gray-700 text-base">
                Aquí va una breve descripción del contenido de la tarjeta.
                Puedes agregar más información o personalizarlo según lo que
                necesites.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #Etiqueta1
              </span>
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
                #Etiqueta3
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
        </div>

        <div className="flex mt-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-8">
            {/* <img
              className="w-full"
              src="https://via.placeholder.com/400x200"
              alt="Imagen de ejemplo"
            /> */}
            <div className="px-6 py-4">
              <div className="text-gray-800 font-bold text-xl mb-2">
                Nombre artista
              </div>
              <p className="text-gray-700 text-base">
                Aquí va una breve descripción del contenido de la tarjeta.
                Puedes agregar más información o personalizarlo según lo que
                necesites.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #Etiqueta1
              </span>
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
                #Etiqueta3
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
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            {/* <img
              className="w-full"
              src="https://via.placeholder.com/400x200"
              alt="Imagen de ejemplo"
            /> */}
            <div className="px-6 py-4">
              <div className="text-gray-800 font-bold text-xl mb-2">
                Nombre artista
              </div>
              <p className="text-gray-700 text-base">
                Aquí va una breve descripción del contenido de la tarjeta.
                Puedes agregar más información o personalizarlo según lo que
                necesites.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                #Etiqueta1
              </span>
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
                #Etiqueta3
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
        </div>
      </div>
    </>
  );
};

export default ArtistSelector;
