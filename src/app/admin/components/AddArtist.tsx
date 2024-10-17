import { FormEvent } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_ARTIST } from '@/Constants';

function AddArtist() {
  const [artist, { data, loading, error }] = useMutation(CREATE_ARTIST);


  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = Object.fromEntries(formData.entries())

    try {
      await artist({
        variables: {
          createArtistInput: {
            ...data,
          },
        },
      })
    } catch (err) {
      console.error('Error en la mutación:', err);
      alert('Hubo un problema al enviar el formulario. Intenta nuevamente.');
    }


  }

  return (
    <>
      <div className="my-10">
        <form
          onSubmit={onSubmit}
          className="text-black max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="rojo">Rojo</option>
              <option value="azul">Azul</option>
              <option value="verde">Verde</option>
              <option value="amarillo">Amarillo</option>
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
  );
}

export default AddArtist;
