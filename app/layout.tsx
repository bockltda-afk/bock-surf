import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomás Bock | Surf Coach Profesional Chile",
  description: "Aprende a surfear con Tomás Bock, surfista profesional chileno. Coaching de surf presencial y cursos online para todos los niveles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
