import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Card({ className, ...props }: Props) {
  return <div className={cn("rounded-xl border border-gray-200 bg-white", className)} {...props} />;
}
