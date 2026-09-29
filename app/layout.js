import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const urbanist = localFont({
  src: "./fonts/urbanist-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata = {
  metadataBase: new URL("https://www.trinitydeck.com"),
  icons: {
    icon: [{ url: "/assets/img/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#edecec",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={urbanist.variable} suppressHydrationWarning>
      <head>
        {/* Reveal animations only hide content once JavaScript is confirmed */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
