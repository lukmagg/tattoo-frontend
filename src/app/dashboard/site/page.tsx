import BodyPlace from "@/app/components/BodyPlace";

export default function Page() {
  return (
    <div className="flex m-10">
      <div className="text-3xl m-auto">
        <p className="text-center leading-loose">
          Seleccione el lugar del tattoo
        </p>
        <p className="text-center leading-loose">luego presione ok!</p>
        <p className="text-center leading-loose">
          El sistema generara un presupuesto
        </p>
        <p className="text-center leading-loose">aproximado...</p>
      </div>
      <BodyPlace />
    </div>
  );
}
