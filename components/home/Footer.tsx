import Logo from "@/app/ui/logo";
import { Separator } from "@radix-ui/react-separator";

export default function Footer() {
  const links = [
    {
      category: "About",
      items: ["How it works", "Featured", "Partnership", "Business Relation"],
    },
    {
      category: "Community",
      items: ["Events", "Blog", "Podcast", "Invite a friend"],
    },
    {
      category: "Socials",
      items: ["Discord", "Instagram", "Twitter", "Facebook"],
    },
  ];
  return (
    <footer className="bg-white p-15 pt-20">
      <div className="flex justify-between">
        <div className="max-w-72">
          <Logo className="mb-4" />
          <p className="text-[#131313]/60 font-medium">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex gap-15">
          {links.map((link) => {
            return (
              <div key={link.category}>
                <h6 className="mb-6 text-xl font-semibold">{link.category}</h6>
                <div className="grid gap-y-5 text-[#131313]/60 font-medium *:cursor-pointer">
                  {link.items.map((item) => (
                    <a key={item}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Separator className="my-9 bg-[#131313]/16 border-1" />
      <div className="flex justify-between font-semibold text-secondary-500">
        <p>&copy; 2023 Morent. All rights reserved.</p>
        <div className="flex gap-15 *:cursor-pointer">
          <a>Privacy & Policy</a>
          <a>Terms & Condtions</a>
        </div>
      </div>
    </footer>
  );
}
