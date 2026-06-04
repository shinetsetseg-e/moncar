import type { CompareRow } from "@/types";

export const compareRows: CompareRow[] = [
  { label: "Он", values: ["2019", "2020", "2017"] },
  { label: "Явсан км", values: ["85,000 км", "42,000 км", "110,000 км"] },
  { label: "Хөдөлгүүр", values: ["4.0L V8", "3.5L V6 Hybrid", "1.8L Hybrid"] },
  { label: "Дамжуулга", values: ["Автомат", "Автомат", "Автомат"] },
  { label: "Нөхцөл", values: ["Маш сайн", "Шинэ", "Сайн"] },
  { label: "Байршил", values: ["УБ, Сүхбаатар", "УБ, Баянзүрх", "УБ, Баянзүрх"] },
  {
    label: "Зээл",
    values: ["Тийм", "Тийм", "Үгүй"],
    badgeValues: ["loan", "loan", "normal"],
  },
];
