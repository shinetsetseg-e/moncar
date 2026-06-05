import type { ReactNode } from "react";
import type { BadgeVariant } from "@/types";
import Badge from "./Badge";

export interface StatusChipProps {
  children: ReactNode;
  variant: BadgeVariant;
  className?: string;
}

export default function StatusChip({ children, className, variant }: StatusChipProps) {
  return (
    <Badge className={className} variant={variant}>
      {children}
    </Badge>
  );
}
