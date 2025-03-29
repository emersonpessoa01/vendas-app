import type { Metadata } from "next";
import "./globals.css";
import "bulma/css/bulma.min.css";

export const metadata: Metadata = {
  title: "Vendas App",
  description: "Aplicação de vendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
