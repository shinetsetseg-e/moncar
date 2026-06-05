"use client";

import {
  Bell,
  CreditCard,
  Grid2x2,
  Heart,
  Lock,
  LogOut,
  PlusCircle,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { profileMenuItems } from "@/data/profile";

function SidebarIcon({ icon }: { icon: (typeof profileMenuItems)[number]["icon"] }) {
  if (icon === "user") return <User className="h-4 w-4" strokeWidth={2} />;
  if (icon === "bell") return <Bell className="h-4 w-4" strokeWidth={2} />;
  if (icon === "grid") return <Grid2x2 className="h-4 w-4" strokeWidth={2} />;
  if (icon === "plus") return <PlusCircle className="h-4 w-4" strokeWidth={2} />;
  if (icon === "card") return <CreditCard className="h-4 w-4" strokeWidth={2} />;
  if (icon === "heart") return <Heart className="h-4 w-4" strokeWidth={2} />;
  if (icon === "lock") return <Lock className="h-4 w-4" strokeWidth={2} />;
  return <LogOut className="h-4 w-4" strokeWidth={2} />;
}

export default function ProfileSidebar() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <aside className="overflow-hidden rounded-xl border border-gray-200 bg-white md:sticky md:top-20 md:h-fit">
      <div className="border-b border-gray-100 px-5 pb-5 pt-7 text-center">
        <div className="mx-auto mb-3 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary-100 text-[28px] font-bold text-primary-600">Б</div>
        <div className="text-base font-bold text-gray-900">Батбаяр Дорж</div>
        <div className="text-[13px] text-gray-500">+976 9900 0000</div>
      </div>
      <div className="p-2">
        {profileMenuItems.map((item) => {
          const content = (
            <span
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                item.active
                  ? "bg-primary-50 font-semibold text-primary-700"
                  : item.danger
                    ? "text-red-danger hover:bg-red-bg"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <SidebarIcon icon={item.icon} />
              {item.label}
            </span>
          );

          if (item.danger) {
            return (
              <button
                key={item.label}
                type="button"
                className="w-full text-left"
                onClick={() => {
                  logout();
                  router.push("/");
                }}
              >
                {content}
              </button>
            );
          }

          return item.href ? (
            <Link key={item.label} href={item.href}>
              {content}
            </Link>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>
    </aside>
  );
}
