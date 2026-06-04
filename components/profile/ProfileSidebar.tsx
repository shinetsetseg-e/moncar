import Link from "next/link";
import { profileMenuItems } from "@/data/profile";
import { HeartIcon, UserIcon } from "@/components/icons";

function SidebarIcon({ icon }: { icon: (typeof profileMenuItems)[number]["icon"] }) {
  if (icon === "user") return <UserIcon className="h-4 w-4" />;
  if (icon === "bell") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    );
  }
  if (icon === "grid") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    );
  }
  if (icon === "plus") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="M9 12h6M12 9v6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    );
  }
  if (icon === "card") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    );
  }
  if (icon === "heart") return <HeartIcon className="h-4 w-4" />;
  if (icon === "lock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

export default function ProfileSidebar() {
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
