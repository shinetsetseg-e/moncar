"use client";

import { Radio as AntRadio } from "antd";
import type { RadioProps as AntRadioProps } from "antd/es/radio";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FieldError, FieldHint } from "./FormField";

export interface RadioProps extends AntRadioProps {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  wrapperClassName?: string;
}

export default function Radio({ children, className, error, hint, label, wrapperClassName, ...props }: RadioProps) {
  const content = label ?? children;

  return (
    <div className={cn("flex flex-col gap-1", wrapperClassName)}>
      <AntRadio className={cn("!text-sm !text-gray-700", className)} {...props}>
        {content}
      </AntRadio>
      {error ? <FieldError>{error}</FieldError> : hint ? <FieldHint>{hint}</FieldHint> : null}
    </div>
  );
}
