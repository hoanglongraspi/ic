import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu.tsx";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/submission", label: "Submission" },
    { path: "/important-dates", label: "Important Dates" },
    { path: "/registration", label: "Registration" },
    { path: "/program", label: "Program" },
    { path: "/organization", label: "Organization" },
    { path: "/travel", label: "Travel" },
    { path: "/sponsors", label: "Sponsors" },
    { path: "/past-conferences", label: "Past ICIBM" },
    { path: "/contact", label: "Contact" },
  ];

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

          <div className="hidden xl:flex items-center">
            {navItems.map((item) => (
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
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2"
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
