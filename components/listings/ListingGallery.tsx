import { DetailedCarPlaceholderIcon } from "@/components/icons";
import Badge from "@/shared/status/Badge";

export default function ListingGallery() {
  return (
    <>
      <div className="relative mb-3 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl bg-gray-100">
        <DetailedCarPlaceholderIcon />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <Badge variant="premium">Premium</Badge>
          <Badge variant="loan">Зээлээр авах</Badge>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-4 gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`aspect-[4/3] cursor-pointer rounded-md border-2 bg-gray-200 ${index === 0 ? "border-primary-600" : "border-transparent"}`}
          />
        ))}
      </div>
    </>
  );
}
