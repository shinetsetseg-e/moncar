import { CircleCheck } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SuccessStateProps {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export default function SuccessState({ action, className, description, title }: SuccessStateProps) {
  return (
    <div className={cn("rounded-xl border border-gray-200 bg-white p-7 text-center", className)}>
      <div className="mx-auto mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-green-bg">
        <CircleCheck className="h-8 w-8 text-green-active" strokeWidth={2.2} />
      </div>
      <div className="text-xl font-bold text-gray-900">{title}</div>
      {description ? <div className="mt-2 text-sm text-gray-500">{description}</div> : null}
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </div>
  );
}
