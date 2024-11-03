import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Providers } from "./providers";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT HaeBot Teknologi Indonesia",
  description:
    "Temukan solusi CNC terbaik di PT HaeBot Teknologi Indonesia:Pusat penjualan komponen CNC berkualitas tinggi dan layanan konsultasi profesional untuk kebutuhan industri Anda. Kami menyediakan beragam suku cadang CNC dari merek terpercaya serta layanan konsultasi teknis untuk memastikan efisiensi dan kinerja optimal mesin Anda. Tingkatkan produktivitas dengan solusi CNC yang tepat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
