"use client";

import {
  Home,
  ShoppingBag,
  FileText,
  BarChart3,
  UserRound,
} from "lucide-react";

const navigationItems = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Shop",
    icon: ShoppingBag,
    active: true,
  },
  {
    label: "EMI Dues",
    icon: FileText,
  },
  {
    label: "Limit",
    icon: BarChart3,
  },
  {
    label: "Profile",
    icon: UserRound,
  },
];

export function BottomNavigation() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-32px)] max-w-md -translate-x-1/2 rounded-[28px] border border-gray-100 bg-white/95 px-3 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.10)] backdrop-blur-md">
      <div className="flex items-center justify-between">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className="flex min-w-13.5 flex-col items-center gap-1"
            >
              <Icon
                size={18}
                strokeWidth={item.active ? 2.2 : 1.7}
                className={
                  item.active
                    ? "text-[#7137ed]"
                    : "text-[#9ba3b5]"
                }
              />

              <span
                className={[
                  "text-[9px]",
                  item.active
                    ? "font-semibold text-[#7137ed]"
                    : "font-medium text-[#8e97aa]",
                ].join(" ")}
              >
                {item.label}
              </span>

              {item.active && (
                <span className="absolute bottom-0 h-0.5 w-8 rounded-full bg-[#7137ed]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}