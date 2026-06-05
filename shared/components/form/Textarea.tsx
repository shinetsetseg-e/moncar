"use client";

import AntTextArea from "antd/es/input/TextArea";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <AntTextArea
      className={cn(
        "!w-full !rounded-lg !border-[1.5px] !border-gray-300 !bg-white !px-[14px] !py-2.5 !text-sm !text-gray-900 !shadow-none !transition-[border,box-shadow]",
        "placeholder:!text-gray-400 hover:!border-primary-600 focus:!border-primary-600 focus:!shadow-[0_0_0_3px_var(--primary-200)]",
        className,
      )}
      {...props}
    />
  );
}
