import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SloganCardProps = {
  header: string;
  paragraph: string;
  buttonColor?: string;
  carImage: string;
  ImageClassName?: string;
  className?: string;
  showButton?: boolean;
  variant?: "hero" | "details";
};

export default function SloganCard({
  header,
  paragraph,
  buttonColor = "bg-primary-500",
  carImage,
  ImageClassName,
  className,
  showButton = true,
  variant = "hero",
}: SloganCardProps) {
  // Define variant styles
  const variantStyles = {
    hero: {
      header:
        "text-[calc(0.25rem+1.8vw)] font-semibold tracking-tight mb-4 max-[820px]:text-3xl max-sm:text-xl ",
      paragraph: "text-base mb-6 ",
      container: "h-[224px] max-w-70",
    },
    details: {
      header:
        "text-[2rem] font-semibold tracking-tight mb-4 max-[560px]:text-3xl max-[500px]:text-4xl max-[400px]:text-2xl",
      paragraph: "font-medium max-[560px]:text-xl max-[500px]:text-2xl max-[400px]:text-lg ",
      container: "max-w-[372px]",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "flex-shrink-0 relative h-[360px] rounded-[10px] pt-6",
        className
      )}
    >
      <div
        className={`${styles.container} text-white ml-6 max-[820px]:ml-0 max-[820px]:min-w-full`}
      >
        <h2 className={styles.header}>{header}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        {showButton && (
          <Link
            href="/cars"
            className={`py-2.5 px-5 rounded-[4px] ${buttonColor} text-white cursor-pointer hover:${buttonColor} origin-bottom hover:scale-105 transition-all duration-300 hover:shadow-md`}
          >
            Rental Car
          </Link>
        )}
      </div>
      <div
        className={cn(
          "absolute bottom-2.5 right-[6vw] w-[calc(2rem+20vw)] h-[8vw] max-[820px]:w-[400px] max-[820px]:h-[100px] max-[820px]:bottom-2 max-sm:w-[200px] max-sm:h-[100px] max-sm:left-1/4 max-sm:scale-120 max-sm:-bottom-10 max-sm:relative max-[500px]:hidden",
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
