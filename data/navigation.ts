import type { FooterColumn, NavItem } from "@/types";

export const navbarLinks: NavItem[] = [
  { href: "/", label: "Нүүр" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/services", label: "Үйлчилгээ" },
  { href: "/design-components", label: "Design Components" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Платформ",
    links: [
      { href: "/marketplace", label: "Marketplace" },
      { href: "/post", label: "Зар оруулах" },
      { href: "/saved", label: "Хадгалсан машинууд" },
      { href: "/compare", label: "Машин харьцуулах" },
    ],
  },
  {
    title: "Үйлчилгээ",
    links: [
      { href: "/services", label: "Үйлчилгээ" },
      { href: "/loan", label: "Зээлийн хүсэлт" },
      { href: "/escrow", label: "Escrow мэдээлэл" },
      { href: "/complaint", label: "Гомдол гаргах" },
    ],
  },
  {
    title: "Холбоо барих",
    links: [
      { label: "+976 7700-0000", icon: "phone" },
      { label: "info@moncar.mn", icon: "mail" },
      { label: "УБ хот, Монгол улс", icon: "pin" },
    ],
  },
];
