import { Building2, UserRound } from "lucide-react";
import { Checkbox } from "antd";
import Link from "next/link";
import type { Listing } from "@/types";
import { CarPlaceholderIcon, ClockIcon, HeartIcon, PinIcon } from "@/components/icons";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Props {
  listing: Listing;
  href?: string;
  mode?: "featured" | "search" | "saved";
  selectable?: boolean;
  selected?: boolean;
  onSelectedChange?: (checked: boolean) => void;
}

export default function ListingCard({
  listing,
  href = `/listings/${listing.id}`,
  mode = "featured",
  selectable = false,
  selected = false,
  onSelectedChange,
}: Props) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-gray-200 bg-white transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,119,255,.12)]",
        listing.premiumCard && "border-primary-200 shadow-[0_2px_8px_rgba(22,119,255,.1)]",
        selected && "border-primary-300 ring-2 ring-primary-100",
      )}
    >
      <Link href={href} className="block">
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
          {mode !== "saved" ? (
            <div className="absolute right-[10px] top-[10px] flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,.1)] hover:bg-red-bg">
              <HeartIcon className="stroke-gray-400" />
            </div>
          ) : null}
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-1 text-[15px] font-bold text-gray-900">{listing.title}</div>
        <div className="mb-2.5 text-lg font-bold text-primary-600">{listing.price}</div>
        <div className="mb-2.5 flex flex-wrap gap-2">
          {listing.meta.map((item, index) => (
            <span key={`${listing.id}-${item.label}-${index}`} className="flex items-center gap-[3px] text-xs text-gray-500">
              {item.icon === "clock" ? <ClockIcon className="stroke-gray-400" /> : null}
              {item.icon === "pin" ? <PinIcon className="stroke-gray-400" /> : null}
              {item.label}
            </span>
          ))}
        </div>
        {mode === "saved" ? (
          <div className="border-t border-gray-100 pt-2.5">
            {selectable ? (
              <Checkbox checked={selected} className="mb-3 !text-xs !text-gray-500" onChange={(event) => onSelectedChange?.(event.target.checked)}>
                Харьцуулахад сонгох
              </Checkbox>
            ) : null}
            <div className="flex items-center justify-between">
              <Button href={href} size="sm">
                Дэлгэрэнгүй
              </Button>
              <Button size="sm" variant="danger">
                Устгах
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between border-t border-gray-100 pt-2.5">
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
              {listing.sellerType === "dealer" ? <Building2 className="h-3.5 w-3.5" strokeWidth={2} /> : <UserRound className="h-3.5 w-3.5" strokeWidth={2} />}
              {listing.sellerLabel}
            </span>
            <Checkbox className="!text-xs !text-gray-500">Харьцуулах</Checkbox>
          </div>
        )}
      </div>
    </div>
  );
}
