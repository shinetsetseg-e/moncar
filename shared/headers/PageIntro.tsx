import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PageIntroProps {
  title: ReactNode;
  description: ReactNode;
  className?: string;
}

export default function PageIntro({ className, description, title }: PageIntroProps) {
  return (
    <div className={cn("rounded-xl border border-gray-200 bg-white p-6", className)}>
      <div className="text-lg font-bold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-500">{description}</div>
    </div>
  );
}
