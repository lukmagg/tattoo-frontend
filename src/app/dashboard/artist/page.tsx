import ArtistIndication from '@/app/components/ArtistIndication';
import ArtistSelector from '@/app/components/ArtistSelector';

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mt-20">
        <ArtistIndication />
      </div>
      <div className="mt-12">
        <ArtistSelector />
      </div>
    </div>
  );
}
