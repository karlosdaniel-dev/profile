import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import type {ReactNode} from "react";

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

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: ReactNode;
    params: Promise<{locale: string}>;
}>) {
    const {locale} = await params;
    setRequestLocale(locale);
    const messages = await getMessages();
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
        </div>
    );
}