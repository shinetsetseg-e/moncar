import Button from "@/components/ui/Button";
import ListingCard from "@/components/listings/ListingCard";
import { savedListings } from "@/data/listings";

export default function SavedPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 md:px-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Хадгалсан зар</h2>
          <div className="text-sm text-gray-500">3 машин хадгалагдсан</div>
        </div>
        <Button href="/compare" variant="secondary">
          ⚖️ Харьцуулах (2)
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {savedListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} mode="saved" />
        ))}
      </div>
    </div>
  );
}
