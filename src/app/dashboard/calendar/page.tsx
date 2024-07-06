import Calendar from "@/app/components/Calendar";

export default function Page() {
  return (
    <div className="flex justify-center mt-10 min-h-screen">
      <div className="w-full max-w-lg p-4 text-center">
        <p className="text-2xl mb-6">Seleccione fecha y hora de la session</p>
        <Calendar />
      </div>
    </div>
  );
}
