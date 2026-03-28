'use client';

import React from 'react';

export function PortfolioFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 p-6 text-center text-gray-400 text-sm border-t border-gray-200">
            © {currentYear} Karlos Sodre. Desenvolvido com Next.js & Tailwind CSS.
        </footer>
    );
}