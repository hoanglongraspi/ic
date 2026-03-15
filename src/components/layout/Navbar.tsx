import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu.tsx";

type NavItem = {
  path: string;
  label: string;
  children?: { path: string; label: string }[];
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/submission", label: "Submission" },
    { path: "/important-dates", label: "Important Dates" },
    { path: "/registration", label: "Registration" },
    { path: "/program", label: "Program" },
    {
      path: "/organization",
      label: "Organization",
      children: [
        { path: "/organization", label: "Organization Committee" },
        { path: "/program-committee", label: "Program Committee" },
      ],
    },
    { path: "/travel", label: "Travel" },
    { path: "/sponsors", label: "Sponsors" },
    { path: "/past-conferences", label: "Past ICIBM" },
    { path: "/contact", label: "Contact" },
  ];

  const isOrganizationActive =
    location.pathname === "/organization" ||
    location.pathname === "/program-committee";

  return (
    <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="text-left">
              <h1 className="text-2xl font-bold text-[#005bbb]">ICIBM 2026</h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                International Conference on Intelligent Biology and Medicine
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.path}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                      isOrganizationActive
                        ? "text-[#005bbb] border-b-2 border-[#005bbb]"
                        : "text-gray-700 hover:text-[#005bbb]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-lg min-w-[200px] z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-3 text-sm whitespace-nowrap transition-colors hover:bg-gray-50 hover:text-[#005bbb] ${
                            location.pathname === child.path
                              ? "text-[#005bbb] font-semibold bg-blue-50"
                              : "text-gray-700"
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
                  className={`px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    location.pathname === item.path
                      ? "text-[#005bbb] border-b-2 border-[#005bbb]"
                      : "text-gray-700 hover:text-[#005bbb]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} items={navItems} close={() => setOpen(false)} />
    </nav>
  );
}
