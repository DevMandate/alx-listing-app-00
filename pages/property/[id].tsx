import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <div className="p-6 text-red-500">Property not found</div>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
