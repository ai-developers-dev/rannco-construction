"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  source?: "contact_page" | "get_started" | "consultation";
  onSuccess?: () => void;
  compact?: boolean;
}

export function ContactForm({ source = "contact_page", onSuccess, compact = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
      reset();
      onSuccess?.();
    } catch {
      setError("Something went wrong. Please try again or call us at (618) 594-1178.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div className="space-y-2">
          <Label htmlFor={`name-${source}`}>Full Name *</Label>
          <Input
            id={`name-${source}`}
            placeholder="John Smith"
            {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name is required" } })}
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`email-${source}`}>Email *</Label>
          <Input
            id={`email-${source}`}
            type="email"
            placeholder="john@example.com"
            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Valid email is required" } })}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div className="space-y-2">
          <Label htmlFor={`phone-${source}`}>Phone</Label>
          <Input
            id={`phone-${source}`}
            type="tel"
            placeholder="(618) 555-0123"
            {...register("phone")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`service-${source}`}>Service Needed</Label>
          <Select onValueChange={(value) => setValue("service", value)}>
            <SelectTrigger id={`service-${source}`}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential Construction</SelectItem>
              <SelectItem value="commercial">Commercial Construction</SelectItem>
              <SelectItem value="renovation">Renovations & Remodeling</SelectItem>
              <SelectItem value="project-management">Project Management</SelectItem>
              <SelectItem value="design-build">Design-Build</SelectItem>
              <SelectItem value="concrete">Concrete & Foundation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`message-${source}`}>
          {source === "consultation" ? "Tell us about your project *" : "Message *"}
        </Label>
        <Textarea
          id={`message-${source}`}
          placeholder={
            source === "consultation"
              ? "Describe your project, timeline, and any specific requirements..."
              : "How can we help you?"
          }
          rows={compact ? 3 : 5}
          {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
        />
        {errors.message && (
          <p className="text-destructive text-sm">{errors.message.message}</p>
        )}
      </div>

      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : source === "consultation" ? (
          "Request Consultation"
        ) : source === "get_started" ? (
          "Get Started"
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
