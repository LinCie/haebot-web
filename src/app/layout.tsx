import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";

import "./globals.css";
import DrawerAppBar from "@/components/layout/appbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
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
        <CssBaseline />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <DrawerAppBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
