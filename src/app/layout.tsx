import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RITA — Minimalistic, with a twist",
  description:
    "Rita Furer: UX & Usability Lead at GE HealthCare, industrial designer by training, painter since the age of two.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
