"use client";
import SloganCard from "@/components/SloganCard";

import { useEffect, useState } from "react";
import Image from "next/image";
import { carDetails } from "@/data/database";
import { cn } from "@/lib/utils";
export default function CarPreview({
  className,
}: Readonly<{ className?: string }>) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [nextImage, setNextImage] = useState<string | null>(null);
  const [animation, setAnimation] = useState<"idle" | "fadeOut" | "fadeIn">(
    "fadeIn"
  );

  function renderMainImage() {
    if (selectedImage === carDetails.interior1.src) {
      return (
        <Image
          src={carDetails.interior1.src}
          alt={carDetails.interior1.alt}
          width={carDetails.interior1.width}
          height={carDetails.interior1.height}
          className={carDetails.interior1.imgClass}
        />
      );
    } else if (selectedImage === carDetails.interior2.src) {
      return (
        <Image
          src={carDetails.interior2.src}
          alt={carDetails.interior2.alt}
          width={carDetails.interior2.width}
          height={carDetails.interior2.height}
          className={carDetails.interior2.imgClass}
        />
      );
    } else {
      return (
        <SloganCard
          header="Sports car with the best design and acceleration"
          paragraph="Safety and comfort while driving a futuristic and elegant sports car"
          carImage="/car2.png"
          showButton={false}
          className="bg-[url('/arrows.png')] bg-primary-500 bg-no-repeat bg-center bg-cover max-[820px]:p-10"
          ImageClassName="scale-90"  
          variant="details"
        />
      );
    }
  }

  // Handler for image selection
  function handleImageSelect(imgSrc: string) {
    if (imgSrc === selectedImage) return;
    setNextImage(imgSrc);
    setAnimation("fadeOut");
  }

  // Effect to handle animation transitions
  useEffect(() => {
    if (animation === "fadeOut") {
      const timeout = setTimeout(() => {
        setSelectedImage(nextImage);
        setAnimation("fadeIn");
      }, 500); // 300ms = your fadeOut animation duration
      return () => clearTimeout(timeout);
    }
  }, [animation, nextImage]);

  // Animation class logic
  const animationClass =
    animation === "fadeOut"
      ? "animate-fadOut"
      : animation === "fadeIn"
      ? "animate-fadIn"
      : "";
  return (
    <div className={cn("", className)}>
      <div
        key={selectedImage || "default"}
        className={`w-full h-90 mb-6  rounded-lg overflow-hidden ${animationClass}`}
      >
        {renderMainImage()}
      </div>
      <div className="flex justify-between items-center gap-3">
        {Object.entries(carDetails).map(([key, img]) => {
          console.log(key);
          const isSelected = selectedImage === img.src;
          const borderSquare = isSelected ? "" : "before:opacity-0";
          const common =
            "h-31 cursor-pointer transition-all duration-300 focus:outline-none rounded-lg relative isolate before:content-[''] before:absolute before:inset-[2px] before:border-6 before:border-white before:rounded-lg before:z-2 before:transition-all before:duration-300 flex-1";
          return (
            <button
              key={img.src}
              type="button"
              aria-label={`Select ${img.alt}`}
              onClick={() => handleImageSelect(img.src)}
              className={`${img.bg} ${borderSquare} ${common}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={img.imgClass}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
