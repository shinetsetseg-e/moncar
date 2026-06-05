import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type AlertVariant = "success" | "warning" | "error" | "info";

const alertStyles = {
  success: {
    className: "border border-green-active bg-green-bg text-green-active",
    Icon: CircleCheck,
  },
  warning: {
    className: "border border-orange-warning bg-orange-bg text-orange-warning",
    Icon: TriangleAlert,
  },
  error: {
    className: "border border-red-danger bg-red-bg text-red-danger",
    Icon: CircleAlert,
  },
  info: {
    className: "border border-primary-200 bg-primary-50 text-primary-700",
    Icon: Info,
  },
} satisfies Record<AlertVariant, { className: string; Icon: typeof CircleCheck }>;

export interface AlertProps {
  title?: ReactNode;
  children: ReactNode;
  variant?: AlertVariant;
  className?: string;
}

export default function Alert({ children, className, title, variant = "info" }: AlertProps) {
  const { className: toneClassName, Icon } = alertStyles[variant];

  return (
    <div className={cn("flex items-start gap-2 rounded-lg px-4 py-3 text-sm", toneClassName, className)}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.2} />
      <div>
        {title ? <div className="font-semibold">{title}</div> : null}
        <div>{children}</div>
      </div>
    </div>
  );
}
