import RentalPickDrop from "@/components/RentalPickDrop";

export default function RentalInfo() {
  return (
    <section className="bg-white rounded-lg p-6 @container">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Rental Info</h2>
        <div className="flex justify-between">
          <p className="text-sm text-secondary-300">
            Please enter your rental info
          </p>
          <p className="step_counter">Step 2 of 4</p>
        </div>
      </div>
      <RentalPickDrop />
    </section>
  );
}
