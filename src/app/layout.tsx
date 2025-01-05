import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: "Shakil Ahmed - Portfolio",
  description: "A portfolio of Shakil Ahmed, a MERN stack Developer based in Bangladesh, Dhaka.",
  authors: [
    { name: "Shakil Ahmed", url: "https://xhakil.vercel.app" },
  ],
  openGraph: {
    title: "Shakil Ahmed - Portfolio",
    description: "A portfolio of Shakil Ahmed, a MERN stack Developer based in Bangladesh, Dhaka.",
    url: "https://xhakil.vercel.app",
    siteName: "Shakil Ahmed - Portfolio",
    type: "website",
    images: [
      {
        url: "https://xhakil.vercel.app/Screenshot.png",
        width: 3410,
        height: 2072,
        alt: "Shakil Ahmed - Portfolio",
      },
    ],
  },
  icons: { icon: "/profile.jpg", },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${silka.className}`}>
        <ThemeProvider attribute="class">
        
          <div style={{
            flex: "none",
            height: "100%",
            left: "calc(50.00000000000002% - 100% / 2)",
            pointerEvents: "none",
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "4",
          }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "64px",
                backgroundRepeat: "repeat",
                backgroundImage: "url(/Static.png)",
                opacity: "0.06",
                borderRadius: "0px",
              }}
            />
          </div>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
