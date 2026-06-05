"use client";

import { Bell, CircleAlert, CircleCheck, CreditCard } from "lucide-react";
import { notifications } from "@/data/notifications";

function iconForTone(tone: "primary" | "orange" | "green" | "gray" = "gray") {
  if (tone === "primary") {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary-100">
        <CircleCheck className="h-5 w-5 text-primary-600" strokeWidth={2} />
      </div>
    );
  }

  if (tone === "orange") {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-orange-bg">
        <CircleAlert className="h-5 w-5 text-orange-warning" strokeWidth={2} />
      </div>
    );
  }

  if (tone === "green") {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-green-bg">
        <CreditCard className="h-5 w-5 text-green-active" strokeWidth={2} />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary-100">
      <Bell className="h-5 w-5 text-gray-400" strokeWidth={2} />
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
