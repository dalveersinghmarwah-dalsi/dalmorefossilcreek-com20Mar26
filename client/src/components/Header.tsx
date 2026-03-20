import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ASSETS, NAV_ITEMS, VENUE_INFO } from "../../../shared/const";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={ASSETS.logo} alt="Dalmore" className="h-12 w-auto" />
            <span className="hidden sm:inline font-serif text-lg font-semibold text-gray-900">
              DALMORE
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item: any) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                  isActive(item.href)
                    ? "text-rose-600 bg-rose-50"
                    : "text-gray-700 hover:text-rose-600 hover:bg-rose-50"
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/schedule-tour">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              Schedule Tour
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-rose-600"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item: any) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors block ${
                    isActive(item.href)
                      ? "text-rose-600 bg-rose-50"
                      : "text-gray-700 hover:text-rose-600 hover:bg-rose-50"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/schedule-tour">
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white"
              >
                Schedule Tour
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
