import { Calendar } from "@/app/components/ui/calendar";
interface CalendarProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  setOpen?: (open: boolean) => void;
}

function CalendarPicker({
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
        } else onSelect(undefined);
        setOpen(false);
      }}
      className="rounded-md border"
    />
  );
}

export default CalendarPicker;
