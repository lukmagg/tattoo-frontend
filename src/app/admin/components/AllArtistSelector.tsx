'use client';
import { useMutation } from '@apollo/client'
import { UPDATE_ARTIST, Artist } from '@/Constants'
import { useStore } from '@/store'
import { selectColor } from '@/app/lib/utils/selectColor';

const AllArtistSelector = () => {
  const { allArtistList, currentArtistList } = useStore();

  const [updateArtist, { data, loading, error }] = useMutation(UPDATE_ARTIST)

  async function handleActivate(artist: Artist) {
    if (currentArtistList.length < 3) {

      const newColor = selectColor(currentArtistList)

      const modifiedArtist = {
        id: artist.id,
        isActive: true,
        color: newColor
      }

      try {
        const res = await updateArtist({
          variables: {
            updateArtistInput: modifiedArtist,
          },
        })

      } catch (err) {
        console.error('Error en la mutación:', err)
        alert('Hubo un problema al enviar el formulario. Intenta nuevamente.')
      }
    } else {
      alert("Lista completa de artistas en Ushuaia")
    }
  }






  // Usar esto de abajo en desactivar 
  // const [activateArtist, { data, loading, error }] = useMutation(ACTIVATE_ARTIST)

  // async function handleActivate(artist: Artist) {
  //   if (currentArtistList.length < 3) {
  //     // TODO: elegir automaticamente un color que no este en currentArtistList
  //     try {
  //       const res = await activateArtist({
  //         variables: {
  //           id: artist.id,
  //         },
  //       })

  //     } catch (err) {
  //       console.error('Error en la mutación:', err)
  //       alert('Hubo un problema al enviar el formulario. Intenta nuevamente.')
  //     }
  //   }
  // }


  return (
    <>
      <div className="rounded-md overflow-hidden">
        <div className=" relative max-h-40 overflow-x-auto overflow-y-auto md:w-[440px]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Accion
                </th>
              </tr>
            </thead>
            <tbody>
              {
                allArtistList.map((artist, index) => {
                  return (
                    <tr key={index} className="bg-white border-b" >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {artist.name}
                      </th>
                      <td className="px-6 py-4 hover:text-gray-900 hover:cursor-pointer" onClick={() => handleActivate(artist)}>Seleccionar</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
};

export default AllArtistSelector;
