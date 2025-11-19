import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollWrapper from "@/components/ui/ScrollWrapper";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Re-export fix

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Portfolio | Creative Developer",
    description: "High-end developer portfolio inspired by yasio.dev",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(inter.variable, outfit.variable, "font-sans antialiased bg-background text-white")}>
                <CustomCursor />
                <Navbar />
                <ScrollWrapper>
                    {children}
                    <Footer />
                </ScrollWrapper>
            </body>
        </html>
    );
}
