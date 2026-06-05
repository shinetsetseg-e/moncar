import type { ReactNode } from "react";
import type { BadgeVariant } from "@/types";
import { cn } from "@/lib/utils";
import Badge from "./Badge";

export interface StatusPanelProps {
  title: ReactNode;
  description?: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  badgeLabel?: ReactNode;
}

export default function StatusPanel({ badgeLabel, className, description, title, variant = "info" }: StatusPanelProps) {
  return (
    <div className={cn("rounded-xl border border-gray-200 bg-white p-5", className)}>
      {badgeLabel ? (
        <div className="mb-3">
          <Badge variant={variant}>{badgeLabel}</Badge>
        </div>
      ) : null}
      <div className="text-base font-bold text-gray-900">{title}</div>
      {description ? <div className="mt-2 text-sm text-gray-500">{description}</div> : null}
    </div>
  );
}
