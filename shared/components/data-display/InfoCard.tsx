import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface InfoCardProps {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function InfoCard({ children, className, title }: InfoCardProps) {
  return (
    <div className={cn("rounded-xl border border-gray-200 bg-white p-5", className)}>
      {title ? <div className="mb-3 text-base font-bold text-gray-900">{title}</div> : null}
      {children}
    </div>
  );
}
