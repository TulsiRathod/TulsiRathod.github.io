import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tulsi Rathod — Backend Developer",
  description:
    "Backend developer at Commotion. Java, Spring Boot, distributed systems, Kafka, microservices.",
  openGraph: {
    title: "Tulsi Rathod — Backend Developer",
    description:
      "Backend developer working on AI agent platforms, event-driven systems, and Spring Boot microservices.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
