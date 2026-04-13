"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";

interface ContactDialogProps {
  children: React.ReactNode;
  source?: "get_started" | "consultation";
  title?: string;
  description?: string;
}

export function ContactDialog({
  children,
  source = "get_started",
  title,
  description,
}: ContactDialogProps) {
  const [open, setOpen] = useState(false);

  const defaultTitle =
    source === "consultation"
      ? "Request a Free Consultation"
      : "Get Started With Your Project";

  const defaultDescription =
    source === "consultation"
      ? "Tell us about your project and we'll get back to you within 24 hours with a free estimate."
      : "Fill out the form below and our team will reach out to discuss your construction needs.";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title || defaultTitle}</DialogTitle>
          <DialogDescription>{description || defaultDescription}</DialogDescription>
        </DialogHeader>
        <ContactForm
          source={source}
          compact
          onSuccess={() => {
            setTimeout(() => setOpen(false), 2000);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
