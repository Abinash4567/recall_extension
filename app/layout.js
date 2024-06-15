import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recall",
  description: "Chrome extension to make Alzimer's patient remember loved ones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <SessionProvider>
      <body className={inter.className}>
          {children}
        </body>
    </SessionProvider>
    </html>
  );
}
