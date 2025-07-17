import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import DotHeading from "@/components/DotHeading";
import Image from "next/image";

const inputFields = [
  { label: "Card Number", id: "card-number", placeholder: "Card number" },
  { label: "Expiration Date", id: "expiration-date", placeholder: "MM/YY" },
  { label: "Card Holder", id: "card-holder", placeholder: "Card holder" },
  { label: "CVV", id: "cvv", placeholder: "CVV" },
];

// const paymentMethods = [
//   { label: "Credit Card", id: "credit-card", icon: "/visa_logo.png" },
//   { label: "Debit Card", id: "debit-card", icon: "/mastercard_logo.png" },
//   { label: "Paypal", id: "paypal", icon: "/PayPal.png" },
//   { label: "Apple Pay", id: "apple-pay", icon: "/apple_pay.png" },
// ];

export default function PaymentMethod() {
  return (
    <section className="bg-white rounded-lg p-6 @container">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Payment Method</h2>
        <div className="flex justify-between">
          <p className="text-sm text-secondary-300">
            Please enter your payment method
          </p>
          <p className="step_counter">Step 3 of 4</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 bg-default-background rounded-lg p-6 mb-6">
        <div className="flex justify-between">
          <DotHeading variant="rentForm">Credit Card</DotHeading>
          <div className="flex gap-3 items-start">
            <Image src="/visa_logo.png" alt="visa" width={48} height={16} />
            <Image
              src="/mastercard_logo.png"
              alt="mastercard"
              width={32}
              height={20}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 @max-md:grid-cols-1">
          {inputFields.map(({ label, id, placeholder }) => (
            <div className="flex flex-col gap-4" key={id}>
              <Label htmlFor={id} className="font-semibold text-base">
                {label}
              </Label>
              <Input
                type="text"
                id={id}
                className="focus-visible:ring-primary-500/50 bg-white rounded-md py-4 pl-8 pr-4 placeholder:text-secondary-300 placeholder:text-sm placeholder:font-medium outline-none border-none selection:bg-primary-500 selection:text-secondary-100 h-fit shadow-none"
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-8 py-4 rounded-lg bg-default-background mb-6">
        <div className="flex gap-5 items-center">
          <Input type="radio" id="paypal" className="w-6 h-6" />
          <Label className="font-semibold text-base" htmlFor="paypal">
            PayPal
          </Label>
        </div>
        <Image src="/PayPal.png" alt="paypal" width={100} height={24} />
      </div>
      <div
        aria-label="apple pay"
        className="flex items-center justify-between px-8 py-4 rounded-lg bg-default-background"
      >
        <div className="flex gap-5 items-center">
          <Input type="radio" id="apple-pay" className="w-6 h-6" />
          <Label className="font-semibold text-base" htmlFor="apple-pay">
            Apple Pay
          </Label>
        </div>
        <Image src="/apple_pay.png" alt="apple pay" width={80} height={24} />
      </div>
    </section>
  );
}
