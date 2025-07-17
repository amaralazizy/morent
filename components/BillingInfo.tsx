import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const inputFields = [
  { label: "Name", id: "name", placeholder: "Your name" },
  { label: "Phone Number", id: "phone-number", placeholder: "Phone number" },
  { label: "Address", id: "address", placeholder: "Address" },
  { label: "Town / City", id: "town-city", placeholder: "Town or city" },
];

export default function BillingInfo() {
  return (
    <section className="bg-white rounded-lg p-6 @container">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Billing Info</h2>
        <div className="flex justify-between">
          <p className="text-sm text-secondary-300">
            Please enter your billing info
          </p>
          <p className="step_counter">
            Step 1 of 4
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8  @max-md:grid-cols-1">
        {inputFields.map(({ label, id, placeholder }) => (
          <div className="flex flex-col gap-4" key={id}>
            <Label htmlFor={id} className="font-semibold">
              {label}
            </Label>
            <Input
              type="text"
              id={id}
              className="input_primary"
              placeholder={placeholder}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
