import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GridIcon, ListIcon } from "@/components/icons";
import { searchListings } from "@/data/listings";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FilterSidebar from "@/components/listings/FilterSidebar";
import ListingCard from "@/components/listings/ListingCard";
import Select from "@/components/ui/Select";

export default function MarketplaceContent() {
  return (
    <div className="mx-auto grid max-w-[1280px] gap-7 bg-gray-50 px-4 py-8 lg:grid-cols-[260px_1fr] md:px-8">
      <FilterSidebar />
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
          <p className="mt-1 text-sm text-gray-500">Moncar marketplace дээрх автомашины зарууд</p>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[15px] text-gray-600">
            <strong className="font-bold text-gray-900">2,840</strong> үр дүн олдлоо
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex overflow-hidden rounded-lg border-[1.5px] border-gray-300">
              <Button className="!rounded-none !bg-primary-600 !px-3 !py-[7px] !text-white" type="button">
                <GridIcon />
              </Button>
              <Button className="!rounded-none !bg-white !px-3 !py-[7px] !text-gray-500" type="button" variant="ghost">
                <ListIcon />
              </Button>
            </div>
            <Select className="min-w-[180px]" uiVariant="compact">
              <option>Шинээр нэмэгдсэн</option>
              <option>Үнэ (бага → их)</option>
              <option>Үнэ (их → бага)</option>
              <option>Он (шинэ → хуучин)</option>
            </Select>
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          <Badge variant="premium" className="cursor-pointer px-3 py-[5px]">
            <span className="inline-flex items-center gap-1">
              Toyota
              <X className="h-3 w-3" strokeWidth={2.2} />
            </span>
          </Badge>
          <Badge variant="normal" className="cursor-pointer px-3 py-[5px]">
            <span className="inline-flex items-center gap-1">
              ₮20M – ₮100M
              <X className="h-3 w-3" strokeWidth={2.2} />
            </span>
          </Badge>
          <Badge variant="normal" className="cursor-pointer px-3 py-[5px]">
            <span className="inline-flex items-center gap-1">
              2015–2023
              <X className="h-3 w-3" strokeWidth={2.2} />
            </span>
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {searchListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} mode="search" />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <Button
            className="!flex !h-9 !w-9 !items-center !justify-center !rounded-lg !border-gray-300 !bg-white !px-0 !py-0 !text-sm !text-gray-700 hover:!border-gray-400 hover:!bg-gray-50"
            type="button"
            variant="ghost"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.2} />
          </Button>
          {["1", "2", "3"].map((item, index) => (
            <Button
              key={item}
              className={`!flex !h-9 !w-9 !items-center !justify-center !rounded-lg !px-0 !py-0 !text-sm ${
                index === 0
                  ? "!border-primary-600 !bg-primary-600 !text-white"
                  : "!border-gray-300 !bg-white !text-gray-700 hover:!border-gray-400 hover:!bg-gray-50"
              }`}
              type="button"
              variant={index === 0 ? "primary" : "ghost"}
            >
              {item}
            </Button>
          ))}
          <span className="text-sm text-gray-400">...</span>
          <Button className="!flex !h-9 !w-9 !items-center !justify-center !rounded-lg !px-0 !py-0 !text-sm" type="button" variant="ghost">
            24
          </Button>
          <Button className="!flex !h-9 !w-9 !items-center !justify-center !rounded-lg !px-0 !py-0 !text-sm" type="button" variant="ghost">
            <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
          </Button>
        </div>
      </div>
    </div>
  );
}
