import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { PropertyProps } from "@/interfaces";
import Image from 'next/image';


const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="text-sm text-gray-600 mt-2">
        {property.rating} stars • {property.address.city}, {property.address.country}
      </div>

      {/* Image */}
      <div className="grid grid-cols-1 gap-4 mt-6">
        <Image
            src={property.image}
            alt={property.name}
            width={800} // Adjust width as needed
            height={256} // Adjust height as needed (h-64 = 16rem = 256px)
            className="w-full h-64 object-cover rounded-lg"
        />
        </div>

      {/* Layout split: description + booking */}
      <div className="flex flex-col md:flex-row mt-8 gap-8">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p>{property.description}</p>

          <h2 className="text-2xl font-semibold mt-6">What this place offers</h2>
          <ul className="flex flex-wrap mt-2 gap-2">
            {property.category.map((item, i) => (
              <li key={i} className="bg-gray-200 text-sm px-3 py-1 rounded-md">
                {item}
              </li>
            ))}
          </ul>

          <ReviewSection reviews={property.reviews} />
        </div>

        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
