import CarCard from "./carCard";

export default function PopularCars() {
  return (
    <div className="">
     <h2 className="font-semibold">Popular Cars</h2>
      {Array(4).map((_,i) => (
          <CarCard key={i} />
      ))}
    </div>
  );
}
