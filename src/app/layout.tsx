import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import ThemedComponent from "@/themes/themes";
import { helvetica } from "@/utils/customFonts";
import Footer from "@/components/footer/footer";
import ExploreComponent from "@/components/explore/exploreComponent";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vampay",
  description: "Vampay - Your All-in-One Payment Powerhouse! Accept Payments from any app through vampay and stay in control with your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemedComponent mode={"light"}>
        <body className={`${helvetica.variable} ${poppins.className} relative`}>
          <Navbar />
          {children}
          <ExploreComponent />
          <Footer />
        </body>
      </ThemedComponent>
    </html>
  );
}
