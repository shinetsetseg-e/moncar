import Badge from "@/components/ui/Badge";
import FilterSidebar from "@/components/listings/FilterSidebar";
import ListingCard from "@/components/listings/ListingCard";
import { GridIcon, ListIcon } from "@/components/icons";
import { searchListings } from "@/data/listings";

export default function SearchPage() {
  return (
    <div className="mx-auto grid max-w-[1280px] gap-7 bg-gray-50 px-4 py-8 lg:grid-cols-[260px_1fr] md:px-8">
      <FilterSidebar />
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[15px] text-gray-600">
            <strong className="font-bold text-gray-900">2,840</strong> үр дүн олдлоо
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex overflow-hidden rounded-lg border-[1.5px] border-gray-300">
              <button type="button" className="bg-primary-600 px-3 py-[7px] text-white">
                <GridIcon />
              </button>
              <button type="button" className="bg-white px-3 py-[7px] text-gray-500">
                <ListIcon />
              </button>
            </div>
            <select
              className="cursor-pointer appearance-none rounded-lg border-[1.5px] border-gray-300 bg-white bg-no-repeat px-3 py-2 pr-8 text-[13px] text-gray-700 outline-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' stroke='%2398A2B3' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                backgroundPosition: "right 8px center",
              }}
            >
              <option>Шинээр нэмэгдсэн</option>
              <option>Үнэ (бага → их)</option>
              <option>Үнэ (их → бага)</option>
              <option>Он (шинэ → хуучин)</option>
            </select>
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          <Badge variant="premium" className="cursor-pointer px-3 py-[5px]">
            Toyota ✕
          </Badge>
          <Badge variant="normal" className="cursor-pointer px-3 py-[5px]">
            ₮20M – ₮100M ✕
          </Badge>
          <Badge variant="normal" className="cursor-pointer px-3 py-[5px]">
            2015–2023 ✕
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {searchListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} mode="search" />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {["←", "1", "2", "3"].map((item, index) => (
            <button
              key={item}
              type="button"
              className={`flex h-9 w-9 items-center justify-center rounded-lg border-[1.5px] text-sm transition-all ${
                index === 1
                  ? "border-primary-600 bg-primary-600 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
          <span className="text-sm text-gray-400">...</span>
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-lg border-[1.5px] border-gray-300 bg-white text-sm text-gray-700 hover:border-gray-400 hover:bg-gray-50">
            24
          </button>
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-lg border-[1.5px] border-gray-300 bg-white text-sm text-gray-700 hover:border-gray-400 hover:bg-gray-50">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
