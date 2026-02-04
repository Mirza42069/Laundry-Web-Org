import Image from "next/image";
import Link from "next/link";

import { WhatsAppCta } from "@/components/whatsapp-cta";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    title: "5 kg",
    price: "Rp 35rb",
    note: "Cocok mingguan",
    highlight: false,
    features: ["Cuci + lipat", "Pewangi lembut", "Selesai 48 jam"],
  },
  {
    title: "10 kg",
    price: "Rp 60rb",
    note: "Paling populer",
    highlight: true,
    features: ["Cuci + lipat", "Prioritas selesai", "Harga hemat/kg"],
  },
  {
    title: "15 kg",
    price: "Rp 80rb",
    note: "Paket keluarga",
    highlight: false,
    features: ["Cuci + lipat", "Opsi tanpa pewangi", "Untuk keluarga"],
  },
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 right-[-10%] h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-[-12%] left-[-6%] h-64 w-64 rounded-full bg-[oklch(0.78_0.08_247/0.3)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),transparent_45%),radial-gradient(circle_at_75%_20%,_rgba(255,200,160,0.35),transparent_55%),radial-gradient(circle_at_20%_80%,_rgba(140,180,255,0.22),transparent_60%)]" />
        <div className="absolute left-[12%] top-[28%] h-16 w-16 rounded-full border border-white/60 bg-white/50 shadow-lg backdrop-blur-sm float-soft" />
        <div className="absolute right-[18%] top-[18%] h-10 w-10 rounded-full border border-white/60 bg-white/50 shadow-lg backdrop-blur-sm float-soft" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:py-14 lg:py-20">
        <header className="flex flex-col gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg normal-case tracking-normal text-foreground">
            FreshWash
          </span>
          <span className="text-[11px] tracking-[0.2em] sm:text-xs">
            Buka setiap hari 07.00-21.00
          </span>
        </header>

        <section className="grid items-start gap-10 lg:grid-cols-[1.05fr_1.25fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Layanan express tersedia
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Laundry yang simpel
              </p>
              <h1 className="font-display text-balance text-4xl leading-tight text-foreground sm:text-5xl">
                Harga jelas untuk hari yang lebih ringan.
              </h1>
            <p className="text-balance text-base text-muted-foreground sm:text-lg">
              FreshWash menyediakan self-service dan laundry kiloan per kg.
              Harga jelas, perawatan lembut, tanpa langganan, tanpa kejutan.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
            <span className="rounded-full border border-border/70 bg-card/70 px-3 py-1">
              Self-service tersedia
            </span>
            <span className="rounded-full border border-border/70 bg-card/70 px-3 py-1">
              Laundry kiloan per kg
            </span>
            <span className="rounded-full border border-border/70 bg-card/70 px-3 py-1">
              Bebas pewangi tersedia
            </span>
          </div>
          </div>

          <div className="space-y-5">
            <div className="fade-up relative overflow-hidden rounded-3xl border bg-card/80 p-2 shadow-sm backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/laundry-hero.jpg"
                  alt="Mesin cuci di studio FreshWash"
                  width={1200}
                  height={900}
                  className="h-56 w-full object-cover sm:h-64 lg:h-72"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 space-y-1 text-white">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                    FreshWash
                  </p>
                  <p className="font-display text-lg sm:text-xl">
                    Bersih rapi, siap pakai.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.title}
                  className={cn(
                    "fade-up relative flex h-full flex-col gap-4 rounded-2xl border bg-card/90 p-4 shadow-sm backdrop-blur",
                    tier.highlight &&
                      "border-primary/50 bg-white/90 shadow-lg ring-1 ring-primary/10",
                    index === 0 && "fade-up-delay-1",
                    index === 1 && "fade-up-delay-2",
                    index === 2 && "fade-up-delay-3"
                  )}
                >
                  {tier.highlight && (
                    <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Favorit
                    </span>
                  )}
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">
                      {tier.title}
                    </p>
                    <p className="font-display text-2xl text-foreground">
                      {tier.price}
                    </p>
                    <p className="text-xs text-muted-foreground">{tier.note}</p>
                  </div>
                  <div className="mt-auto space-y-2 text-xs text-muted-foreground">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/pricing"
                className="shimmer inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Lihat detail harga
              </Link>
              <span className="text-xs text-muted-foreground">
                Paket kiloan dan promo aktif.
              </span>
            </div>
          </div>
        </section>

        <WhatsAppCta />

        <footer className="flex flex-col justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>FreshWash Laundry · Bandung</span>
          <div className="flex flex-wrap items-center gap-3">
            <span>Self-service & laundry kiloan tersedia.</span>
            <Link href="/syarat-ketentuan" className="underline">
              Syarat & ketentuan
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
