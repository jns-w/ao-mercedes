import type { Metadata } from "next";
import "./globals.scss";
import { Footer } from "@/components/footer/footer";
import { ReactNode } from "react";
import { Provider } from "jotai";

import { visby } from "@/styles/fonts/visby";


export const metadata: Metadata = {
  title: "Mercedes-Benz SL55 AMG",
  description: "Your new ride",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={visby.className}>
    <Provider>
      {children}
      <Footer/>
    </Provider>
    </body>
    </html>
  );
}
