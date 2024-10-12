import BodyPlace from "@/app/components/BodyPlace";
import PlaceIndications from "@/app/components/PlaceIndications";

export default function Page() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-grow w-full">
        <div className="flex-1 flex items-center justify-center">
          <PlaceIndications />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <BodyPlace />
        </div>
      </div>
    </div>
  );
}
