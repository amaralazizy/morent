export type Car = {
  id: string;
  name: string;
  type: string;
  capacity: number;
  fuelTank: number;
  transmission: string;
  price: number;
  discount: number;
  images: string[];
  rating: number;
  description: string;
  reviews?: Review[];
};

export type Review = {
  id: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
};
