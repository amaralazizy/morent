import {supabase} from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
      const { searchParams } = new URL(request.url);

      const limitParam = searchParams.get("limit");
      const offsetParam = searchParams.get("offset");

      const limit = limitParam ? parseInt(limitParam) : 6;
      const offset = offsetParam ? parseInt(offsetParam) : 0;

       if (isNaN(limit) || limit <= 0) {
         return NextResponse.json(
           { error: "Invalid limit parameter" },
           { status: 400 }
         );
       }

      const { data: cars, error } = await supabase
        .from("cars")
        .select(
          `
    id,
    brand,
    model,
    tank,
    capacity,
    transmission,
    rent_price,
    type,
    price_after_discount,
      car_images(
        image_url
      )
    `
        )
        .range(offset, offset + limit - 1);

    console.log("cars from the serverside:\n",cars);

    

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch cars" },
        { status: 500 }
      );
    }

    return NextResponse.json({ cars });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
