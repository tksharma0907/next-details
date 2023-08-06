"use client";

import { Header } from "@common";
import { poppins } from "@common/Fonts";
import { useThemeSelector } from "@hooks";
import { Providers } from "@redux/provider";

export default function RootLayout({ children, params }) {
  useThemeSelector();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
