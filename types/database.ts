export interface CarType {
  id: string;
  created_at?: string;
  brand: string;
  model: string;
  type: string;
  tank: number;
  transmission: string;
  capacity: number;
  rent_price: number;
  discount_percentage?: number;
  price_after_discount: number;
  car_images: {
    id?: string;
    car_id?: string;
    image_url: string;
  }[];
  // Add other car properties as needed
}
export type Review = {
  id: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
};
