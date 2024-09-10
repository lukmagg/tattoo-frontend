import SizeIndication from "@/app/components/SizeIndication";
import SizeSelector from "@/app/components/SizeSelector";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mt-20">
        <SizeIndication />
      </div>
      <div className="mt-10">
        <SizeSelector />
      </div>
    </div>
  );
}
