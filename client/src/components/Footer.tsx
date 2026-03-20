import { VENUE_INFO, SOCIAL_LINKS } from "../../../shared/const";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "Facebook":
        return <Facebook size={20} />;
      case "Instagram":
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-rose-400">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-rose-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{VENUE_INFO.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-rose-400 flex-shrink-0" />
                <a
                  href={`tel:${VENUE_INFO.phone}`}
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  {VENUE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-rose-400 flex-shrink-0" />
                <a
                  href={`mailto:${VENUE_INFO.email}`}
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  {VENUE_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-rose-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/schedule-tour"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  Schedule Tour
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-rose-400">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link: any) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                  aria-label={link.platform}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} {VENUE_INFO.name}. All rights
              reserved.
            </p>
            <p className="mt-2">
              A luxurious event venue in Fort Worth, Texas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
