import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-hind-siliguri",
});

export const metadata = {
  title: "সাইমাস বেকড হোম - সুস্বাদু ঘরোয়া কেক",
  description: "ফটিকছড়িতে ঘরোয়া পরিবেশে তৈরি সেরা মানের কেক।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} font-bn antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
