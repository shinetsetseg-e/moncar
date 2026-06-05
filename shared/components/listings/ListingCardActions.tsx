import Button from "@/shared/components/form/Button";
import { Eye, Trash2 } from "lucide-react";
import SellerChip from "./SellerChip";

export interface ListingCardActionsProps {
  href: string;
  sellerLabel: string;
  sellerType: string;
  sellerVerified?: boolean;
  mode: "featured" | "search" | "saved";
  selectable?: boolean;
  selected?: boolean;
  onSelectedChange?: (checked: boolean) => void;
}

export default function ListingCardActions({
  href,
  mode,
  sellerLabel,
  sellerType,
  sellerVerified,
}: ListingCardActionsProps) {
  if (mode === "saved") {
    return (
      <div className="border-t border-gray-100 pt-3">
        <div className="flex items-center justify-end gap-2">
          <Button
            href={href}
            size="sm"
            variant="white"
            aria-label="Дэлгэрэнгүй харах"
            title="Дэлгэрэнгүй"
          >
            <Eye />
          </Button>

          <Button
            size="sm"
            variant="white"
            aria-label="Устгах"
            title="Устгах"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-100 pt-2.5">
      <SellerChip
        sellerLabel={sellerLabel}
        sellerType={sellerType}
        verified={sellerVerified}
      />
    </div>
  );
}