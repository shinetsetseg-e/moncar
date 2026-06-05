import type { ListingMetaItem } from "@/types";
import { ClockIcon, PinIcon } from "@/components/icons";

export interface ListingMetaProps {
  listingId: string;
  items: ListingMetaItem[];
}

export default function ListingMeta({ items, listingId }: ListingMetaProps) {
  return (
    <div className="mb-2.5 flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span key={`${listingId}-${item.label}-${index}`} className="flex items-center gap-[3px] text-xs text-gray-500">
          {item.icon === "clock" ? <ClockIcon className="stroke-gray-400" /> : null}
          {item.icon === "pin" ? <PinIcon className="stroke-gray-400" /> : null}
          {item.label}
        </span>
      ))}
    </div>
  );
}
