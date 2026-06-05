import type { LucideProps } from "lucide-react";
import {
  Bell,
  CarFront,
  Check,
  Clock3,
  Heart,
  LayoutGrid,
  List,
  MapPin,
  Search,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = LucideProps;

export function CarPlaceholderIcon({ className, ...props }: IconProps) {
  return <CarFront strokeWidth={1.5} className={cn("h-[50px] w-20 opacity-25", className)} {...props} />;
}

export function DetailedCarPlaceholderIcon({ className, ...props }: IconProps) {
  return <CarFront strokeWidth={1.4} className={cn("h-[120px] w-[200px] opacity-25", className)} {...props} />;
}

export function HeartIcon({ className, ...props }: IconProps) {
  return <Heart strokeWidth={2} className={cn("h-4 w-4", className)} {...props} />;
}

export function SearchIcon({ className, ...props }: IconProps) {
  return <Search strokeWidth={2} className={cn("h-[18px] w-[18px]", className)} {...props} />;
}

export function UserIcon({ className, ...props }: IconProps) {
  return <User strokeWidth={2} className={cn("h-[18px] w-[18px]", className)} {...props} />;
}

export function BellIcon({ className, ...props }: IconProps) {
  return <Bell strokeWidth={2} className={cn("h-[18px] w-[18px]", className)} {...props} />;
}

export function ClockIcon({ className, ...props }: IconProps) {
  return <Clock3 strokeWidth={2} className={cn("h-[13px] w-[13px]", className)} {...props} />;
}

export function PinIcon({ className, ...props }: IconProps) {
  return <MapPin strokeWidth={2} className={cn("h-[13px] w-[13px]", className)} {...props} />;
}

export function GridIcon({ className, ...props }: IconProps) {
  return <LayoutGrid strokeWidth={2} className={cn("h-4 w-4", className)} {...props} />;
}

export function ListIcon({ className, ...props }: IconProps) {
  return <List strokeWidth={2} className={cn("h-4 w-4", className)} {...props} />;
}

export function CheckIcon({ className, ...props }: IconProps) {
  return <Check strokeWidth={2.5} className={cn("h-4 w-4", className)} {...props} />;
}
