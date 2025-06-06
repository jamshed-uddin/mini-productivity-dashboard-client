import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";

const ibmPlex = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stride",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlex.className} antialiased max-w-7xl h-screen overflow-hidden mx-auto bg-white`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
