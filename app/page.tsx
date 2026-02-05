import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Cuci Kering",
    price: "Rp 5.000/kg",
    description: "Cuci bersih + lipat rapi",
  },
  {
    title: "Cuci Setrika",
    price: "Rp 7.000/kg",
    description: "Siap pakai langsung",
  },
  {
    title: "Self-Service",
    price: "Rp 20.000/mesin",
    description: "Cuci sendiri di outlet",
  },
];

export default function Page() {
  return (
    <main className="h-[100svh] overflow-hidden bg-background">
      <div className="mx-auto flex h-full max-w-6xl flex-col px-5 py-6 sm:px-6 sm:py-10 lg:py-12">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-xl tracking-tight text-foreground">
            FreshWash
          </span>
          <span className="text-[11px] text-muted-foreground sm:text-xs">
            Buka setiap hari 07.00-21.00
          </span>
        </header>

        <section className="mt-4 grid flex-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Layanan express tersedia
            </div>

            <h1 className="font-display text-2xl leading-tight text-foreground sm:text-4xl">
              Laundry profesional dengan harga transparan.
            </h1>

            <p className="text-sm text-muted-foreground sm:text-base">
              FreshWash menyediakan layanan cuci kiloan, cuci setrika, hingga
              self-service. Harga jelas, perawatan lembut, tanpa biaya
              tersembunyi.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="shimmer inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
              >
                Lihat semua layanan
              </Link>
              <Link
                href="/syarat-ketentuan"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground transition-colors duration-200 hover:bg-muted sm:px-6 sm:py-3 sm:text-sm"
              >
                Syarat & ketentuan
              </Link>
            </div>

            <div className="pt-2">
              <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground sm:text-xs">
                Layanan Populer
              </p>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:mt-3 sm:gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border bg-card px-2.5 py-2 sm:rounded-xl sm:px-3 sm:py-2.5"
                  >
                    <p className="text-[10px] font-semibold leading-tight text-foreground sm:text-[11px]">
                      {item.title}
                    </p>
                    <p className="text-[11px] font-semibold leading-tight text-primary sm:text-sm">
                      {item.price}
                    </p>
                    <p className="hidden text-[11px] text-muted-foreground sm:block sm:text-xs">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src="/laundry-hero.jpg"
                alt="Mesin cuci di FreshWash"
                width={600}
                height={400}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-36 w-full object-cover sm:h-56 lg:h-72"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
