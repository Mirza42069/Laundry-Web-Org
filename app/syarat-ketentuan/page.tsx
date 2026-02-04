import Link from "next/link";

import { WhatsAppCta } from "@/components/whatsapp-cta";

const terms = [
  "Pelayanan dan transaksi mengikuti sistem antrean, dan cucian diproses setelah pembayaran penuh diterima.",
  "Minimum cucian adalah 3 kg. Di laundry kami, cucian pelanggan tidak dicampur (satu mesin untuk satu pelanggan). Pembulatan berat dilakukan ke bawah jika kurang dari 0,4 kg dan ke atas jika di atas 0,5 kg.",
  "Cucian diserahkan dan diambil langsung di outlet. Kami tidak menyediakan wadah untuk cucian kotor; mohon pastikan cucian dibungkus rapi saat diserahkan.",
  "Pemesanan layanan Express setelah pukul 13.00 akan selesai keesokan hari.",
  "Kerusakan pakaian akibat kondisi awal barang (sobek, berlubang, kualitas bahan buruk) bukan tanggung jawab kami.",
  "Apabila terjadi perbedaan jumlah pakaian yang berada dalam tanggung jawab kami, perhitungan yang tercantum pada bukti serah terima adalah yang berlaku.",
  "Barang yang tidak diambil setelah 1 minggu berada di luar tanggung jawab kami.",
  "Ganti rugi diberikan sebesar Rp 20.000/pcs, maksimal Rp 100.000 untuk laundry kiloan, dan 5x nilai cuci untuk item yang tercantum pada nota penjualan laundry satuan.",
  "Hak klaim berlaku 24 jam setelah cucian diambil atau maksimal 1 minggu sejak cucian masuk, dengan melampirkan video unboxing dan struk/e-faktur.",
  "Kami akan memberikan kompensasi sebesar Rp 100.000 apabila tim kami tidak memberikan struk resmi.",
  "Kami tidak menerima item yang mengandung kotoran, darah, atau bulu hewan yang dapat mengurangi higienitas pakaian. Dengan menggunakan layanan kami, pelanggan dianggap menyetujui syarat dan ketentuan yang berlaku.",
  "Perubahan seperti kerusakan, kelunturan, atau penyusutan akibat sifat alami serat bahan dapat terjadi dan berada di luar kendali kami.",
];

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 right-[-10%] h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-[-12%] left-[-6%] h-64 w-64 rounded-full bg-[oklch(0.78_0.08_247/0.3)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),transparent_45%),radial-gradient(circle_at_75%_20%,_rgba(255,200,160,0.35),transparent_55%),radial-gradient(circle_at_20%_80%,_rgba(140,180,255,0.22),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 py-10 sm:py-14 lg:py-20">
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
            Syarat & ketentuan
          </span>
        </header>

        <section className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Dokumen resmi
          </p>
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">
            Syarat & ketentuan layanan FreshWash.
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Dibuat agar proses laundry tetap nyaman, aman, dan jelas untuk
            pelanggan dan tim kami.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span>Terakhir diperbarui: Januari 2026</span>
            <Link href="/pricing" className="underline">
              Lihat detail harga
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur">
          <ol className="list-decimal space-y-4 pl-5 text-sm text-muted-foreground">
            {terms.map((term) => (
              <li key={term} className="leading-relaxed">
                {term}
              </li>
            ))}
          </ol>
        </section>

        <WhatsAppCta className="mt-2" />

        <footer className="flex flex-col justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>FreshWash Laundry · Bandung</span>
          <span>Self-service & laundry kiloan tersedia.</span>
        </footer>
      </div>
    </main>
  );
}
