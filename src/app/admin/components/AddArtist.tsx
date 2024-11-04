'use client'
import { FormEvent, useState, useRef } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_ARTIST } from '@/Constants'
import { useStore } from '@/store'
import { availableColor } from '@/app/lib/utils/availableColor'
import { initArtistHours } from '@/app/lib/utils/initArtistHours'

function AddArtist() {
  const {
    allArtistList,
    currentArtistList,
    setAllArtistList,
    setCurrentArtistList,
  } = useStore()
  const [selectedColor, setSelectedColor] = useState('text-black')
  const [artist, { data, loading, error }] = useMutation(CREATE_ARTIST)

  // Form reference
  const formRef = useRef<HTMLFormElement>(null)

  // Functions
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value)
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const dataEntries = Object.fromEntries(formData.entries())

    const isActive =
      currentArtistList.length < 3 && dataEntries.color !== 'text-black'

    if (
      currentArtistList.length < 3 &&
      !availableColor(dataEntries.color as string, currentArtistList)
    ) {
      alert('Color no disponible')
      return
    }

    const completeArtist = {
      isActive,
      //eventList: initArtistHours(),
      eventList: [],
      ...dataEntries,
    }

    try {
      const res = await artist({
        variables: {
          createArtistInput: completeArtist,
        },
      })
      const createdArtist = res.data.createArtist

      if (completeArtist.isActive) {
        // solo agrega el artista a la current list si no hay ya 3 seleccionados
        setCurrentArtistList([...currentArtistList, createdArtist])
      }

      setAllArtistList([...allArtistList, createdArtist])

      alert('Artista agregado correctamente!')

      if (formRef.current) {
        formRef.current.reset() // Restablece todos los campos a su valor inicial
        setSelectedColor('text-black')
      }
    } catch (err) {
      console.error('Error en la mutación:', err)
      alert('Hubo un problema al enviar el formulario. Intenta nuevamente.')
    }
  }

  return (
    <>
      <div>
        <form
          onSubmit={onSubmit}
          ref={formRef}
          className="text-black max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
        >
          {/* Field Name */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Nombre del artista invitado"
              required
            />
          </div>
          {/* Field Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ingresa una descripción"
              defaultValue={''}
              required
            />
          </div>
          {/* Field Color */}
          <div>
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700"
            >
              Color
            </label>
            <select
              id="color"
              name="color"
              className={`${selectedColor} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              onChange={handleChange}
            >
              <option value="text-black">Desactivado</option>
              <option value="text-red-700">Rojo</option>
              <option value="text-blue-700">Azul</option>
              <option value="text-green-700">Verde</option>
            </select>
          </div>
          {/* Field Instagram */}
          <div>
            <label
              htmlFor="instagram"
              className="block text-sm font-medium text-gray-700"
            >
              Instagram
            </label>
            <input
              type="url"
              id="instagram"
              name="instagram"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="https://www.instagram.com/tuusuario"
              required
            />
          </div>
          {/* Send Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddArtist
