import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limitless - The truly Limitless design subscription",
  description:
    "Say goodbye to expensive freelancers, and hello to limitless, lightning fast design.",
  icons: {
    icon: "/images/limitless/favicon.png",
    shortcut: "/images/limitless/favicon.png",
    apple: "/images/limitless/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
        {children}
      </body>
    </html>
  );
}
