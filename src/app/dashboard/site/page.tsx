import BodyPlace from "@/app/components/BodyPlace";
import Indications from "@/app/components/Indications";

export default function Page() {
  return (
    <div className="flex justify-center align-center mx-10">
      <Indications />

      <div className="flex-1">
        <BodyPlace />
      </div>
    </div>
  );
}
