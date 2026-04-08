'use client';

import React from 'react';
import { portfolioWorkStyle } from '@/consts/portfolio-data';
import { useTranslations } from 'next-intl';

export function PortfolioWorkStyle() {
    // Hooks de tradução
    const t = useTranslations('Portfolio');
    const tWorkStyle = useTranslations('Portfolio.WorkStyle');

    return (
        <section className="bg-white p-2 sm:p-4 break-after-page">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                {t('workStyleTitle')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {portfolioWorkStyle.map((item) => (
                    <div
                        key={item.id} // Usando o ID que adicionamos no arquivo de dados
                        className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition"
                    >
                        <div className="text-3xl mb-3">{item.icon}</div>
                        {/* Busca o título traduzido usando o ID */}
                        <h3 className="text-base font-bold text-slate-900 mb-2">
                            {tWorkStyle(`${item.id}.title`)}
                        </h3>
                        {/* Busca a descrição traduzida usando o ID */}
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {tWorkStyle(`${item.id}.description`)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}