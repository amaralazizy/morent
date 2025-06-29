import { cn } from "@/lib/utils";
import BillingInfo from "@/components/BillingInfo";
import RentalInfo from "@/components/RentalInfo";
import PaymentMethod from "@/components/PaymentMethod";
import ConfirmationForm from "@/components/ConfirmationForm";
export default function RentForm({
  className,
}: Readonly<{
  className?: string;
}>) {
  return (
    <form className={cn("", className)}>
      <BillingInfo />
      <RentalInfo />
      <PaymentMethod />
      <ConfirmationForm />
    </form>
  );
}
