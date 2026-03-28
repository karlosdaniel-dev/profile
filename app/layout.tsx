import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Karlos Sodre - Portfólio | Desenvolvedor Full Stack',
    description:
        'Portfólio de Karlos Sodre. Desenvolvedor Full Stack especializado em React, TypeScript e arquitetura escalável.',
    openGraph: {
        title: 'Karlos Sodre - Portfólio',
        description: 'Desenvolvedor Full Stack - React, TypeScript, Node.js',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}