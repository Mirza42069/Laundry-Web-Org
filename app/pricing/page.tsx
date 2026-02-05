import Image from "next/image";
import Link from "next/link";

import { WhatsAppCta, WHATSAPP_HREF } from "@/components/whatsapp-cta";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "cuci-kering",
    title: "Cuci Kering",
    badge: "Paling Populer",
    badgeColor: "bg-primary",
    subtitle: "Selesai 2 Hari · Lipat Rapi",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    features: [
      "Cuci bersih maksimal",
      "Pewangi premium",
      "Lipat rapi & rapi",
      "Free plastik wrapping",
    ],
    price: "Rp 5.000",
    unit: "/kg",
    minOrder: "Min. 3kg",
  },
  {
    id: "cuci-setrika",
    title: "Cuci Setrika",
    badge: "Rekomendasi",
    badgeColor: "bg-emerald-500",
    subtitle: "Selesai 3 Hari · Setrika Rapi",
    image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=400&h=300&fit=crop",
    features: [
      "Cuci + setrika profesional",
      "Wangi tahan lama",
      "Hanger gratis",
      "Siap pakai langsung",
    ],
    price: "Rp 7.000",
    unit: "/kg",
    minOrder: "Min. 3kg",
  },
  {
    id: "express",
    title: "Express 1 Hari",
    badge: "Super Cepat",
    badgeColor: "bg-red-500",
    subtitle: "Selesai 24 Jam · Prioritas",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=300&fit=crop",
    features: [
      "Prioritas pengerjaan",
      "Cuci + setrika premium",
      "Antar tepat waktu",
      "Garansi selesai on time",
    ],
    price: "Rp 10.000",
    unit: "/kg",
    minOrder: "Min. 2kg",
  },
  {
    id: "cuci-sepatu",
    title: "Cuci Sepatu",
    badge: "Premium Care",
    badgeColor: "bg-violet-500",
    subtitle: "Selesai 3 Hari · Deep Clean",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    features: [
      "Deep cleaning all type",
      "Repaint (opsional)",
      "Treatment khusus material",
      "Waterproofing (tambahan)",
    ],
    price: "Rp 25.000",
    unit: "/psg",
    minOrder: "Sneakers/Casual",
  },
  {
    id: "cuci-karpet",
    title: "Cuci Karpet",
    subtitle: "Selesai 4 Hari · Bersih Total",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400&h=300&fit=crop",
    features: [
      "Vakum + cuci menyeluruh",
      "Hilangkan noda membandel",
      "Anti tungau & bakteri",
      "Wangi fresh tahan lama",
    ],
    price: "Rp 15.000",
    unit: "/m²",
    minOrder: "Semua jenis karpet",
  },
  {
    id: "cuci-boneka",
    title: "Cuci Boneka",
    subtitle: "Selesai 3 Hari · Gentle Care",
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=300&fit=crop",
    features: [
      "Cuci gentle & hati-hati",
      "Aman untuk anak-anak",
      "Bentuk tetap rapi",
      "Pewangi hypoallergenic",
    ],
    price: "Rp 20.000",
    unit: "/pcs",
    minOrder: "Size S-M",
  },
  {
    id: "self-service",
    title: "Self-Service",
    badge: "Hemat",
    badgeColor: "bg-amber-500",
    subtitle: "Langsung Selesai · Cuci Sendiri",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&h=300&fit=crop",
    features: [
      "Mesin cuci modern",
      "Mesin pengering tersedia",
      "Detergen & pewangi tersedia",
      "Area tunggu nyaman",
    ],
    price: "Rp 20.000",
    unit: "/mesin",
    minOrder: "Per sesi 1 jam",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <div
      className={cn(
        "fade-up group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md",
        index === 0 && "fade-up-delay-1",
        index === 1 && "fade-up-delay-2",
        index === 2 && "fade-up-delay-3"
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        {service.badge && (
          <span
            className={cn(
              "mb-3 inline-flex w-fit rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white",
              service.badgeColor
            )}
          >
            {service.badge}
          </span>
        )}

        <h3 className="text-lg font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          {service.subtitle}
        </p>

        <ul className="mt-4 flex-1 space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">Mulai dari</p>
          <div className="mt-1 flex items-end justify-between">
            <div>
              <span className="text-2xl font-bold text-foreground">
                {service.price}
              </span>
              <span className="text-sm text-muted-foreground">
                {service.unit}
              </span>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                {service.minOrder}
              </p>
            </div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14 lg:py-16">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Kembali
            </Link>
            <Link
              href="/"
              className="font-display text-xl tracking-tight text-foreground"
            >
              FreshWash
            </Link>
          </div>
          <span className="text-xs text-muted-foreground">
            Buka setiap hari 07.00-21.00
          </span>
        </header>

        <section className="mt-12">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl text-foreground sm:text-4xl">
              Layanan Kami
            </h1>
            <p className="mt-3 text-muted-foreground">
              Pilih layanan sesuai kebutuhan. Semua layanan dilengkapi dengan
              perawatan profesional dan garansi kepuasan.
            </p>
            <Link
              href="/syarat-ketentuan"
              className="mt-3 inline-block text-sm text-primary underline"
            >
              Lihat syarat & ketentuan
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        <WhatsAppCta className="mt-16" />

        <footer className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>FreshWash Laundry · Bandung</span>
          <span>Self-service & laundry kiloan tersedia.</span>
        </footer>
      </div>
    </main>
  );
}
