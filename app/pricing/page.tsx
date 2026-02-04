import Link from "next/link";

import { WhatsAppCta } from "@/components/whatsapp-cta";
import { cn } from "@/lib/utils";

const pricingColumns = [
  {
    title: "5 kg",
    price: "Rp 35rb",
    note: "Cocok mingguan",
  },
  {
    title: "10 kg",
    price: "Rp 60rb",
    note: "Paling populer",
    highlight: true,
  },
  {
    title: "15 kg",
    price: "Rp 80rb",
    note: "Paket keluarga",
  },
];

const pricingRows = [
  {
    label: "Cuci + lipat rapi",
    values: ["Ya", "Ya", "Ya"],
  },
  {
    label: "Laundry tidak dicampur",
    values: ["Ya", "Ya", "Ya"],
  },
  {
    label: "Pewangi lembut",
    values: ["Ya", "Ya", "Opsional"],
  },
  {
    label: "Opsi tanpa pewangi",
    values: ["Tidak", "Tidak", "Ya"],
  },
  {
    label: "Prioritas selesai",
    values: ["Tidak", "Ya", "Tidak"],
  },
  {
    label: "Estimasi selesai",
    values: ["48 jam", "36 jam", "48 jam"],
  },
];

const promos = [
  {
    title: "Harga reguler",
    detail: "Min 3 kg, Rp 7rb/kg.",
  },
  {
    title: "Promo aktif",
    detail: "Tapi promo masih Rp 5rb/kg.",
  },
];

const selfServiceRates = [
  {
    label: "Mesin cuci (1 jam)",
    price: "Rp 20rb",
  },
  {
    label: "Mesin pengering (45 menit)",
    price: "Rp 18rb",
  },
  {
    label: "Detergen + pewangi",
    price: "Rp 5rb",
  },
];

const mobileRows = [
  "Cuci + lipat rapi",
  "Pewangi lembut",
  "Opsi tanpa pewangi",
  "Estimasi selesai",
];

const mobilePackages = pricingColumns.map((column, columnIndex) => ({
  ...column,
  details: pricingRows
    .filter((row) => mobileRows.includes(row.label))
    .map((row) => ({
      label: row.label,
      value: row.values[columnIndex],
    })),
}));

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 right-[-10%] h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-[-12%] left-[-6%] h-64 w-64 rounded-full bg-[oklch(0.78_0.08_247/0.3)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),transparent_45%),radial-gradient(circle_at_75%_20%,_rgba(255,200,160,0.35),transparent_55%),radial-gradient(circle_at_20%_80%,_rgba(140,180,255,0.22),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-14 px-6 py-10 sm:py-14 lg:py-20">
        <header className="flex flex-col gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-primary-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              Kembali
            </Link>
            <Link
              href="/"
              className="font-display text-lg normal-case tracking-normal text-foreground"
            >
              FreshWash
            </Link>
          </div>
          <span className="text-[11px] tracking-[0.2em] sm:text-xs">
            Buka setiap hari 07.00-21.00
          </span>
        </header>

        <section className="grid gap-6">
          <div className="space-y-5">
            <h1 className="font-display text-balance text-4xl leading-tight text-foreground sm:text-5xl">
              Pilih paket sesuai kebutuhan, tanpa biaya tersembunyi.
            </h1>
            <Link href="/syarat-ketentuan" className="text-xs underline">
              Lihat syarat & ketentuan
            </Link>
          </div>
        </section>

        <section className="grid gap-6">
          <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur sm:p-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Self-service
              </p>
              <h2 className="font-display text-3xl text-foreground">
                Harga mesin untuk cuci sendiri di outlet.
              </h2>
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border/70 bg-white/80">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {selfServiceRates.map((rate) => (
                    <tr key={rate.label} className="border-t border-border/60">
                      <td className="px-4 py-3 text-foreground">
                        {rate.label}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-foreground">
                        {rate.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-card/80 shadow-sm backdrop-blur">
            <div className="border-b border-border/70 px-6 py-5 sm:px-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                Full service
              </p>
              <h3 className="font-display text-3xl text-foreground">
                Laundry kiloan (per kg).
              </h3>
            </div>

            <div className="p-4 sm:hidden">
              <div className="grid gap-4">
                {mobilePackages.map((pkg) => (
                  <div
                    key={pkg.title}
                    className={cn(
                      "rounded-2xl border bg-card/90 p-4 shadow-sm",
                      pkg.highlight && "border-primary/50 bg-white/90"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {pkg.title}
                        </p>
                        <p className="font-display text-2xl text-foreground">
                          {pkg.price}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {pkg.note}
                        </p>
                      </div>
                      {pkg.highlight && (
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Favorit
                        </span>
                      )}
                    </div>
                    <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                      {pkg.details.map((detail) => (
                        <div
                          key={detail.label}
                          className="flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                          <span className="text-foreground/80">
                            {detail.label}
                          </span>
                          <span className="ml-auto text-foreground">
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="overflow-x-auto">
                <table className="min-w-[680px] w-full border-collapse">
                  <thead className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <tr>
                      <th className="px-4 py-4 text-left">Paket</th>
                      {pricingColumns.map((column) => (
                        <th
                          key={column.title}
                          className={cn(
                            "px-4 py-4 text-left",
                            column.highlight && "bg-white/80 text-foreground"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">
                              {column.title}
                            </span>
                            {column.highlight && (
                              <span className="rounded-full bg-primary/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
                                Favorit
                              </span>
                            )}
                          </div>
                          <div className="font-display text-lg text-foreground">
                            {column.price}
                          </div>
                          <div className="text-[11px] normal-case tracking-normal text-muted-foreground">
                            {column.note}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {pricingRows.map((row) => (
                      <tr key={row.label} className="border-t border-border/60">
                        <td className="px-4 py-3 font-medium text-foreground">
                          {row.label}
                        </td>
                        {row.values.map((value, index) => (
                          <td
                            key={`${row.label}-${pricingColumns[index].title}`}
                            className={cn(
                              "px-4 py-3 text-muted-foreground",
                              pricingColumns[index].highlight &&
                                "bg-white/70 text-foreground"
                            )}
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur sm:p-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Informasi promo
              </p>
              <h2 className="font-display text-3xl text-foreground">
                Detail harga dan promo saat ini.
              </h2>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {promos.map((promo) => (
                <div
                  key={promo.title}
                  className="rounded-2xl border border-primary/30 bg-white/80 p-4 text-sm text-muted-foreground shadow-sm"
                >
                  <p className="font-semibold text-foreground">{promo.title}</p>
                  <p className="mt-2 text-xs leading-relaxed">{promo.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhatsAppCta className="mt-4" />

        <footer className="flex flex-col justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>FreshWash Laundry · Bandung</span>
          <span>Self-service & laundry kiloan tersedia.</span>
        </footer>
      </div>
    </main>
  );
}
