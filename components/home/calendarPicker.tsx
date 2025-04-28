import { Calendar } from "@/components/ui/calendar";

interface CalendarProps {
  selectedDate: Date;
  onSelect: (date: Date | undefined) => void;
  setOpen?: (open: boolean) => void;
}

export default function CalendarPicker({
  selectedDate,
  onSelect,

  setOpen = () => {},
}: Readonly<CalendarProps>) {
  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={(newDate) => {
        if (newDate) {
          onSelect(newDate);
          console.log("New date selected:", newDate);
        }
        setOpen(false);
      }}
      className="rounded-md border"
    />
  );
}
