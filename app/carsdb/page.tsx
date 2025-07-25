// pages/debug.tsx or app/debug/page.tsx
"use client";
import { useEffect, useState } from "react";
import { CarType } from "@/types/database";

export default function DebugPage() {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/cars?limit=5");
        const {cars} = await res.json();
        setCars(cars);
        console.log("Raw API response:", cars);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Debug Cars Data</h1>
      <pre
        style={{
          background: "#f5f5f5",
          padding: "20px",
          overflow: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        {JSON.stringify(cars, null, 2)}
      </pre>

      <h2>Image Analysis:</h2>
      {cars?.map((car, index: number) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <strong>Car {index + 1}:</strong>
          <br />
          <code>image: &quot;{car.car_images[0].image_url}&quot;</code>
          <br />
          <code>image type: {typeof car.car_images[0].image_url}</code>
          <br />
          <code>image length: {car.car_images[0].image_url?.length || 0}</code>
          <br />
          <code>is empty string: {car.car_images[0].image_url === ""}</code>
          <br />
          <code>is null/undefined: {car.car_images[0].image_url == null}</code>
        </div>
      ))}
    </div>
  );
}
