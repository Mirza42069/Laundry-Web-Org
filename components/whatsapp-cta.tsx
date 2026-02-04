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
        "grid gap-6 rounded-3xl border border-border/70 bg-card/80 px-6 py-10 shadow-sm backdrop-blur sm:px-10",
        className
      )}
    >
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2
          id="whatsapp"
          className="font-display text-3xl text-foreground sm:text-4xl"
        >
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}

export { WHATSAPP_HREF, WhatsAppCta };
