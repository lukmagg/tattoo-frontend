'use client'
import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useStore } from '@/store'
import AddArtist from '../components/AddArtist'
import AllArtistSelector from '../components/AllArtistSelector'
import CurrentArtistList from '../components/CurrentArtistList'
import { Artist, ARTISTS } from '@/Constants'

export default function Page() {
  const { setAllArtistList, setCurrentArtistList } = useStore()
  const { data, error, loading } = useQuery(ARTISTS)

  // Create All Artist List and Current Artist List
  useEffect(() => {
    if (data) {
      const { artists } = data
      const auxAllArtistList: Artist[] = []
      const auxCurrentArtistList: Artist[] = []
      artists.forEach((artist: Artist) => {
        const { id, name, description, instagram, color, isActive } = artist
        const newArtist = { id, name, description, instagram, color, isActive }
        auxAllArtistList.push(newArtist)
        if (newArtist.isActive) {
          auxCurrentArtistList.push(newArtist)
        }
      })
      setAllArtistList(auxAllArtistList)
      setCurrentArtistList(auxCurrentArtistList)
    }
  }, [data])

  return (
    <div className="flex flex-col md:flex-row md:justify-around">
      <div className="flex flex-col">
        <div className="my-10 md:my-0">
          <p className="mb-2">Crear nuevo</p>
          <AddArtist />
        </div>
        <div className="my-10">
          <p className="mb-2">Seleccionar uno existente</p>
          <AllArtistSelector />
        </div>
      </div>

      <div>
        <p className="mb-2">Artistas Ushuaia</p>
        <CurrentArtistList />
      </div>
    </div>
  )
}
