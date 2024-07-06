import BodyPlace from "@/app/components/BodyPlace";

export default function Page() {
  return (
    <div className="flex justify-center align-center  mx-10">
      <div className="text-3xl m-auto flex-1">
        <p className="text-center leading-loose">
          Seleccione el lugar del tattoo
        </p>
        <p className="text-center leading-loose">luego presione ok!</p>
        <p className="text-center leading-loose">
          El sistema generara un presupuesto
        </p>
        <p className="text-center leading-loose">aproximado...</p>
      </div>
      <div className="flex-1">
        <BodyPlace />
      </div>
    </div>
  );
}
