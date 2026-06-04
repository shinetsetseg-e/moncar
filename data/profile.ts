import type { ProfileMenuItem } from "@/types";

export const profileMenuItems: ProfileMenuItem[] = [
  { label: "Хувийн мэдээлэл", active: true, icon: "user" },
  { label: "Мэдэгдлийн тохиргоо", href: "/notifications", icon: "bell" },
  { label: "Ebarimt тохиргоо", icon: "grid" },
  { label: "Миний зар", href: "/post", icon: "plus" },
  { label: "Миний зээлийн хүсэлт", href: "/loan", icon: "card" },
  { label: "Хадгалсан зар", href: "/saved", icon: "heart" },
  { label: "Нууц үг солих", icon: "lock" },
  { label: "Гарах", danger: true, icon: "logout" },
];
