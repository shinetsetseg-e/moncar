export type BadgeVariant =
  | "premium"
  | "loan"
  | "normal"
  | "green"
  | "new"
  | "hot"
  | "verified"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "pending";

export interface ListingBadge {
  label: string;
  variant: BadgeVariant;
}

export interface ListingMetaItem {
  label: string;
  icon?: "clock" | "pin";
}

export interface Listing {
  id: string;
  title: string;
  shortTitle?: string;
  price: string;
  year: string;
  location: string;
  mileage: string;
  sellerType: string;
  sellerLabel: string;
  sellerVerified?: boolean;
  badges: ListingBadge[];
  meta: ListingMetaItem[];
  premiumCard?: boolean;
  mutedImage?: boolean;
  loanEligible?: boolean;
  engine?: string;
  transmission?: string;
  fuel?: string;
  condition?: string;
  color?: string;
}

export interface Brand {
  id: string;
  icon: string;
  name: string;
  count: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: Array<{
    href?: string;
    label: string;
    icon?: "phone" | "mail" | "pin";
  }>;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  unread?: boolean;
  tone?: "primary" | "orange" | "green" | "gray";
}

export interface CompareRow {
  label: string;
  values: string[];
  badgeValues?: BadgeVariant[];
}

export interface ProfileMenuItem {
  label: string;
  href?: string;
  active?: boolean;
  danger?: boolean;
  icon: "user" | "bell" | "grid" | "plus" | "card" | "heart" | "lock" | "logout";
}
