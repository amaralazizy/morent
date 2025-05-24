import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface CommandBoxProps {
  list: { name: string; id: string }[];
  listItemName: string;
  setCity: (city: string | null) => void;
  city: string | null;
  setOpen?: (open: boolean) => void;
}

function CommandBox({
  list,
  listItemName,
  setCity,
  city,
  setOpen = () => {},
}: Readonly<CommandBoxProps>) {
  return (
    <Command>
      <CommandInput placeholder={`Search your ${listItemName}`} />
      <CommandList>
        <CommandEmpty>No {listItemName} found.</CommandEmpty>
        <CommandGroup>
          {list.map((item) => (
            <CommandItem
              key={item.id}
              value={item.name}
              className="cursor-pointer"
              onSelect={(currentCity) => {
                  console.log(currentCity === city, currentCity, city);
                  setCity(currentCity === city ? null : currentCity);
                  setOpen(false);
              }}
            >
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default CommandBox;