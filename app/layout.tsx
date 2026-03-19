import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Utkarsh Rahim — Technical Lead",
  description: "Full-Stack Engineer (Frontend Heavy) based in Bengaluru.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
