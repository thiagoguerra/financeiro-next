import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: "Controle Financeiro",
  description: "Sistema para a gestão financeira pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
