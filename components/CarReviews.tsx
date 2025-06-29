"use client";
import { Button } from "@/components/ui/button";
import CustomerReview from "@/components/CustomerReview";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const numberOfReviews = 20;

export default function CarReviews() {
  const [reviewsShown, setreviewsShown] = useState<number>(3);
  return (
    <div className="w-full bg-white p-6 flex flex-col gap-8 rounded-lg">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <span className="px-3 py-1.5 bg-primary-500 text-white rounded-sm">
          {numberOfReviews}
        </span>
      </div>
      <div className="flex flex-col gap-6">
        {Array.from({ length: reviewsShown }).map((_, index) => (
          <CustomerReview key={index} />
        ))}
      </div>
      {reviewsShown < numberOfReviews && (
        <Button
          className="w-fit bg-transparent text-secondary-300 mx-auto hover:bg-transparent shadow-none"
          onClick={() =>
            setreviewsShown((prevReviewsShown) => prevReviewsShown + 3)
          }
        >
          Show More
          <ChevronDownIcon className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
