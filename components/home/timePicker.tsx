interface TimePickerProps {
  selectedTime: string | null;
  onSelect: (time: string) => void;
  setOpen?: (open: boolean) => void;
}

function TimePicker({
  selectedTime,
  onSelect,
  setOpen = () => {},
}: Readonly<TimePickerProps>) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setOpen(false);
    }
  };
  return (
    <input
      type="time"
      value={selectedTime || ""}
      onChange={(e) => onSelect(e.target.value)}
      onKeyDown={handleKeyDown}
      className="border rounded-md p-2 w-full"
    />
  );
}

export default TimePicker;
