export interface PropertyProps {
  name: string;
  rating: number;
  address: { city: string; country: string };
  image: string;
  images: string[];
  description: string;
  category: string[];
  price: number;
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
}
