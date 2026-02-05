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
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-10 sm:py-14 lg:py-20">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Kembali
            </Link>
            <Link
              href="/"
              className="text-lg font-semibold text-foreground"
            >
              FreshWash
            </Link>
          </div>
          <span className="text-sm text-muted-foreground">
            Syarat & Ketentuan
          </span>
        </header>

        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Syarat & Ketentuan
          </h1>
          <p className="text-muted-foreground">
            Ketentuan layanan FreshWash Laundry. Dibuat agar proses laundry
            tetap nyaman, aman, dan jelas untuk pelanggan dan tim kami.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Terakhir diperbarui: Januari 2026</span>
            <Link href="/pricing" className="text-primary hover:underline">
              Lihat detail harga
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-6 sm:p-8">
          <ol className="list-decimal space-y-4 pl-5 text-sm text-muted-foreground">
            {terms.map((term) => (
              <li key={term} className="leading-relaxed">
                {term}
              </li>
            ))}
          </ol>
        </section>

        <WhatsAppCta />

        <footer className="flex flex-col justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <span>FreshWash Laundry · Bandung</span>
          <span>Self-service & laundry kiloan tersedia.</span>
        </footer>
      </div>
    </main>
  );
}
