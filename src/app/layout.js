import { Inter } from "next/font/google";
import { MedievalSharp } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const medieval = MedievalSharp({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Lord of The Rings Librarian",
  description: "Search Lord of the Rings cast, books, and characters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
