import Logo from "./logo";
import SearchBar, { MobileSearchBar } from "./searchbar";
import { Heart, Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const buttons = [
    {
      name: "Favourites",
      icon: (
        <Heart className="w-5 h-[18px] text-secondary-400" fill="#596780" />
      ),
    },
    {
      name: "Notifications",
      icon: <Bell className="w-5 h-[18px] text-secondary-400" fill="#596780" />,
    },
    {
      name: "Settings",
      icon: <Settings className="w-5 h-[18px] text-secondary-400" />,
    },
  ];
  return (
    <nav className="h-31 pl-[3.75rem] pr-8 flex items-center max-[920px]:gap-8 max-[920px]:px-6 max-[920px]:pt-8 max-[920px]:h-[172px] max-[920px]:flex-col">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-16">
          <Logo />
          <SearchBar className="max-lg:min-w-0 max-[920px]:hidden" />
        </div>
        <div className="flex items-center gap-5">
          {buttons.map((button) => (
            <button
              key={button.name}
              className="p-2.5 border-1 border-secondary-200/40 rounded-full cursor-pointer max-[920px]:hidden"
            >
              {button.icon}
            </button>
          ))}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <MobileSearchBar className="min-[920px]:hidden w-4/5" />
    </nav>
  );
}
