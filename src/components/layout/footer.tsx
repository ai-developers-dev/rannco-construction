import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const navigation = {
  services: [
    { name: "Residential Construction", href: "/services#residential" },
    { name: "Commercial Construction", href: "/services#commercial" },
    { name: "Renovations", href: "/services#renovations" },
    { name: "Project Management", href: "/services#management" },
    { name: "Design-Build", href: "/services#design-build" },
    { name: "Concrete & Foundation", href: "/services#concrete" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="h-10 w-auto brightness-0 invert" />
            <p className="text-background/80 text-sm">
              Southern Illinois&apos; most trusted construction company. Over
              20 years of building excellence in residential and commercial
              construction, renovations, and design-build services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+16185941178"
                  className="text-background/80 hover:text-white transition-colors text-sm"
                >
                  (618) 594-1178
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:chood@rannco.com"
                  className="text-background/80 hover:text-white transition-colors text-sm"
                >
                  chood@rannco.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  505 E Walnut St<br />
                  Harrisburg, IL 62946<br />
                  Serving All of Southern Illinois
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Mon - Fri: 7:00 AM - 6:00 PM<br />
                  Sat: 8:00 AM - 2:00 PM<br />
                  24/7 Emergency Services
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Rannco Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-background/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-background/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
