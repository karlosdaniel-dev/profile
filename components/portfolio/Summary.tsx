'use client';

import React from 'react';

import { useTranslations } from 'next-intl';

export function PortfolioSummary() {
    const t = useTranslations('Summary');

    return (
        <section className="bg-white p-2 sm:p-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-200">
                {t('title')}
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg space-y-4">
                <p className="text-base text-slate-700 leading-relaxed">
                    {t('paragraph1')}
                </p>

                <p className="text-base text-slate-700 leading-relaxed">
                    {t('paragraph2')}
                </p>
            </div>
        </section>
    );
}