'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export function PortfolioAbout() {
    const t = useTranslations('About');

    // Como sabemos que temos 6 diferenciais, criamos um array simples para iterar
    const differentiatorsCount = 6;

    return (
        <section className="bg-slate-50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                {t('title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Texto principal */}
                <div className="space-y-4">
                    <p className="text-base text-gray-700 leading-relaxed">
                        {t('paragraph1')}
                    </p>

                    <p className="text-base text-gray-700 leading-relaxed">
                        {t('paragraph2')}
                    </p>

                    <p className="text-base text-gray-700 leading-relaxed">
                        {t('paragraph3')}
                    </p>
                </div>

                {/* Diferenciais */}
                <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-5">{t('differentiatorsTitle')}</h3>
                    <div className="space-y-3">
                        {Array.from({ length: differentiatorsCount }).map((_, index) => (
                            <div key={index} className="flex gap-3">
                                <div className="text-blue-600 text-xl flex-shrink-0">✓</div>
                                <p className="text-gray-700 text-sm font-medium">
                                    {/* Busca dinamicamente do array no JSON pelo índice */}
                                    {t(`differentiators.${index}`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}