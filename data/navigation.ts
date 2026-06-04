import type { FooterColumn, NavItem } from "@/types";

export const navbarLinks: NavItem[] = [
  { href: "/", label: "Нүүр" },
  { href: "/search", label: "Зарын жагсаалт" },
  { href: "/compare", label: "Харьцуулах" },
  { href: "/saved", label: "Хадгалсан зар" },
  { href: "/loan", label: "Зээлийн хүсэлт" },
  { href: "/escrow", label: "Escrow" },
  { href: "/notifications", label: "Мэдэгдэл" },
];

export const mobileNavLinks: NavItem[] = [
  { href: "/", label: "Нүүр" },
  { href: "/search", label: "Хайх" },
  { href: "/post", label: "Зар" },
  { href: "/saved", label: "Хадгалсан" },
  { href: "/profile", label: "Профайл" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Платформ",
    links: [
      { href: "/search", label: "Машин хайх" },
      { href: "/post", label: "Зар оруулах" },
      { href: "/compare", label: "Машин харьцуулах" },
      { href: "/loan", label: "Зээлийн хүсэлт" },
    ],
  },
  {
    title: "Дэмжлэг",
    links: [
      { href: "/escrow", label: "Escrow мэдээлэл" },
      { href: "/complaint", label: "Гомдол гаргах" },
      { label: "Тусламж" },
      { label: "Холбоо барих" },
    ],
  },
  {
    title: "Холбоо барих",
    links: [
      { label: "📞 +976 7700-0000" },
      { label: "✉️ info@moncar.mn" },
      { label: "📍 УБ хот, Монгол улс" },
    ],
  },
];
