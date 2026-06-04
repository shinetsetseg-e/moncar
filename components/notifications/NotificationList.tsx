"use client";

import { notifications } from "@/data/notifications";

function iconForTone(tone: "primary" | "orange" | "green" | "gray" = "gray") {
  if (tone === "primary") {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary-100">
        <svg width="20" height="20" fill="none" stroke="var(--primary-600)" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
    );
  }

  if (tone === "orange") {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-orange-bg">
        <svg width="20" height="20" fill="none" stroke="var(--orange-warning)" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
    );
  }

  if (tone === "green") {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-green-bg">
        <svg width="20" height="20" fill="none" stroke="var(--green-active)" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary-100">
      <svg width="20" height="20" fill="none" stroke="var(--gray-400)" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      </svg>
    </div>
  );
}

export default function NotificationList() {
  return (
    <>
      <div className="flex items-center justify-between rounded-t-xl border border-b-0 border-gray-200 bg-white px-5 py-4">
        <div>
          <div className="text-lg font-bold text-gray-900">Мэдэгдлүүд</div>
          <div className="text-[13px] text-gray-500">3 шинэ мэдэгдэл</div>
        </div>
        <span className="cursor-pointer text-[13px] font-medium text-primary-600">Бүгдийг унших</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="flex flex-col">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`relative flex cursor-pointer gap-3.5 border-b border-gray-100 px-5 py-4 transition-colors last:border-b-0 hover:bg-gray-50 ${
                notification.unread ? "bg-primary-50" : ""
              } ${index === 0 ? "rounded-t-xl" : ""} ${index === notifications.length - 1 ? "rounded-b-xl" : ""}`}
            >
              {notification.unread ? <div className="absolute bottom-0 left-0 top-0 w-[3px] rounded-l-[2px] bg-primary-600" /> : null}
              {iconForTone(notification.tone)}
              <div className="flex-1">
                <div className={`mb-[3px] text-sm font-semibold ${notification.tone === "gray" ? "text-gray-600" : "text-gray-900"}`}>
                  {notification.title}
                </div>
                <div className="text-[13px] text-gray-500">{notification.description}</div>
              </div>
              <div className="mt-0.5 shrink-0 text-[11px] text-gray-400">{notification.time}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
