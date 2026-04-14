"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Logo } from "@/components/ui/logo";
import { ContactDialog } from "@/components/forms/contact-dialog";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA and Phone */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+16185941178"
              className="flex items-center text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
            >
              <Phone className="h-4 w-4 mr-2" />
              (618) 594-1178
            </a>
            <ContactDialog source="get_started">
              <Button>Get Started</Button>
            </ContactDialog>
            <a
              href="https://ranncoroof.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-primary text-primary hover:bg-primary hover:text-white h-10 px-4"
            >
              <span className="leading-tight text-center text-xs">Need<br />Roofing?</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[320px] bg-white p-0">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-border/40">
                  <Logo className="h-10 w-auto" />
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-6">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/20"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-border/40 bg-muted/30">
                  <a
                    href="tel:+16185941178"
                    className="flex items-center justify-center gap-2 py-3 text-base font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (618) 594-1178
                  </a>
                  <ContactDialog source="get_started">
                    <Button
                      className="w-full mt-4"
                      size="lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Button>
                  </ContactDialog>
                  <a
                    href="https://ranncoroof.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center w-full whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-primary text-primary hover:bg-primary hover:text-white h-11 px-8 mt-3"
                  >
                    Need Roofing?
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
