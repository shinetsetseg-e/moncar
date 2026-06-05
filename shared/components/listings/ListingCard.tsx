import { CarPlaceholderIcon, HeartIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Badge from "@/shared/components/status/Badge";
import type { Listing } from "@/types";
import Link from "next/link";
import type { ReactNode } from "react";
import ListingCardActions from "./ListingCardActions";
import ListingMeta from "./ListingMeta";

export interface ListingCardProps {
  listing: Listing;
  href?: string;
  mode?: "featured" | "search" | "saved";
  variant?: "featured" | "search" | "saved";
  selectable?: boolean;
  selected?: boolean;
  onSelectedChange?: (checked: boolean) => void;
  actions?: ReactNode;
}

export default function ListingCard({
  actions,
  href,
  listing,
  mode = "featured",
  onSelectedChange,
  selectable = false,
  selected = false,
  variant,
}: ListingCardProps) {
  const resolvedMode = variant ?? mode;
  const resolvedHref = href ?? `/listings/${listing.id}`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-gray-200 bg-white transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,119,255,.12)]",
        listing.premiumCard && "border-primary-200 shadow-[0_2px_8px_rgba(22,119,255,.1)]",
        selected && "border-primary-300 ring-2 ring-primary-100",
      )}
    >
      <Link href={resolvedHref} className="block">
        <div
          className={cn(
            "relative flex h-[180px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50",
            listing.mutedImage && "bg-gray-100",
          )}
        >
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <CarPlaceholderIcon />
          </div>
          {listing.badges.length > 0 ? (
            <div className="absolute left-[10px] top-[10px] flex flex-wrap gap-1.5">
              {listing.badges.map((badge) => (
                <Badge key={`${listing.id}-${badge.label}`} variant={badge.variant}>
                  {badge.label}
                </Badge>
              ))}
            </div>
          ) : null}
          {resolvedMode !== "saved" ? (
            <div className="absolute right-[10px] top-[10px] flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,.1)] hover:bg-red-bg">
              <HeartIcon className="stroke-gray-400" />
            </div>
          ) : null}
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-1 text-[15px] font-bold text-gray-900">{listing.title}</div>
        <div className="mb-2.5 text-lg font-bold text-primary-600">{listing.price}</div>
        <ListingMeta items={listing.meta} listingId={listing.id} />
        {actions ?? (
          <ListingCardActions
            href={resolvedHref}
            mode={resolvedMode}
            onSelectedChange={onSelectedChange}
            selectable={selectable}
            selected={selected}
            sellerLabel={listing.sellerLabel}
            sellerType={listing.sellerType}
            sellerVerified={listing.sellerVerified}
          />
        )}
      </div>
    </div>
  );
}
