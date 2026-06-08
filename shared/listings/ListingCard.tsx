import { CarPlaceholderIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Badge from "@/shared/status/Badge";
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
    <article
      className={cn(
        "group overflow-hidden rounded-xl border border-gray-200 bg-white transition-[border-color,box-shadow,transform]",
        "hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-[0_8px_24px_rgb(var(--primary-600-rgb)/0.12)]",
        listing.premiumCard &&
          "border-primary-200 shadow-[0_2px_8px_rgb(var(--primary-600-rgb)/0.1)]",
        selected && "border-primary-300 ring-2 ring-primary-100",
      )}
    >
      <Link
        href={resolvedHref}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2"
        aria-label={`${listing.title} дэлгэрэнгүй харах`}
      >
        <div
          className={cn(
            "relative flex h-[180px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50",
            listing.mutedImage && "bg-gray-100",
          )}
        >
          <div className="flex h-full w-full items-center justify-center bg-gray-100 transition-transform duration-300 group-hover:scale-[1.03]">
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
        </div>

        <div className="p-4 pb-0">
          <h3 className="mb-1 line-clamp-2 text-[15px] font-bold text-gray-900 transition-colors group-hover:text-primary-700">
            {listing.title}
          </h3>

          <div className="mb-2.5 text-lg font-bold text-primary-600">
            {listing.price}
          </div>

          <ListingMeta items={listing.meta} listingId={listing.id} />
        </div>
      </Link>

      <div className="px-4 pb-4 pt-3">
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
    </article>
  );
}