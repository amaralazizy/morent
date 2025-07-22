"use clent";
import Logo from "@/components/Logo";
import SearchBar, { MobileSearchBar } from "@/components/SearchBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import SignInButton from "@/components/SignInButton";
import { auth } from "@/auth";
import SignOutButton from "@/components/SignOutButton";
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
import MenuButton from "@/components/MenuButton";
import FavouritesPopover from "@/components/FavouritesPopover";
import SettingsPopover from "@/components/SettingsPopover";
import NotificationsPopover from "@/components/NotificationsPopover";

const popovers = [
  <FavouritesPopover key="favourites" />,
  <NotificationsPopover key="notifications" />,
  <SettingsPopover key="settings" />,
];

export async function Navbar({ className }: Readonly<{ className?: string }>) {
  const session = await auth();

  return (
    <nav
      className={cn(
        "h-31 px-[10%] flex items-center max-lg:gap-8 max-lg:py-8 max-lg:h-[288px] max-lg:flex-col",
        className
      )}
    >
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-16">
          <Link href="/">
            <Logo />
          </Link>
          <SearchBar className="min-w-0 max-lg:hidden" />
        </div>
        <div className="flex items-center gap-5">
          {popovers.map((popover) => popover)}
          {session ? (
            <Avatar>
              <AvatarImage src={session.user?.image || ""} />
              <AvatarFallback>{session.user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          ) : (
            <SignInButton />
          )}
          {session && <SignOutButton />}
        </div>
      </div>
    </nav>
  );
}

export async function MobileNavBar({
  className,
}: Readonly<{ className?: string }>) {
  const session = await auth();

  return (
    <nav className={cn("px-[10%] gap-8 py-8 h-72 grid", className)}>
      <div className="flex items-center justify-between">
        <MenuButton />
        {session ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={session.user?.image || ""} />
              <AvatarFallback>{session.user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <SignOutButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
      <Link href="/">
        <Logo />
      </Link>
      <MobileSearchBar />
    </nav>
  );
}
