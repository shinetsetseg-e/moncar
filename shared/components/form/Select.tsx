"use client";

import { Select as AntSelect } from "antd";
import type { SelectProps as AntSelectProps } from "antd";
import { Children, isValidElement, useMemo } from "react";
import type { ChangeEvent, ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SelectVariant = "default" | "compact" | "hero";
type OptionValue = string | number;

interface SelectOption {
  disabled?: boolean;
  label: ReactNode;
  value: OptionValue;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "size"> {
  className?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  uiVariant?: SelectVariant;
}

function optionLabelToString(label: ReactNode) {
  if (typeof label === "string" || typeof label === "number") {
    return String(label);
  }

  return "";
}

function getOptions(children: ReactNode) {
  return Children.toArray(children).flatMap((child) => {
    if (!isValidElement<{ children?: ReactNode; disabled?: boolean; value?: OptionValue }>(child)) {
      return [];
    }

    const label = child.props.children;
    const value = child.props.value ?? optionLabelToString(label);

    return [
      {
        disabled: child.props.disabled,
        label,
        value,
      } satisfies SelectOption,
    ];
  });
}

export default function Select({
  children,
  className,
  defaultValue,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  style,
  title,
  value,
  uiVariant = "default",
  ...props
}: SelectProps) {
  const options = useMemo(() => getOptions(children), [children]);

  const fallbackValue = options.find((option) => !option.disabled)?.value;
  const resolvedDefaultValue = value === undefined && defaultValue === undefined ? fallbackValue : defaultValue;
  const variantStyles =
    uiVariant === "hero"
      ? {
          minHeight: 48,
          paddingInline: 16,
          backgroundColor: "transparent",
          borderRadius: 16,
          boxShadow: "none",
        }
      : uiVariant === "compact"
        ? {
            minHeight: 34,
            paddingInline: 12,
          }
        : undefined;

  const selectProps = props as unknown as Omit<
    AntSelectProps<OptionValue, SelectOption>,
    "options" | "defaultValue" | "onChange" | "value"
  >;

  return (
    <AntSelect<OptionValue, SelectOption>
      {...selectProps}
      aria-labelledby={props["aria-labelledby"]}
      className={cn("w-full", uiVariant === "hero" && "h-12", className)}
      classNames={{
        content: cn(
          uiVariant === "hero" ? "text-sm font-semibold text-gray-800" : "text-sm text-gray-900",
          uiVariant === "compact" && "text-[13px] text-gray-700",
        ),
        placeholder: uiVariant === "hero" ? "text-sm font-semibold text-gray-800" : "text-sm text-gray-400",
        root: cn(
          uiVariant === "default" && "rounded-lg",
          uiVariant === "compact" && "rounded-lg",
          uiVariant === "hero" && "rounded-2xl bg-transparent",
        ),
      }}
      defaultValue={resolvedDefaultValue as OptionValue | undefined}
      disabled={disabled}
      getPopupContainer={(node) => node.parentElement ?? document.body}
      id={id}
      onBlur={onBlur}
      onChange={(nextValue) => {
        onChange?.({
          target: {
            name,
            value: String(nextValue),
          },
        } as ChangeEvent<HTMLSelectElement>);
      }}
      onFocus={onFocus}
      options={options}
      size={uiVariant === "compact" ? "middle" : "large"}
      style={style}
      styles={{
        root: variantStyles,
      }}
      title={title}
      value={value as OptionValue | undefined}
      variant={uiVariant === "hero" ? "borderless" : "outlined"}
    />
  );
}
