import SizeIndication from "@/app/components/SizeIndication";
import SizeSelector from "@/app/components/SizeSelector";

export default function Page() {
  return (
    <div className="flex flex-col justify-center mt-10">
      <SizeIndication />
      <SizeSelector />
    </div>
  );
}
