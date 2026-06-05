import { CarFront } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function EmptyState({ action, className, description, icon, title }: EmptyStateProps) {
  return (
    <div className={cn("rounded-xl border border-dashed border-gray-300 bg-white px-6 py-10 text-center", className)}>
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-500">
        {icon ?? <CarFront className="h-6 w-6" strokeWidth={2} />}
      </div>
      <div className="text-lg font-bold text-gray-900">{title}</div>
      {description ? <div className="mt-2 text-sm text-gray-500">{description}</div> : null}
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </div>
  );
}
