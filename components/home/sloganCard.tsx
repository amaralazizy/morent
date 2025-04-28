import Image from "next/image";
import { cn } from "@/lib/utils";

type SloganCardProps = {
  header: string;
  paragraph: string;
  buttonColor: string;
  carImage: string;
  ImageClassName?: string;
  className?: string;
};

export default function SloganCard({
  header,
  paragraph,
  buttonColor,
  carImage,
  ImageClassName,
  className,
}: SloganCardProps) {
  return (
    <div
      className={cn(
        `flex-shrink-0 relative h-[360px] w-[calc((100%-32px)/2)] rounded-[10px] max-[820px]:w-full max-[820px]:p-4 max-sm:h-fit`,
        className
      )}
    >
      {/* <Image
        alt={backgroundImage.discription}
        src={backgroundImage.src}
        fill
        className="object-cover absolute top-0 left-0 w-full h-full rounded-[10px]"
      /> */}

      <div className="h-[224px] text-white ml-6 mt-6 max-w-[272px] max-[820px]:ml-0 max-[820px]:min-w-full">
        <h2 className="text-[calc(0.25rem+1.8vw)] font-semibold tracking-tight mb-4 max-[820px]:text-3xl max-sm:text-xl">
          {header}
        </h2>
        <p>{paragraph}</p>
        <button
          className={`mt-[30px] py-2.5 px-5 rounded-[4px] ${buttonColor} text-white cursor-pointer`}
        >
          Rental Car
        </button>
      </div>
      <div
        className={cn(
          "absolute bottom-2.5 right-[10vw] w-[calc(2rem+20vw)] h-[8vw] max-[820px]:w-[400px] max-[820px]:h-[100px] max-[820px]:bottom-2 max-sm:w-[200px] max-sm:h-[100px] max-sm:left-1/4 max-sm:scale-120 max-sm:bottom-10 max-sm:relative max-[500px]:hidden",
          ImageClassName
        )}
      >
        <Image
          alt="car"
          src={carImage}
          fill
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
