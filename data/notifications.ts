import type { NotificationItem } from "@/types";

export const notifications: NotificationItem[] = [
  {
    id: "premium-confirmed",
    title: "Premium төлбөр баталгаажлаа",
    description: "Toyota Prius 30-ийн зарын Premium эрх идэвхжлээ.",
    time: "10 мин",
    unread: true,
    tone: "primary",
  },
  {
    id: "listing-review",
    title: "Таны зар шалгагдаж байна",
    description: "Toyota Aqua 2018-ийн зарыг admin шалгаж байна. 24 цагийн дотор мэдэгдэнэ.",
    time: "2 цаг",
    unread: true,
    tone: "orange",
  },
  {
    id: "loan-submitted",
    title: "Зээлийн хүсэлт илгээгдлээ",
    description: "Land Cruiser 200-ийн зээлийн хүсэлт IIC банкинд илгээгдлээ.",
    time: "1 өдөр",
    unread: true,
    tone: "green",
  },
  {
    id: "welcome",
    title: "Тавтай морилно уу!",
    description: "MonCar платформд бүртгэгдсэн таньд баярлалаа.",
    time: "3 өдөр",
    tone: "gray",
  },
];
