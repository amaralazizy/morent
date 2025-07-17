import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const checkboxes = [
  {
    id: "marketing-checkbox",
    label:
      "I agree with sending an Marketing and newsletter emails. No spam, promissed!",
  },
  {
    id: "terms-checkbox",
    label: "I agree with our terms and conditions and privacy policy.",
  },
];
export default function ConfirmationForm() {
  return (
    <section className="bg-white rounded-lg p-6 flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold">Confirmation</h2>
        <div className="flex justify-between">
          <p className="text-sm text-secondary-300">
            We are getting to the end. Just few clicks and your rental is ready!
          </p>
          <p className="step_counter">Step 4 of 4</p>
        </div>
      </div>
      {checkboxes.map(({ id, label }) => (
        <div
          key={id}
          className="px-8 py-4 rounded-lg bg-default-background mb-6"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Input type="checkbox" id={id} className="w-6 h-6" required/>
            </div>
            <Label className="font-semibold text-base ml-5" htmlFor={id}>
              {label}
            </Label>
          </div>
        </div>
      ))}
      <Button className="text-bold text-base bg-primary-500 text-white rounded-lg py-4 px-8 h-fit hover:bg-primary-600 self-start">
        Rent Now
      </Button>
      <div className="flex flex-col gap-4">
        <Image src="/Safety.png" alt="safety" width={32} height={32} />
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold text-secondary-500">
            All your data are safe
          </h4>
          <p className="text-sm font-medium text-secondary-300">
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
      </div>
    </section>
  );
}
