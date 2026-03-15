import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

type NavItem = {
  path: string;
  label: string;
  children?: { path: string; label: string }[];
};

export default function MobileMenu({
  open,
  items,
  close,
}: {
  open: boolean;
  items: NavItem[];
  close: () => void;
}) {
  const location = useLocation();
  const [expanded, setExpanded] = React.useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="px-4 py-4 space-y-2">
        {items.map((item) =>
          item.children ? (
            <div key={item.path}>
              <button
                onClick={() =>
                  setExpanded(expanded === item.path ? null : item.path)
                }
                className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 ${
                  location.pathname === item.path ||
                  item.children.some((c) => c.path === location.pathname)
                    ? "bg-gray-100 text-[#005bbb]"
                    : ""
                }`}
              >
                {item.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    expanded === item.path ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expanded === item.path && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#005bbb] pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={close}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 ${
                        location.pathname === child.path
                          ? "bg-gray-100 text-[#005bbb] font-semibold"
                          : ""
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              onClick={close}
              className={`block w-full text-left px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 ${
                location.pathname === item.path
                  ? "bg-gray-100 text-[#005bbb]"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
