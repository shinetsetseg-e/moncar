import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SummaryRowProps {
  label: ReactNode;
  value: ReactNode;
  className?: string;
}

export default function SummaryRow({ className, label, value }: SummaryRowProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4 text-sm", className)}>
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  );
}
