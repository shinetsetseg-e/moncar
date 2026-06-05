import { Building2, CircleCheck, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SellerChipProps {
  sellerType: string;
  sellerLabel: string;
  verified?: boolean;
  className?: string;
}

export default function SellerChip({ className, sellerLabel, sellerType, verified }: SellerChipProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs text-gray-500", className)}>
      {sellerType === "dealer" ? <Building2 className="h-3.5 w-3.5" strokeWidth={2} /> : <UserRound className="h-3.5 w-3.5" strokeWidth={2} />}
      {sellerLabel}
      {verified ? <CircleCheck className="h-3.5 w-3.5 text-primary-600" strokeWidth={2.2} /> : null}
    </span>
  );
}
