import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";
import { programs } from "@/data/programs";

const phoneRule = z
  .string()
  .min(7, "Enter a phone number we can reach you on")
  .regex(/^[0-9+\-\s()]+$/, "Use digits, spaces, + or - only");

const admissionSchema = z.object({
  parentName: z.string().min(3, "Please enter the parent or guardian name"),
  childName: z.string().min(2, "Please enter the child's name"),
  age: z
    .string()
    .min(1, "Please enter the child's age")
    .regex(/^[0-9]{1,2}$/, "Enter a valid age in years"),
  program: z.string().min(1, "Choose a class level"),
  session: z
    .string()
    .min(1, "Please select which session you are applying for"),
  phone: phoneRule,
  parentContact: phoneRule,
  address: z.string().min(5, "Please enter your home address"),
  previousSchool: z.string().max(200).optional(),
  email: z.string().email("Enter a valid email").or(z.literal("")),
  message: z.string().max(1000).optional(),
});

const contactSchema = z.object({
  name: z.string().min(3, "Please enter your name"),
  phone: phoneRule,
  email: z.string().email("Enter a valid email").or(z.literal("")),
  subject: z.string().min(3, "Add a short subject"),
  message: z.string().min(10, "Please write at least a sentence or two"),
});

type Errors = Record<string, string>;

function Field({
  label,
  name,
  error,
  children,
  hint,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  hint?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      {children}
      {hint && !error ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p className="text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function useFormState<T extends z.ZodTypeAny>(schema: T, buildMessage: (v: z.infer<T>) => string) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields");
      return;
    }
    setErrors({});
    setSent(true);
    const body = encodeURIComponent(buildMessage(parsed.data));
    toast.success("Thank you — your details are ready to send", {
      description: "Your email app will open with the message. You can also call the school.",
    });
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Website inquiry — " + site.name,
    )}&body=${body}`;
    form.reset();
  };

  return { errors, sent, submit };
}

export function AdmissionInquiryForm() {
  const { errors, sent, submit } = useFormState(admissionSchema, (v) =>
    [
      `Parent / guardian: ${v.parentName}`,
      `Child: ${v.childName}`,
      `Age: ${v.age}`,
      `Class level: ${v.program}`,
      `Applying for session: ${v.session}`,
      `Phone: ${v.phone}`,
      `Parent contact number: ${v.parentContact}`,
      `Address: ${v.address}`,
      `Previous school: ${v.previousSchool || "—"}`,
      `Email: ${v.email || "—"}`,
      "",
      v.message || "",
    ].join("\n"),
  );

  return (
    <form onSubmit={submit} noValidate className="surface-card p-6 sm:p-8 border border-border shadow-lift rounded-3xl">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Admission Registration Form</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Send us your details and our admissions office will reach out. Fields marked * are required.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Parent / guardian name *" name="parentName" error={errors["parentName"]}>
          <Input id="parentName" name="parentName" autoComplete="name" placeholder="Full name" className="rounded-xl" />
        </Field>
        <Field label="Child's name *" name="childName" error={errors["childName"]}>
          <Input id="childName" name="childName" placeholder="Child's full name" className="rounded-xl" />
        </Field>
        <Field label="Child's age *" name="age" error={errors["age"]}>
          <Input id="age" name="age" inputMode="numeric" placeholder="e.g. 4" className="rounded-xl" />
        </Field>
        <Field label="Class level *" name="program" error={errors["program"]}>
          <select
            id="program"
            name="program"
            defaultValue=""
            className="flex h-10 w-full rounded-xl border border-input bg-card px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <option value="">Select class level</option>
            {programs.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} ({p.level})
              </option>
            ))}
          </select>
        </Field>
        <Field label="Applying for session *" name="session" error={errors["session"]}>
          <select
            id="session"
            name="session"
            defaultValue=""
            className="flex h-10 w-full rounded-xl border border-input bg-card px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <option value="">Select session</option>
            <option value="August Session">August Session</option>
            <option value="March Session">March Session</option>
          </select>
        </Field>
        <Field label="Phone number *" name="phone" error={errors["phone"]}>
          <Input id="phone" name="phone" inputMode="tel" placeholder="03XX-XXXXXXX" className="rounded-xl" />
        </Field>
        <Field label="Parent contact number *" name="parentContact" error={errors["parentContact"]}>
          <Input id="parentContact" name="parentContact" inputMode="tel" placeholder="03XX-XXXXXXX" className="rounded-xl" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Home address *" name="address" error={errors["address"]}>
            <Textarea id="address" name="address" rows={2} placeholder="House #, street, area, city" className="rounded-xl" />
          </Field>
        </div>
        <Field
          label="Previous school (if any)"
          name="previousSchool"
          error={errors["previousSchool"]}
        >
          <Input id="previousSchool" name="previousSchool" placeholder="Name of previous school" className="rounded-xl" />
        </Field>
        <Field label="Email address (optional)" name="email" error={errors["email"]}>
          <Input id="email" name="email" type="email" placeholder="you@example.com" className="rounded-xl" />
        </Field>
        <div className="sm:col-span-2">
          <Field
            label="Additional Notes / Questions (optional)"
            name="message"
            error={errors["message"]}
            hint="Scholarship inquiry, preferred start date, or anything else we should know…"
          >
            <Textarea id="message" name="message" rows={4} className="rounded-xl" />
          </Field>
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto rounded-full shadow-crimson font-semibold px-8">
        Submit Admission Inquiry
      </Button>
      {sent ? (
        <p className="mt-4 text-sm text-primary font-medium">
          If your email app did not open automatically, please call {site.phones[0]} or {site.phones[1]}.
        </p>
      ) : null}
    </form>
  );
}

export function ContactForm() {
  const { errors, submit } = useFormState(contactSchema, (v) =>
    [`Name: ${v.name}`, `Phone: ${v.phone}`, `Email: ${v.email || "—"}`, `Subject: ${v.subject}`, "", v.message].join(
      "\n",
    ),
  );

  return (
    <form onSubmit={submit} noValidate className="surface-card p-6 sm:p-8 border border-border shadow-lift rounded-3xl">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Send a Message</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Reach out to our Wania Campus office for inquiries, visiting appointments, or information.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Your full name *" name="name" error={errors["name"]}>
          <Input id="name" name="name" autoComplete="name" className="rounded-xl" />
        </Field>
        <Field label="Phone number *" name="phone" error={errors["phone"]}>
          <Input id="phone" name="phone" inputMode="tel" placeholder="03XX-XXXXXXX" className="rounded-xl" />
        </Field>
        <Field label="Email address (optional)" name="email" error={errors["email"]}>
          <Input id="email" name="email" type="email" className="rounded-xl" />
        </Field>
        <Field label="Subject *" name="subject" error={errors["subject"]}>
          <Input id="subject" name="subject" placeholder="Admissions, visit, feedback…" className="rounded-xl" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Your message *" name="message" error={errors["message"]}>
            <Textarea id="message" name="message" rows={5} className="rounded-xl" />
          </Field>
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto rounded-full shadow-crimson font-semibold px-8">
        Send Message
      </Button>
    </form>
  );
}