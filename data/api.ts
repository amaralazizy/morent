import { CarType } from "@/types/database";

export async function getCars(
  limit: number = 6,
  offset: number = 0
): Promise<{ cars: CarType[] }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars?limit=${limit}&offset=${offset}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  return res.json();
}
