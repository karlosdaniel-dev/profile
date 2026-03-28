'use client';

import React from 'react';
import { portfolioWorkStyle } from '@/consts/portfolio-data';

export function PortfolioWorkStyle() {
    return (
        <section className="bg-white p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                🎯 Como Eu Trabalho
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {portfolioWorkStyle.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition"
                    >
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}