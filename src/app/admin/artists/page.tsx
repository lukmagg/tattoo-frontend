// 'use client'
import AddArtist from '../components/AddArtist';
import ArtistList from '../components/ArtistList';

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="grow">
        <AddArtist />
      </div>
      <div className="grow">
        <ArtistList />
      </div>
    </div>
  );
}
