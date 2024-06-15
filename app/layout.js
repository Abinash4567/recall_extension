import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recall",
  description: "Chrome extension to make Alzimer's patient remember loved ones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Providers>
      <body className={inter.className}>
          {children}
        </body>
    </Providers>
    </html>
  );
}
