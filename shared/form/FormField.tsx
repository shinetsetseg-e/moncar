import { CircleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FieldLabelProps {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
  required?: boolean;
}

export function FieldLabel({ children, className, htmlFor, required }: FieldLabelProps) {
  return (
    <label className={cn("text-xs font-semibold tracking-[0.3px] text-gray-600", className)} htmlFor={htmlFor}>
      {children}
      {required ? " *" : null}
    </label>
  );
}

export interface FieldHintProps {
  children: ReactNode;
  className?: string;
}

export function FieldHint({ children, className }: FieldHintProps) {
  return <div className={cn("text-xs text-gray-500", className)}>{children}</div>;
}

export interface FieldErrorProps {
  children: ReactNode;
  className?: string;
}

export function FieldError({ children, className }: FieldErrorProps) {
  return (
    <div className={cn("flex items-start gap-1 text-xs text-red-danger", className)}>
      <CircleAlert className="mt-0.5 h-[13px] w-[13px] shrink-0" strokeWidth={2} />
      <span>{children}</span>
    </div>
  );
}

export interface FormFieldProps {
  label?: ReactNode;
  children: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  htmlFor?: string;
  className?: string;
  contentClassName?: string;
  labelClassName?: string;
  hintClassName?: string;
  errorClassName?: string;
}

export default function FormField({
  label,
  children,
  hint,
  error,
  required,
  htmlFor,
  className,
  contentClassName,
  labelClassName,
  hintClassName,
  errorClassName,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label ? (
        <FieldLabel className={labelClassName} htmlFor={htmlFor} required={required}>
          {label}
        </FieldLabel>
      ) : null}
      <div className={contentClassName}>{children}</div>
      {error ? <FieldError className={errorClassName}>{error}</FieldError> : hint ? <FieldHint className={hintClassName}>{hint}</FieldHint> : null}
    </div>
  );
}
