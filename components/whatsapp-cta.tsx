import { cn } from "@/lib/utils";

const defaultCopy = {
  eyebrow: "Siap kapan saja",
  title: "Chat via WhatsApp untuk info layanan dan ketersediaan.",
  description:
    "Tanyakan jam operasional, ketersediaan mesin self-service, atau layanan kiloan. Balasan cepat selama jam buka.",
  buttonLabel: "Chat WhatsApp",
};

const WHATSAPP_HREF = "https://wa.me/62812xxxxxxx";

type WhatsAppCtaProps = {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

function WhatsAppCta({
  className,
  eyebrow = defaultCopy.eyebrow,
  title = defaultCopy.title,
  description = defaultCopy.description,
  buttonLabel = defaultCopy.buttonLabel,
  href = WHATSAPP_HREF,
}: WhatsAppCtaProps) {
  return (
    <section
      aria-labelledby="whatsapp"
      className={cn(
        "rounded-2xl border border-border bg-white p-6 sm:p-8",
        className
      )}
    >
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {eyebrow}
        </p>
        <h2
          id="whatsapp"
          className="text-2xl font-bold text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-6">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-600"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}

export { WHATSAPP_HREF, WhatsAppCta };
