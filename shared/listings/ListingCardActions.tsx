import { HeartIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Button from "@/shared/form/Button";
import { Trash2 } from "lucide-react";
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
  mode,
  sellerLabel,
  sellerType,
  sellerVerified,
  selectable = false,
  selected = false,
  onSelectedChange,
}: ListingCardActionsProps) {
  if (mode === "saved") {
    return (
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        {selectable ? (
          <CompareCheckbox
            checked={selected}
            onCheckedChange={onSelectedChange}
          />
        ) : (
          <div />
        )}

        <Button
          size="sm"
          variant="white"
          aria-label="Хадгалснаас устгах"
          title="Устгах"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-3">
      <SellerChip
        sellerLabel={sellerLabel}
        sellerType={sellerType}
        verified={sellerVerified}
      />

      <div className="flex shrink-0 items-center gap-2">
        {selectable ? (
          <CompareCheckbox
            checked={selected}
            onCheckedChange={onSelectedChange}
          />
        ) : null}

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white transition hover:border-primary-200 hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
          aria-label="Хадгалах"
          title="Хадгалах"
        >
          <HeartIcon className="stroke-gray-400 transition-colors hover:stroke-primary-600" />
        </button>
      </div>
    </div>
  );
}

interface CompareCheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

function CompareCheckbox({
  checked = false,
  onCheckedChange,
}: CompareCheckboxProps) {
  return (
    <label
      className={cn(
        "inline-flex h-8 cursor-pointer select-none items-center gap-2 rounded-full border bg-white px-2.5 text-xs font-medium transition",
        checked
          ? "border-primary-300 bg-primary-50 text-primary-700"
          : "border-gray-200 text-gray-600 hover:border-primary-200 hover:bg-primary-50",
      )}
    >
      <input
        type="checkbox"
        className="h-3.5 w-3.5 cursor-pointer accent-primary-600"
        checked={checked}
        onChange={(event) => onCheckedChange?.(event.target.checked)}
      />
      <span>Харьцуулах</span>
    </label>
  );
}