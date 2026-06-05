"use client";

import { Checkbox as AntCheckbox } from "antd";
import type { CheckboxProps as AntCheckboxProps } from "antd/es/checkbox";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FieldError, FieldHint } from "./FormField";

export interface CheckboxProps extends AntCheckboxProps {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  wrapperClassName?: string;
}

export default function Checkbox({ children, className, error, hint, label, wrapperClassName, ...props }: CheckboxProps) {
  const content = label ?? children;

  return (
    <div className={cn("flex flex-col gap-1", wrapperClassName)}>
      <AntCheckbox className={cn("!text-sm !text-gray-700", className)} {...props}>
        {content}
      </AntCheckbox>
      {error ? <FieldError>{error}</FieldError> : hint ? <FieldHint>{hint}</FieldHint> : null}
    </div>
  );
}
